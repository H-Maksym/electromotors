import { notFound } from 'next/navigation';
import { getRequestConfig } from 'next-intl/server';
import { language } from '~/lib/constants';

// Can be imported from a shared config
const locales = [...language];

export default getRequestConfig(async ({ locale }) => {
  const baseLocal = new Intl.Locale(locale).baseName;
  // Validate that the incoming `locale` parameter is valid
  if (!locales.includes(baseLocal)) notFound();

  return {
    messages: (await import(`~/dictionaries/${locale}.json`)).default,
  };
});
