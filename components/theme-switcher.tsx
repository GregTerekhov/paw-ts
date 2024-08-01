'use client';

import { IconName, IconSizes, Theme } from 'types';
import { useTheme } from 'context';

import { SvgIcon, Switch } from 'ui';

export default function ThemeSwitcher() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className='flex items-center gap-x-[5px]'>
      <div className='flex h-6 w-6 items-center justify-center rounded-full bg-whiteBase dark:bg-whiteBase/5'>
        <SvgIcon
          size={{ width: IconSizes.XS, height: IconSizes.XS }}
          id={theme === Theme.Dark ? IconName.SleepingEye : IconName.Eye}
          className='fill-accentBase'
        />
      </div>
      <Switch
        onClick={toggleTheme}
        checked={theme === Theme.Light}
      />
    </div>
  );
}
