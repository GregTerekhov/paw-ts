import type { Metadata } from 'next';
import { Jost } from 'next/font/google';

import './globals.css';

import { WelcomeScreen } from 'components';

const jost = Jost({ subsets: ['latin'], weight: ['400', '500'] });

export const metadata: Metadata = {
  title: 'Cats paw',
  description:
    'Explore various cat breeds and browse photos of these wonderful animals. Find valuable information about each breed, their characteristics, and traits. Your ultimate source of knowledge about cats.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={`${jost.className} w-full lg:flex lg:justify-between`}>
        <div className='hidden lg:block lg:pl-[147px] lg:pt-[30px]'>
          <WelcomeScreen />
        </div>
        {children}
      </body>
    </html>
  );
}
