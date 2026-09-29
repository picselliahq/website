import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import { isTwentyConfigured, submitLead } from '@/lib/twenty';

const EmailSchema = z.string().email().max(320);
const PageUriSchema = z.string().max(500).catch('');

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const result = EmailSchema.safeParse(body.email);

    if (!result.success) {
      return NextResponse.json({ error: 'Valid email is required' }, { status: 400 });
    }

    const email = result.data;
    const pageUri = PageUriSchema.parse(body.pageUri ?? '');

    if (isTwentyConfigured()) {
      try {
        await submitLead({
          source: 'Blog Newsletter',
          pageUri: pageUri || 'https://picsellia.com/blog',
          email,
        });
      } catch (error) {
        console.error('Twenty newsletter submission failed:', error);
        return NextResponse.json({ error: 'Subscription failed' }, { status: 500 });
      }
    } else {
      // Log subscription when Twenty is not configured
      console.log('Newsletter signup (Twenty not configured):', email);
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Newsletter API error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
