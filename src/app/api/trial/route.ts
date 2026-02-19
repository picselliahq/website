import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';

const TrialSchema = z.object({
  firstName: z.string().min(1).max(100),
  lastName: z.string().min(1).max(100),
  email: z.string().email().max(320),
  company: z.string().max(200).optional().default(''),
  pageUri: z.string().max(500).optional().default(''),
});

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const result = TrialSchema.safeParse(body);

    if (!result.success) {
      return NextResponse.json(
        { error: 'Invalid form data', details: result.error.flatten().fieldErrors },
        { status: 400 }
      );
    }

    const data = result.data;

    const portalId = process.env.HUBSPOT_PORTAL_ID;
    const formId = process.env.HUBSPOT_TRIAL_FORM_ID;

    if (!portalId || !formId) {
      console.log('Trial signup (HubSpot not configured):', data.email, data.company);
      return NextResponse.json({ success: true });
    }

    const hubspotRes = await fetch(
      `https://api.hsforms.com/submissions/v3/integration/submit/${portalId}/${formId}`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          fields: [
            { name: 'firstname', value: data.firstName },
            { name: 'lastname', value: data.lastName },
            { name: 'email', value: data.email },
            { name: 'company', value: data.company },
          ].filter((f) => f.value),
          context: {
            pageUri: data.pageUri || 'https://picsellia.com/trial',
            pageName: 'Start Free Trial',
          },
        }),
      }
    );

    if (!hubspotRes.ok) {
      const errorText = await hubspotRes.text();
      console.error('HubSpot trial submission failed:', errorText);
      return NextResponse.json({ error: 'Submission failed' }, { status: 502 });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Trial API error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
