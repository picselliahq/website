'use client';

import { useEffect, useState } from 'react';
import Cal, { getCalApi } from '@calcom/embed-react';
import { track } from '@vercel/analytics';
import { captureEvent } from '@/lib/posthog';
import { getAttribution } from '@/lib/attribution';

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

  // Shown on the booking (utm_*) and in webhook payloads (metadata), per
  // Cal.com's embed docs: help/embedding/utm-tracking-embed and
  // help/embedding/prefill-booking-form-embed. Read once at mount; the
  // embed is client-only so this never runs on the server.
  const [tracking] = useState(() => {
    const { first, last, posthogDistinctId } = getAttribution();
    const touch = last ?? first;
    return {
      ...(touch?.source && { utm_source: touch.source }),
      ...(touch?.campaign && { utm_campaign: touch.campaign }),
      ...(posthogDistinctId && { 'metadata[posthogDistinctId]': posthogDistinctId }),
    };
  });

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
        ...tracking,
      }}
    />
  );
}
