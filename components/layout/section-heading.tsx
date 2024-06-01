'use client';

import { useParams, usePathname } from 'next/navigation';

import { BreedsFiltering, GalleryFiltering, ReturnButton, UploadingMenuControls } from '..';

export default function SectionHeading() {
  const pathname = usePathname();
  const { slug } = useParams();

  const routeName = pathname.split('/')[1];
  const hasChildren = pathname === '/gallery' || pathname === '/breeds';

  return (
    <>
      <div
        className={`${pathname === '/gallery' ? 'md:flex md:items-center md:justify-between' : ''} ${hasChildren ? 'mb-2.5 md:mb-5' : 'mb-5'}`}
      >
        <div className='flex items-center gap-x-2.5'>
          <ReturnButton />
          <p
            className={`${pathname === '/favourites' ? 'w-[192px]' : 'w-[143px]'} rounded-[10px] bg-accentBase py-[5px] text-center text-medium font-medium uppercase tracking-[.16667em] text-whiteBase`}
          >
            {routeName}
          </p>
          {slug && (
            <p className='w-[90px] rounded-[10px] bg-accentBase py-[5px] text-center text-medium font-medium uppercase tracking-[.16667em] text-whiteBase'>
              {slug}
            </p>
          )}
          <div className='hidden md:block'>{pathname === '/breeds' && <BreedsFiltering />}</div>
        </div>
        {pathname === '/gallery' && <UploadingMenuControls className='md:flex md:w-[143px]' />}
      </div>
      {pathname === '/gallery' && (
        <UploadingMenuControls className='mb-2.5 max-md:flex max-md:w-full' />
      )}
      <div className='hidden max-md:block'>{pathname === '/breeds' && <BreedsFiltering />}</div>
      {pathname === '/gallery' && <GalleryFiltering />}
    </>
  );
}
