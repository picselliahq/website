'use client';

import { useEffect } from 'react';
import Cal, { getCalApi } from '@calcom/embed-react';
import { track } from '@vercel/analytics';
import { captureEvent } from '@/lib/posthog';

interface CalBookingProps {
  /** Cal.com event path, e.g. "picsellia/30min". */
  calLink: string;
  /** Distinguishes embeds for analytics (e.g. "demo", "trial"). */
  source: string;
  firstName?: string;
  lastName?: string;
  email?: string;
}

const NAMESPACE = 'meeting';

export default function CalBooking({ calLink, source, firstName, lastName, email }: CalBookingProps) {
  useEffect(() => {
    let cancelled = false;

    (async () => {
      const cal = await getCalApi({ namespace: NAMESPACE });
      if (cancelled) return;

      cal('ui', {
        theme: 'dark',
        hideEventTypeDetails: false,
        layout: 'month_view',
        cssVarsPerTheme: {
          light: { 'cal-brand': '#33ab68' },
          dark: { 'cal-brand': '#33ab68' },
        },
      });

      cal('on', {
        action: 'bookingSuccessfulV2',
        callback: () => {
          track('meeting_booked', { source });
          captureEvent('meeting_booked', { source });
        },
      });
    })();

    return () => {
      cancelled = true;
    };
  }, [source]);

  const name = [firstName, lastName].filter(Boolean).join(' ');

  return (
    <Cal
      namespace={NAMESPACE}
      calLink={calLink}
      style={{ width: '100%', height: '100%', overflow: 'auto' }}
      config={{
        layout: 'month_view',
        useSlotsViewOnSmallScreen: 'true',
        theme: 'dark',
        ...(name && { name }),
        ...(email && { email }),
      }}
    />
  );
}
