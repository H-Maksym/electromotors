import { useTranslations } from 'next-intl';
import ThemeSwitcher from '~/components/common/ThemeSwitcher';
import Button from '~/components/ui/Button';
import { Link } from '~/lib/i18n/navigation';

export default function Home() {
  const t = useTranslations('IndexPage');
  return (
    <main className="flex min-h-screen flex-col items-center justify-between dark:bg-slate-700">
      <div className="container mx-auto w-full p-4">
        <div className="flex flex-col items-center justify-center py-20">
          <h1 className="text-center text-5xl font-bold text-gray-800 dark:text-gray-100">
            {t('title')}
          </h1>
          <p className="text-l text-zinc-500"> {t('description')}</p>
          <div className="flex flex-row gap-5">
            <ThemeSwitcher />
          </div>
          <Button size={'lg'} variant={'outline'}>
            {t('this_is_button')}
          </Button>
          <Link href="/admin">Admin</Link>
        </div>
      </div>
    </main>
  );
}
