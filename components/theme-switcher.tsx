'use client';

import Image from 'next/image';

import { ButtonType, IconSizes } from 'types';
import { useTheme } from 'helpers';

import eye from '../public/eye.svg';
import sleepingEye from '../public/sleeping-eye.svg';

export default function ThemeSwitcher() {
  const { isDark, handleSwitchTheme } = useTheme();
  return (
    <div className='flex items-center gap-x-[5px]'>
      <div className='flex h-6 w-6 items-center justify-center rounded-full bg-whiteBase dark:bg-whiteBase/5'>
        <Image
          src={isDark ? sleepingEye : eye}
          alt={isDark ? 'Dark theme icon' : 'Light theme icon'}
          width={IconSizes.XS}
          height={IconSizes.XS}
          priority
          unoptimized
        />
      </div>
      <button
        type={ButtonType.Button}
        className='rounded-full bg-accentBase-light'
        onClick={handleSwitchTheme}
      >
        SWITCHER
      </button>
    </div>
  );
}
