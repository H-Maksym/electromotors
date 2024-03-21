'server-only';
import { notFound } from 'next/navigation';
import { type AbstractIntlMessages } from 'next-intl';
import { getRequestConfig } from 'next-intl/server';
import { locales, type Locale } from '~/lib/i18n/config';

// Can be imported from a shared config
const dictionariesImports = {
  en: () => import('~/dictionaries/en.json'),
  uk: () => import('~/dictionaries/ua.json'),
} as const satisfies Record<
  Locale,
  () => Promise<{ default: AbstractIntlMessages }>
>;

export function isValidLocale(locale: unknown): locale is Locale {
  return locales.some(l => l === locale);
}

export default getRequestConfig(async ({ locale }) => {
  const baseLocale = new Intl.Locale(locale).baseName;
  // Validate that the incoming `locale` parameter is valid
  if (!isValidLocale(baseLocale)) notFound();

  const messages = (await dictionariesImports[baseLocale]()).default;

  return {
    messages,
  };
});
