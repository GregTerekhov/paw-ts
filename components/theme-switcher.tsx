'use client';

import { IconName, IconSizes } from 'types';
import { useTheme } from 'helpers';

import { SvgIcon, Switch } from 'ui';

export default function ThemeSwitcher() {
  const { isDark, handleSwitchTheme } = useTheme();

  return (
    <div className='flex items-center gap-x-[5px]'>
      <div className='flex h-6 w-6 items-center justify-center rounded-full bg-whiteBase dark:bg-whiteBase/5'>
        {isDark ? (
          <SvgIcon
            size={{ width: IconSizes.XS, height: IconSizes.XS }}
            id={IconName.SleepingEye}
            className='fill-accentBase'
          />
        ) : (
          <SvgIcon
            size={{ width: IconSizes.XS, height: IconSizes.XS }}
            id={IconName.Eye}
            className='fill-accentBase'
          />
        )}
      </div>
      <Switch onClick={handleSwitchTheme} />
    </div>
  );
}
