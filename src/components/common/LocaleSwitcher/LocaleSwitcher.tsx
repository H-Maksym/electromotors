import { useLocale } from 'next-intl';
import { locales } from '~/lib/i18n/config';
import LocaleSwitcherSelect from './LocaleSwitcherSelect';

export default function LocaleSwitcher() {
  // const t = useTranslations('LocaleSwitcher');
  const locale = useLocale();

  //Change label in selected language
  // const language:any={en:{en:"English",uk:"Ukrainian"},uk:{en:"Англійська",uk:"Українська"}}

  //Change label in same language
  const language: any = {
    en: { en: 'English', uk: 'Українська' },
    uk: { en: 'English', uk: 'Українська' },
  };

  return (
    <LocaleSwitcherSelect defaultValue={locale}>
      {locales.map(cur => (
        <option key={cur} value={cur}>
          {language[`${locale}`][cur]}
        </option>
      ))}
    </LocaleSwitcherSelect>
  );
}
