'use client';

import { usePathname } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';

import { useMenu } from 'context';
import { getNavLinks } from 'data';

import voting from '../public/voting.png';
import breeds from '../public/breeds.png';
import gallery from '../public/gallery.png';

export default function Navigation() {
  const pathname = usePathname();
  const { closeMenu } = useMenu();

  const navLinks = getNavLinks(voting, breeds, gallery);

  return (
    <nav>
      <ul className='w-full text-center max-md:space-y-5 md:flex md:gap-x-4'>
        {Array.isArray(navLinks) &&
          navLinks.map(({ path, label, iconSrc, sizes, backgroundColor, padding }) => {
            const isActive = pathname === path;
            return (
              <li key={label}>
                <Link
                  href={path}
                  className='group block w-full'
                  onClick={closeMenu}
                >
                  <div
                    className={`${backgroundColor} ${padding.paddingX} ${padding.paddingB} ${padding.paddingT} ${padding.paddingY} mb-2.5 hidden rounded-[20px] border-4 border-whiteBase/60 group-hover:border-accentBase-light md:block`}
                  >
                    <Image
                      src={iconSrc}
                      alt={`${label} menu`}
                      width={sizes.width}
                      height={sizes.height}
                      priority
                    />
                  </div>
                  <span
                    className={`${isActive ? 'bg-accentBase text-whiteBase' : 'bg-whiteBase text-accentBase dark:bg-whiteBase/10'} block rounded-[10px] py-2.5 text-sm font-medium uppercase leading-4 tracking-[.16667em] group-hover:bg-accentBase-light group-hover:text-accentBase `}
                  >
                    {label}
                  </span>
                </Link>
              </li>
            );
          })}
      </ul>
    </nav>
  );
}
