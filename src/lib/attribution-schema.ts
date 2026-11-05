// Server-side validation for the `attribution` payload the forms send
// (see src/lib/attribution.ts). Lenient by design: a missing or malformed
// payload must never cause a lead to be rejected, so every level falls back
// to `undefined` instead of failing the parse. Unknown keys are stripped.

import { z } from 'zod';

const MAX_LEN = 200;

const Str = z
  .string()
  .transform((value) => value.slice(0, MAX_LEN))
  .optional()
  .catch(undefined);

const TouchSchema = z
  .object({
    source: Str,
    medium: Str,
    campaign: Str,
    content: Str,
    term: Str,
    clickId: Str,
    referrer: Str,
    landingPage: Str,
    channel: Str,
    at: Str,
  })
  .optional()
  .catch(undefined);

export const AttributionSchema = z
  .object({
    first: TouchSchema,
    last: TouchSchema,
    landingPage: Str,
    posthogDistinctId: Str,
  })
  .optional()
  .catch(undefined);

export type AttributionInput = z.infer<typeof AttributionSchema>;
export type TouchInput = NonNullable<z.infer<typeof TouchSchema>>;
