'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { IconSizes } from 'types';
import { getHeaderLinks } from 'data';

import { SvgIcon } from 'ui';

export default function HeaderRoutes() {
  const pathname = usePathname();

  const headerLinks = getHeaderLinks();

  return (
    <ul className='flex gap-x-2.5'>
      {Array.isArray(headerLinks) &&
        headerLinks.map(({ path, label, iconSrc, height = IconSizes['5XL'] }) => {
          const isActive = pathname === path;

          return (
            <li key={label}>
              <Link
                href={path}
                className={`${isActive ? 'bg-accentBase' : 'bg-whiteBase dark:bg-whiteBase/5'} group flex h-[60px] w-[60px] items-center justify-center rounded-[20px]  hover:bg-accentBase-light dark:hover:bg-accentBase`}
              >
                <SvgIcon
                  id={iconSrc}
                  size={{ width: IconSizes['5XL'], height }}
                  className={`${isActive ? 'fill-whiteBase' : 'fill-accentBase'}  group-hover:fill-accentBase dark:group-hover:fill-whiteBase`}
                />
              </Link>
            </li>
          );
        })}
    </ul>
  );
}
