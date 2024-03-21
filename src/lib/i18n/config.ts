/** @description app locale */
export const locales = ['en', 'uk'] as const;

/** @description app locale prefix */
export const localePrefix = 'always';

/** @description app locale type */
export type Locale = (typeof locales)[number];
