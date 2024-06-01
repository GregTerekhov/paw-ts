import Image from 'next/image';
import Link from 'next/link';

import { IconSizes } from 'types';

import logo from '../public/catsPaw.svg';

export default function Logo() {
  return (
    <Link
      href='/'
      className='flex gap-x-2'
    >
      <Image
        src={logo}
        unoptimized
        width={IconSizes['2XL']}
        height={IconSizes['2XL']}
        alt='logo'
        priority
      />
      PetsPaw
    </Link>
  );
}
