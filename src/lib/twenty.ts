// Server-side client for the Twenty CRM REST API.
// Replaces the HubSpot Forms API. Twenty has no native "form submission"
// object, so each website form first saves a Note carrying the full
// submission, then (best-effort) upserts the Person / Company and links them.
//
// Env:
//   TWENTY_API_KEY  — API key from Settings → API & Webhooks (required)
//   TWENTY_API_URL  — base URL, defaults to Twenty Cloud (https://api.twenty.com);
//                     a trailing `/rest` is tolerated

type TwentyRecord = { id: string } & Record<string, unknown>;

type Person = TwentyRecord & {
  name?: { firstName?: string; lastName?: string };
  jobTitle?: string;
  companyId?: string | null;
};

export class TwentyError extends Error {
  constructor(
    message: string,
    public status: number,
  ) {
    super(message);
  }
}

export function isTwentyConfigured(): boolean {
  return Boolean(process.env.TWENTY_API_KEY);
}

const MAX_ATTEMPTS = 3;
const REQUEST_TIMEOUT_MS = 8000;

function isRetryable(status: number): boolean {
  return status === 429 || status >= 500;
}

function retryDelayMs(attempt: number, retryAfter: string | null): number {
  const seconds = Number(retryAfter);
  if (retryAfter && Number.isFinite(seconds)) return Math.min(seconds * 1000, 5000);
  return 300 * 3 ** (attempt - 1); // 300ms, 900ms
}

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

async function twentyRequest(path: string, init: RequestInit = {}): Promise<Record<string, unknown>> {
  // Accept the base URL with or without a trailing `/rest` (Twenty's settings
  // page shows the latter).
  const baseUrl = (process.env.TWENTY_API_URL || 'https://api.twenty.com').replace(/\/+$/, '').replace(/\/rest$/, '');
  const label = `Twenty ${init.method || 'GET'} ${path}`;

  // Retry transient failures (rate limit, 5xx, network/timeout). A retried
  // POST may occasionally create a duplicate — preferable to losing a lead.
  for (let attempt = 1; ; attempt++) {
    let res: Response;
    try {
      res = await fetch(`${baseUrl}/rest${path}`, {
        ...init,
        headers: {
          Authorization: `Bearer ${process.env.TWENTY_API_KEY}`,
          'Content-Type': 'application/json',
          ...init.headers,
        },
        cache: 'no-store',
        signal: AbortSignal.timeout(REQUEST_TIMEOUT_MS),
      });
    } catch (error) {
      if (attempt >= MAX_ATTEMPTS) throw new TwentyError(`${label} failed: ${error}`, 0);
      await sleep(retryDelayMs(attempt, null));
      continue;
    }

    if (res.ok) return res.json();

    const body = await res.text();
    if (!isRetryable(res.status) || attempt >= MAX_ATTEMPTS) {
      throw new TwentyError(`${label} failed: ${body}`, res.status);
    }
    await sleep(retryDelayMs(attempt, res.headers.get('retry-after')));
  }
}

// Twenty wraps payloads under an operation-named key, e.g.
// { data: { people: [...] } } or { data: { createPerson: {...} } }.
// We take the single value under `data` so we don't depend on pluralization.
function unwrap<T>(json: Record<string, unknown>): T {
  const data = json.data as Record<string, unknown> | undefined;
  if (!data) throw new Error('Unexpected Twenty response shape');
  return Object.values(data)[0] as T;
}

function eqFilter(field: string, value: string): string {
  return encodeURIComponent(`${field}[eq]:${JSON.stringify(value)}`);
}

async function findOne<T extends TwentyRecord>(object: string, field: string, value: string): Promise<T | null> {
  const json = await twentyRequest(`/${object}?filter=${eqFilter(field, value)}&limit=1`);
  const records = unwrap<T[]>(json);
  return records[0] ?? null;
}

async function createOne<T extends TwentyRecord>(object: string, body: Record<string, unknown>): Promise<T> {
  const json = await twentyRequest(`/${object}`, { method: 'POST', body: JSON.stringify(body) });
  return unwrap<T>(json);
}

