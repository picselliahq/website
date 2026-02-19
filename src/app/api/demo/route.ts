import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';

const DemoSchema = z.object({
  firstName: z.string().min(1).max(100),
  lastName: z.string().min(1).max(100),
  email: z.string().email().max(320),
  company: z.string().min(1).max(200),
  jobTitle: z.string().max(200).optional().default(''),
  phone: z.string().max(50).optional().default(''),
  message: z.string().max(2000).optional().default(''),
  pageUri: z.string().max(500).optional().default(''),
});

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const result = DemoSchema.safeParse(body);

    if (!result.success) {
      return NextResponse.json(
        { error: 'Invalid form data', details: result.error.flatten().fieldErrors },
        { status: 400 }
      );
    }

    const data = result.data;

    const portalId = process.env.HUBSPOT_PORTAL_ID;
    const formId = process.env.HUBSPOT_DEMO_FORM_ID;

    if (!portalId || !formId) {
      console.log('Demo request (HubSpot not configured):', data.email, data.company);
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
            { name: 'jobtitle', value: data.jobTitle },
            { name: 'phone', value: data.phone },
            { name: 'message', value: data.message },
          ].filter((f) => f.value),
          context: {
            pageUri: data.pageUri || 'https://picsellia.com/demo',
            pageName: 'Book a Demo',
          },
        }),
      }
    );

    if (!hubspotRes.ok) {
      const errorText = await hubspotRes.text();
      console.error('HubSpot demo submission failed:', errorText);
      return NextResponse.json({ error: 'Submission failed' }, { status: 502 });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Demo API error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
