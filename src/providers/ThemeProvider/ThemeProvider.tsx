'use client';
import { FC, ReactNode, useEffect, useState } from 'react';
import { ThemeProvider as NextThemesProvider } from 'next-themes';
// import { type ThemeProviderProps } from 'next-themes/dist/types';
type ThemeProviderProps = Parameters<typeof NextThemesProvider>[0];

interface IProvidersProps extends ThemeProviderProps {
  children: ReactNode;
}

const ThemeProvider: FC<IProvidersProps> = ({
  children,
  ...props
}: ThemeProviderProps) => {
  const [mounted, setMounted] = useState(false);
  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <>{children}</>;
  }

  return (
    <>
      <NextThemesProvider {...props}>{children}</NextThemesProvider>
    </>
  );
};

export default ThemeProvider;
