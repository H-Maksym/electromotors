'use client';
import { Icons } from '~/components/common/Icons';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  const handleChangeTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  if (!mounted) {
    return null;
  }

  return (
    <>
      <button
        aria-label="Toggle Dark Mode"
        type="button"
        className="flex items-center justify-center rounded-lg p-2 transition-opacity"
        onClick={handleChangeTheme}
      >
        <Icons.switchThemeLight className="h-10 w-10 text-orange-300 dark:hidden" />
        <Icons.switchThemeDark className="hidden h-10 w-10 text-slate-800 dark:block" />
        <span className="sr-only">Toggle theme</span>
      </button>
    </>
  );
};

export default ThemeSwitcher;
