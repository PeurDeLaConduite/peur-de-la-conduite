import { NextRequest, NextResponse } from 'next/server';

export function middleware(req: NextRequest) {
  const url = req.nextUrl.clone();
  const userAgent = req.headers.get('user-agent') || '';

  const isMobile = /Mobile|Android|iPhone/i.test(userAgent);

  if (isMobile && url.hostname === 'peur-de-la-conduite.fr') {
    url.hostname = 'm.peur-de-la-conduite.fr';
    return NextResponse.redirect(url);
  }

  if (!isMobile && url.hostname === 'm.peur-de-la-conduite.fr') {
    url.hostname = 'peur-de-la-conduite.fr';
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}
