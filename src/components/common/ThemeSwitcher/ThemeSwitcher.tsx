'use client';
import { MoonIcon, SunIcon } from '@heroicons/react/24/solid';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  const handleChangeTheme = () => {
    setTheme(resolvedTheme === 'light' ? 'dark' : 'light');
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
        {resolvedTheme === 'dark' ? (
          <SunIcon className="h-5 w-5 text-orange-300" />
        ) : (
          <MoonIcon className="h-5 w-5 text-slate-800" />
        )}
      </button>
    </>
  );
};

export default ThemeSwitcher;
