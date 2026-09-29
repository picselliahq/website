import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import { isTwentyConfigured, submitLead } from '@/lib/twenty';

const DemoSchema = z.object({
  firstName: z.string().min(1).max(100),
  lastName: z.string().min(1).max(100),
  email: z.string().email().max(320),
  company: z.string().min(1).max(200),
  jobTitle: z.string().max(200).optional().default(''),
  phone: z.string().max(50).optional().default(''),
  message: z.string().max(2000).optional().default(''),
  pageUri: z.string().max(500).optional().default(''),
  website: z.string().optional().default(''),
  formLoadedAt: z.number().optional(),
});

const MIN_SUBMIT_TIME_MS = 3000;

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

    // Bot prevention: reject if honeypot filled or form submitted too fast
    if (data.website) {
      return NextResponse.json({ success: true });
    }
    if (data.formLoadedAt && Date.now() - data.formLoadedAt < MIN_SUBMIT_TIME_MS) {
      return NextResponse.json({ success: true });
    }

    if (!isTwentyConfigured()) {
      console.log('Demo request (Twenty not configured):', data.email, data.company);
      return NextResponse.json({ success: true });
    }

    try {
      await submitLead({
        source: 'Book a Demo',
        pageUri: data.pageUri || 'https://picsellia.com/demo',
        email: data.email,
        firstName: data.firstName,
        lastName: data.lastName,
        company: data.company,
        jobTitle: data.jobTitle,
        phone: data.phone,
        message: data.message,
      });
    } catch (error) {
      console.error('Twenty demo submission failed:', error);
      return NextResponse.json({ error: 'Submission failed' }, { status: 502 });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Demo API error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
