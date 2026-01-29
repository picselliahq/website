import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';

const EmailSchema = z.string().email().max(320);

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const result = EmailSchema.safeParse(body.email);

    if (!result.success) {
      return NextResponse.json({ error: 'Valid email is required' }, { status: 400 });
    }

    const email = result.data;

    // HubSpot Forms API integration
    // Set HUBSPOT_PORTAL_ID and HUBSPOT_FORM_ID environment variables
    const portalId = process.env.HUBSPOT_PORTAL_ID;
    const formId = process.env.HUBSPOT_FORM_ID;

    if (portalId && formId) {
      const hubspotRes = await fetch(
        `https://api.hsforms.com/submissions/v3/integration/submit/${portalId}/${formId}`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            fields: [{ name: 'email', value: email }],
            context: {
              pageUri: 'https://picsellia.com/blog',
              pageName: 'Blog Newsletter',
            },
          }),
        }
      );

      if (!hubspotRes.ok) {
        console.error('HubSpot form submission failed:', await hubspotRes.text());
        return NextResponse.json({ error: 'Subscription failed' }, { status: 500 });
      }
    } else {
      // Log subscription when HubSpot is not configured
      console.log('Newsletter signup (HubSpot not configured):', email);
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Newsletter API error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
