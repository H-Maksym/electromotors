import createMiddleware from 'next-intl/middleware';
import { NextRequest, NextResponse } from 'next/server';
import { language } from '~/lib/constants';

const nextIntlMiddleware = createMiddleware({
  locales: [...language],
  defaultLocale: 'en',
});

export default function (req: NextRequest): NextResponse {
  return nextIntlMiddleware(req);
}

export const config = {
  // Match only internationalized pathnames
  matcher: ['/', '/(ua|en)/:path*'],
};
