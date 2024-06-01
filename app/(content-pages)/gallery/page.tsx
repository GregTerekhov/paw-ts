'use client';

import { useState } from 'react';

import { ButtonVariant, IconSizes } from 'types';

import { PrimaryButton } from 'ui';

import favourite from '../../../public/favourite.svg';

interface GridItem {
  id: number;
  name: string;
  gridClass: string;
  size?: string;
}

export default function GalleryPage() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const listItems: GridItem[] = [
    {
      id: 1,
      name: 'Name 1',
      gridClass: 'md:row-span-2',
    },
    {
      id: 2,
      name: 'Name 2',
      gridClass: 'md:col-start-2 md:col-end-3 md:row-start-1 md:row-end-2',
    },
    {
      id: 3,
      name: 'Name 3',
      gridClass: 'md:col-start-3 md:col-end-4 md:row-start-1 md:row-end-2',
    },
    {
      id: 4,
      name: 'Name 4',
      gridClass: 'md:col-start-2 md:col-end-4 md:row-start-2 md:row-end-4',
    },
    {
      id: 5,
      name: 'Name 5',
      gridClass: 'md:col-start-1 md:col-end-2 md:row-start-3 md:row-end-4',
      size: 'md:h-[140px] md:w-[200px]',
    },
    {
      id: 6,
      name: 'Name 6',
      gridClass: 'md:col-start-1 md:col-end-2 md:row-start-4 md:row-end-5',
    },
    {
      id: 7,
      name: 'Name 7',
      gridClass: 'md:col-start-2 md:col-end-3 md:row-start-4 md:row-end-5',
    },
    {
      id: 8,
      name: 'Name 8',
      gridClass: 'md:col-start-3 md:col-end-4 md:row-start-4 md:row-end-6',
    },
    {
      id: 9,
      name: 'Name 9',
      gridClass: 'md:col-start-1 md:col-end-3 md:row-start-5 md:row-end-7',
    },
    {
      id: 10,
      name: 'Name 10',
      gridClass: 'md:col-start-3 md:col-end-4 md:row-start-6 md:row-end-7',
      size: 'md:h-[140px] md:w-[200px]',
    },
  ];

  return (
    <section className='max-h-gallerySm md:max-h-galleryMd overflow-x-auto'>
      <ul className='max-md:space-y-2.5 md:grid md:grid-cols-3 md:grid-rows-6 md:gap-5'>
        {Array.isArray(listItems) &&
          listItems.map(({ id, gridClass, size }, index) => (
            <li
              key={id}
              className={`${gridClass} ${size} dark:whiteBase/5 relative cursor-pointer rounded-[20px] bg-whiteBase-darker hover:bg-accentBase/60 max-md:h-[206px] max-md:w-[296px]`}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {hoveredIndex === index && (
                <PrimaryButton
                  variant={ButtonVariant.Iconic}
                  // onHandleClick={}
                  iconSrc={favourite}
                  iconAlt='Button for adding to Favourite page'
                  sizes={{ width: IconSizes.LG, height: IconSizes.SM }}
                  classNameButton='absolute left-1/2 top-1/2 flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 rounded-[10px] bg-whiteBase'
                />
              )}
            </li>
          ))}
      </ul>
    </section>
  );
}