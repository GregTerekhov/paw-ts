'use client';

import { usePathname } from 'next/navigation';
import { useState } from 'react';

import { ButtonVariant, IconName, IconSizes, Paths } from 'types';

import { PrimaryButton } from 'ui';

interface IGridItem {
  id: number;
  name: string;
  gridClass: string;
  size?: string;
}

interface GridListProps {
  listItems: IGridItem[];
}

export default function GridList({ listItems }: GridListProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const pathname = usePathname();
  const hasFavourite = pathname === Paths.Favourites || pathname === Paths.Gallery;
  const hasName = pathname === Paths.Breeds || pathname === Paths.Search;

  const getSvgIcon = () => {
    switch (true) {
      case pathname === Paths.Favourites:
        return IconName.FilledHeart;
      case pathname === Paths.Gallery:
        return IconName.Favourite;

      default:
        return;
    }
  };

  return (
    <ul
      className={`${pathname === Paths.Favourites ? 'max-md:mb-5 md:mb-10' : ''} max-md:space-y-2.5 md:grid md:grid-cols-3 md:grid-rows-6 md:gap-5`}
    >
      {Array.isArray(listItems) &&
        listItems.map(({ id, name, gridClass, size }, index) => (
          <li
            key={id}
            className={`${gridClass} ${size} relative cursor-pointer rounded-[20px] bg-whiteBase-darker hover:bg-accentBase/60 max-md:h-[206px] max-md:w-[295px] dark:bg-whiteBase/5`}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            {hasName && hoveredIndex === index && (
              <p className='absolute bottom-2.5 left-2.5 w-full max-w-gridItem rounded-[10px] bg-whiteBase py-[5px] text-center text-accentBase'>
                {name ?? null}
              </p>
            )}
            {hasFavourite && hoveredIndex === index && (
              <PrimaryButton
                variant={ButtonVariant.Iconic}
                // onHandleClick={}
                iconSrc={getSvgIcon()!}
                sizes={{ width: IconSizes.LG, height: IconSizes.SM }}
                classNameButton='absolute group hover:bg-accentBase left-1/2 top-1/2 flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 rounded-[10px] bg-whiteBase'
                iconClass='fill-accentBase group-hover:fill-whiteBase'
              />
            )}
          </li>
        ))}
    </ul>
  );
}
