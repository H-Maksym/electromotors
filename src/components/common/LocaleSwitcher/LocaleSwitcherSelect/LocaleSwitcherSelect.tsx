'use client';

import { ChangeEvent, ReactNode, useTransition } from 'react';
import { usePathname, useRouter } from '~/lib/i18n/navigation';
import { cn } from '~/lib/utils';

type Props = {
  children: ReactNode;
  defaultValue: string;
  label?: string;
};

export default function LocaleSwitcherSelect({
  children,
  defaultValue,
  label,
}: Props) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const pathname = usePathname();

  function onSelectChange(event: ChangeEvent<HTMLSelectElement>) {
    const nextLocale = event.target.value;
    startTransition(() => {
      router.replace(pathname, { locale: nextLocale });
    });
  }

  return (
    <label
      className={cn(
        'relative size-10 ',
        isPending && 'transition-opacity [&:disabled]:opacity-30'
      )}
    >
      <p className="sr-only">{label}</p>
      <select
        className="mx-10 inline-flex appearance-none bg-zinc-300  bg-transparent px-10  text-4xl"
        defaultValue={defaultValue}
        disabled={isPending}
        onChange={onSelectChange}
      >
        {children}
      </select>
      <span className="pointer-events-none absolute right-2 top-[8px]">⌄</span>
    </label>
  );
}
