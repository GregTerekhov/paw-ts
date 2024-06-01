import Image from 'next/image';

import { IconSizes } from 'types';

import { VotingPictures } from 'components';

import favourite from '../../../public/favourite.svg';

export default function VotingPage() {
  return (
    <section>
      <div className='relative mb-11 h-[166px] w-full rounded-[20px] bg-whiteBase-darker md:mb-[53px] md:h-[376px] lg:mb-[52px] lg:h-[360px] dark:bg-whiteBase/5'>
        <VotingPictures />
      </div>
      <ul className='max-h-votingSm md:max-h-votingMd lg:max-h-votingLg space-y-2.5 overflow-auto'>
        <li className='rounded-[10px] bg-whiteBase-darker p-[15px] dark:bg-whiteBase/5'>
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
            <Image
              src={favourite}
              unoptimized
              alt='Trigger for adding photo to page'
              width={IconSizes.LG}
              height={IconSizes.LG}
            />
          </div>
          <p className='hidden leading-6 text-secondaryText max-md:block'>
            Image ID: <span className='font-medium text-darkBase dark:text-whiteBase'>ID</span> was
            added to ...
          </p>
        </li>
        <li className='rounded-[10px] bg-whiteBase-darker p-[15px] dark:bg-whiteBase/5'>
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
            <Image
              src={favourite}
              unoptimized
              alt='Trigger for adding photo to page'
              width={IconSizes.LG}
              height={IconSizes.LG}
            />
          </div>
          <p className='hidden leading-6 text-secondaryText max-md:block'>
            Image ID: <span className='font-medium text-darkBase dark:text-whiteBase'>ID</span> was
            added to ...
          </p>
        </li>
        <li className='rounded-[10px] bg-whiteBase-darker p-[15px] dark:bg-whiteBase/5'>
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
            <Image
              src={favourite}
              unoptimized
              alt='Trigger for adding photo to page'
              width={IconSizes.LG}
              height={IconSizes.LG}
            />
          </div>
          <p className='hidden leading-6 text-secondaryText max-md:block'>
            Image ID: <span className='font-medium text-darkBase dark:text-whiteBase'>ID</span> was
            added to ...
          </p>
        </li>
      </ul>
    </section>
  );
}
