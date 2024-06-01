import Link from 'next/link';
import Image from 'next/image';

import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import { UrlObject } from 'url';
import { IconSizes, PathLabel, Paths } from 'types';

import like from '../../public/like.svg';
import favourite from '../../public/favourite.svg';
import dislike from '../../public/dislike.svg';

interface HeaderLinks {
  path: UrlObject;
  label: PathLabel;
  iconSrc: string | StaticImport;
  height?: IconSizes;
}

export default function HeaderRoutes() {
  const headerLinks: HeaderLinks[] = [
    {
      path: { pathname: Paths.Likes },
      label: PathLabel.Likes,
      iconSrc: like,
    },
    {
      path: { pathname: Paths.Favourites },
      label: PathLabel.Favourites,
      iconSrc: favourite,
      height: IconSizes['4XL'],
    },
    {
      path: { pathname: Paths.Dislikes },
      label: PathLabel.Dislikes,
      iconSrc: dislike,
    },
  ];

  return (
    <ul className='flex gap-x-2.5'>
      {Array.isArray(headerLinks) &&
        headerLinks.map(({ path, label, iconSrc, height = IconSizes['5XL'] }) => (
          <li key={label}>
            <Link
              href={path}
              className='flex h-[60px] w-[60px] items-center justify-center rounded-[20px] bg-whiteBase hover:bg-accentBase-light dark:bg-whiteBase/5'
            >
              <Image
                src={iconSrc}
                unoptimized
                alt={`Link to ${label} page`}
                width={IconSizes['5XL']}
                height={height}
              />
            </Link>
          </li>
        ))}
    </ul>
  );
}
