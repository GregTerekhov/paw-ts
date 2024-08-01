import { cookies } from 'next/headers';
import type { Metadata } from 'next';

import { ProviderWrapper, WelcomeScreen } from 'components';

import { jost } from './fonts';
import './globals.css';

export const metadata: Metadata = {
  title: 'Cats paw',
  description:
    'Explore various cat breeds and browse photos of these wonderful animals. Find valuable information about each breed, their characteristics, and traits. Your ultimate source of knowledge about cats.',
};

const THEME_STORAGE_KEY = 'theme-preference';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const theme = cookies().get(THEME_STORAGE_KEY)?.value || 'light';

  return (
    <html
      lang='en'
      className={jost.className}
    >
      <body>
        <ProviderWrapper
          storageKey={THEME_STORAGE_KEY}
          theme={theme}
        >
          <div className='relative h-screen w-screen overflow-hidden lg:flex lg:justify-between'>
            <div className='hidden lg:block lg:pl-[147px] lg:pt-[30px]'>
              <WelcomeScreen />
            </div>
            {children}
          </div>
        </ProviderWrapper>
      </body>
    </html>
  );
}
