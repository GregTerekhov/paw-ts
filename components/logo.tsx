import Link from 'next/link';

import { IconName, IconSizes } from 'types';

import { SvgIcon } from 'ui';

export default function Logo() {
  return (
    <Link
      href='/'
      className='flex gap-x-2'
    >
      <SvgIcon
        id={IconName.Logo}
        size={{ width: IconSizes.LG, height: IconSizes.LG }}
        className='fill-accentBase'
      />
      PetsPaw
    </Link>
  );
}
