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

export default function FavouritePage() {
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
    <section>
      <ul className='max-md:mb-5 max-md:space-y-2.5 md:mb-10 md:grid md:grid-cols-3 md:grid-rows-6 md:gap-5'>
        {Array.isArray(listItems) &&
          listItems.map(({ id, gridClass, size }, index) => (
            <li
              key={id}
              className={`${gridClass} ${size} bg-whiteBase-darker dark:whiteBase/5 relative cursor-pointer rounded-[20px] hover:bg-accentBase/60 max-md:h-[206px] max-md:w-[296px]`}
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
      <ul className='space-y-2.5'>
        <li className='bg-whiteBase-darker rounded-[10px] p-[15px] dark:bg-whiteBase/5'>
          <div className='flex justify-between max-md:mb-2.5'>
            <div className='flex items-center md:gap-x-5'>
              <p className='w-[61px] rounded-[5px] bg-whiteBase py-[3px] text-center leading-6 dark:bg-darkBase'>
                TIME
              </p>
              <p className='hidden leading-6 text-secondaryText md:block'>
                Image ID: <span className='font-medium text-darkBase dark:text-whiteBase'>ID</span>{' '}
                was added to ...
              </p>
            </div>
          </div>
          <p className='hidden leading-6 text-secondaryText max-md:block'>
            Image ID: <span className='font-medium text-darkBase dark:text-whiteBase'>ID</span> was
            added to ...
          </p>
        </li>
        <li className='bg-whiteBase-darker rounded-[10px] p-[15px] dark:bg-whiteBase/5'>
          <div className='flex justify-between max-md:mb-2.5'>
            <div className='flex items-center md:gap-x-5'>
              <p className='w-[61px] rounded-[5px] bg-whiteBase py-[3px] text-center leading-6 dark:bg-darkBase'>
                TIME
              </p>
              <p className='hidden leading-6 text-secondaryText md:block'>
                Image ID: <span className='font-medium text-darkBase dark:text-whiteBase'>ID</span>{' '}
                was ... to Favourites
              </p>
            </div>
          </div>
          <p className='hidden leading-6 text-secondaryText max-md:block'>
            Image ID: <span className='font-medium text-darkBase dark:text-whiteBase'>ID</span> was
            ... to Favourites
          </p>
        </li>
        <li className='bg-whiteBase-darker rounded-[10px] p-[15px] dark:bg-whiteBase/5'>
          <div className='flex justify-between max-md:mb-2.5'>
            <div className='flex items-center md:gap-x-5'>
              <p className='w-[61px] rounded-[5px] bg-whiteBase py-[3px] text-center leading-6 dark:bg-darkBase'>
                TIME
              </p>
              <p className='hidden leading-6 text-secondaryText md:block'>
                Image ID: <span className='font-medium text-darkBase dark:text-whiteBase'>ID</span>{' '}
                was ... to Favourites
              </p>
            </div>
          </div>
          <p className='hidden leading-6 text-secondaryText max-md:block'>
            Image ID: <span className='font-medium text-darkBase dark:text-whiteBase'>ID</span> was
            ... to Favourites
          </p>
        </li>
      </ul>
    </section>
  );
}
