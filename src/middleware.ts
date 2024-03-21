import createMiddleware from 'next-intl/middleware';
import { NextRequest, NextResponse } from 'next/server';
import { locales, localePrefix, type Locale } from '~/lib/i18n/config';

const nextIntlMiddleware = createMiddleware({
  locales,
  localePrefix,
  defaultLocale: 'en' satisfies Locale,
});

export default function (req: NextRequest): NextResponse {

  // Step 1: Use the incoming request (example)
  const defaultLocale = req.headers.get('x-your-custom-locale') || 'en';
 
  // Step 2: Create and call the next-intl middleware (example)
  const response = nextIntlMiddleware(req);
 
  // Step 3: Alter the response (example)
  response.headers.set('x-your-custom-locale', defaultLocale);
 
  return response;


  // const response = nextIntlMiddleware(req);
  // return response;
}

export const config = {
  // match only internationalized pathnames
  matcher: [
    // Match all pathnames except for
    // - … if they start with `/api`, `/_next` or `/_vercel`
    // - … the ones containing a dot (e.g. `favicon.ico`)
    '/((?!api|_next|_next/static|_next/image|_vercel|.*\\..*).*)',
  ],
};
