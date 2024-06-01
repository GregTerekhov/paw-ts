import Image from 'next/image';
import Link from 'next/link';

import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import { PathLabel, Paths } from 'types';
import { UrlObject } from 'url';

import voting from '../public/voting.png';
import breeds from '../public/breeds.png';
import gallery from '../public/gallery.png';

interface Sizes {
  width: number;
  height: number;
}

interface Paddings {
  paddingX: string;
  paddingY?: string;
  paddingB?: string;
  paddingT?: string;
}

interface NavigationLink {
  path: UrlObject;
  label: PathLabel;
  iconSrc: StaticImport;
  sizes: Sizes;
  backgroundColor: string;
  padding: Paddings;
}

export default function Navigation() {
  const navLinks: NavigationLink[] = [
    {
      path: { pathname: Paths.Voting },
      label: PathLabel.Voting,
      iconSrc: voting,
      sizes: { width: 112, height: 141 },
      backgroundColor: 'bg-[#b4b7ff]',
      padding: { paddingX: 'px-[9px]', paddingB: 'pb-6', paddingT: 'pt-[25px]' },
    },
    {
      path: { pathname: Paths.Breeds },
      label: PathLabel.Breeds,
      iconSrc: breeds,
      sizes: { width: 110, height: 160 },
      backgroundColor: 'bg-like',
      padding: { paddingX: 'px-2.5', paddingY: 'py-[15px]' },
    },
    {
      path: { pathname: Paths.Gallery },
      label: PathLabel.Gallery,
      iconSrc: gallery,
      sizes: { width: 112, height: 190 },
      backgroundColor: 'bg-dislike',
      padding: { paddingX: 'px-[9px]' },
    },
  ];

  return (
    <nav>
      <ul className='w-full text-center max-md:space-y-5 md:flex md:gap-x-4'>
        {Array.isArray(navLinks) &&
          navLinks.map(({ path, label, iconSrc, sizes, backgroundColor, padding }) => (
            <li key={label}>
              <Link
                href={path}
                className='group block w-full'
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
                <p className='rounded-[10px] bg-whiteBase py-2.5 text-sm font-medium uppercase leading-4 tracking-[.16667em] text-accentBase group-hover:bg-accentBase group-hover:text-whiteBase dark:bg-whiteBase/10'>
                  {label}
                </p>
              </Link>
            </li>
          ))}
      </ul>
    </nav>
  );
}