async function updateOne<T extends TwentyRecord>(object: string, id: string, body: Record<string, unknown>): Promise<T> {
  const json = await twentyRequest(`/${object}/${id}`, { method: 'PATCH', body: JSON.stringify(body) });
  return unwrap<T>(json);
}

async function findOrCreateCompany(name: string): Promise<TwentyRecord> {
  return (await findOne('companies', 'name', name)) ?? createOne('companies', { name });
}

type PersonInput = {
  email: string;
  firstName?: string;
  lastName?: string;
  jobTitle?: string;
  phone?: string;
  companyId?: string;
};

async function upsertPerson(input: PersonInput): Promise<Person> {
  const existing = await findOne<Person>('people', 'emails.primaryEmail', input.email);

  if (existing) {
    // Only fill gaps — never overwrite what sales may have edited in the CRM.
    const patch: Record<string, unknown> = {};
    if (input.jobTitle && !existing.jobTitle) patch.jobTitle = input.jobTitle;
    if (input.companyId && !existing.companyId) patch.companyId = input.companyId;
    if ((input.firstName || input.lastName) && !existing.name?.firstName && !existing.name?.lastName) {
      patch.name = { firstName: input.firstName ?? '', lastName: input.lastName ?? '' };
    }
    return Object.keys(patch).length ? updateOne<Person>('people', existing.id, patch) : existing;
  }

  const body: Record<string, unknown> = {
    name: { firstName: input.firstName ?? '', lastName: input.lastName ?? '' },
    emails: { primaryEmail: input.email },
  };
  if (input.jobTitle) body.jobTitle = input.jobTitle;
  if (input.companyId) body.companyId = input.companyId;

  if (!input.phone) return createOne<Person>('people', body);

  try {
    return await createOne<Person>('people', { ...body, phones: { primaryPhoneNumber: input.phone } });
  } catch (error) {
    // Twenty validates phone numbers; a free-text value from the form must not
    // lose the lead. The raw phone is still kept in the submission note.
    if (error instanceof TwentyError && error.status === 400) {
      return createOne<Person>('people', body);
    }
    throw error;
  }
}

export type LeadSubmission = {
  /** Human-readable form name, used as the note title (e.g. "Book a Demo"). */
  source: string;
  pageUri: string;
  email: string;
  firstName?: string;
  lastName?: string;
  company?: string;
  jobTitle?: string;
  phone?: string;
  message?: string;
};

export async function submitLead(lead: LeadSubmission): Promise<void> {
  const fullName = [lead.firstName, lead.lastName].filter(Boolean).join(' ');
  const details = [
    ['Form', lead.source],
    ['Page', lead.pageUri],
    ['Name', fullName],
    ['Email', lead.email],
    ['Company', lead.company],
    ['Job title', lead.jobTitle],
    ['Phone', lead.phone],
  ]
    .filter(([, value]) => value)
    .map(([label, value]) => `- **${label}:** ${value}`)
    .join('\n');

  const markdown = lead.message ? `${details}\n\n**Message:**\n\n${lead.message}` : details;

  // The note is written first and holds the full submission, so once it
  // exists the lead can't be lost. Only this step fails the request.
  const note = await createOne('notes', {
    title: `Website form: ${lead.source} — ${fullName ? `${fullName} <${lead.email}>` : lead.email}`,
    bodyV2: { markdown },
  });

  // Enrichment is best-effort: on failure the note stays in Twenty, unlinked,
  // and can be attached by hand.
  try {
    const company = lead.company ? await findOrCreateCompany(lead.company) : undefined;

    const person = await upsertPerson({
      email: lead.email,
      firstName: lead.firstName,
      lastName: lead.lastName,
      jobTitle: lead.jobTitle,
      phone: lead.phone,
      companyId: company?.id,
    });

    await Promise.all([
      createOne('noteTargets', { noteId: note.id, targetPersonId: person.id }),
      company && createOne('noteTargets', { noteId: note.id, targetCompanyId: company.id }),
    ]);
  } catch (error) {
    console.error(`Twenty lead enrichment failed; note ${note.id} saved but not linked:`, error);
  }
}
