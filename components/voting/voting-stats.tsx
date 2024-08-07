import { IconName, IconSizes } from 'types';

import { SvgIcon } from 'ui';

export default function VotingStatistics() {
  return (
    <ul className='max-h-votingSm space-y-2.5 overflow-auto md:max-h-votingMd lg:max-h-votingLg'>
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
          <SvgIcon
            id={IconName.Favourite}
            size={{ width: IconSizes.LG, height: IconSizes.LG }}
            className='fill-accentBase'
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
          <SvgIcon
            id={IconName.Favourite}
            size={{ width: IconSizes.LG, height: IconSizes.LG }}
            className='fill-accentBase'
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
          <SvgIcon
            id={IconName.Favourite}
            size={{ width: IconSizes.LG, height: IconSizes.LG }}
            className='fill-accentBase'
          />
        </div>
        <p className='hidden leading-6 text-secondaryText max-md:block'>
          Image ID: <span className='font-medium text-darkBase dark:text-whiteBase'>ID</span> was
          added to ...
        </p>
      </li>
    </ul>
  );
}
