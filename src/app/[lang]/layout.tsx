import { FC } from 'react';
import { Inter } from 'next/font/google';
import { NextIntlClientProvider, useMessages } from 'next-intl';
import './globals.css';
import type { Metadata } from 'next';
import ThemeProvider from '~/providers/ThemeProvider';
import { type Locale } from '~/lib/i18n/config';
import LocaleSwitcher from '~/components/common/LocaleSwitcher';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Electromotors',
  description: 'Electric car from China',
  icons: [{ rel: 'icon', url: '/../favicon.ico' }],
};

interface IRootLayoutProps {
  params: { lang: Locale };
  children: React.ReactNode;
}

const RootLayout: FC<IRootLayoutProps> = ({ children, params: { lang } }) => {
  const messages = useMessages();
  return (
    <html lang={lang}>
      <body className={inter.className}>
        <NextIntlClientProvider messages={messages}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <LocaleSwitcher />
            {children}
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
};

export default RootLayout;
