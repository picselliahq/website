import createMiddleware from 'next-intl/middleware';
import { NextRequest, NextResponse } from 'next/server';
import { routing } from './i18n/routing';

const intlMiddleware = createMiddleware(routing);

export default function middleware(request: NextRequest) {
  const host = request.headers.get('host') || '';

  // Redirect picsellia.fr → picsellia.com/fr (preserving path)
  if (host.includes('picsellia.fr')) {
    const url = new URL(request.url);
    url.hostname = 'www.picsellia.com';
    url.port = '';
    // Prepend /fr if not already a locale path
    if (!url.pathname.startsWith('/fr')) {
      url.pathname = `/fr${url.pathname}`;
    }
    return NextResponse.redirect(url, 301);
  }

  return intlMiddleware(request);
}

export const config = {
  // Match all pathnames except API routes, static files, and Next.js internals
  matcher: [
    '/((?!api|_next|_vercel|.*\\..*).*)',
  ],
};
