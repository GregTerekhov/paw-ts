import Image from 'next/image';

import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import { ButtonType, ButtonVariant, IconSizes } from 'types';

import { PrimaryButton } from 'ui';

import arrow from '../../public/arrow.svg';
import ascending from '../../public/ascending.svg';
import descending from '../../public/descending.svg';

interface ISortButtons {
  iconSrc: StaticImport;
  iconAlt: string;
}

export default function BreedsFiltering() {
  const sortButton: ISortButtons[] = [
    {
      iconSrc: ascending,
      iconAlt: 'Ascending',
    },
    {
      iconSrc: descending,
      iconAlt: 'Descending',
    },
  ];

  return (
    <div className='max-md:mb-2.5 max-md:space-y-2.5 md:flex md:flex-1 md:gap-x-2.5'>
      <button
        type={ButtonType.Button}
        className='bg-whiteBase-darker flex items-center justify-between rounded-[10px] px-2.5 py-2 text-secondaryText max-md:w-full md:w-[230px] lg:w-[226px] dark:bg-whiteBase/5'
      >
        All breeds
        <Image
          src={arrow}
          unoptimized
          alt='State All breeds dropdown arrow'
          width={IconSizes.XXS}
          height={IconSizes.XXS}
        />
      </button>
      <div className='flex gap-x-2.5'>
        <button
          type={ButtonType.Button}
          className='bg-whiteBase-darker flex items-center justify-between rounded-[10px] px-2.5 py-2 text-secondaryText max-md:w-full md:w-[124px] lg:w-[101px] dark:bg-whiteBase/5'
        >
          Limit: 10
          <Image
            src={arrow}
            unoptimized
            alt='State Limit dropdown arrow'
            width={IconSizes.XXS}
            height={IconSizes.XXS}
          />
        </button>
        {Array.isArray(sortButton) &&
          sortButton.map(({ iconSrc, iconAlt }) => (
            <div
              key={iconAlt}
              className='h-10 w-10'
            >
              <PrimaryButton
                variant={ButtonVariant.Iconic}
                // onHandleClick={}
                iconSrc={iconSrc}
                iconAlt={`${iconAlt} order icon`}
                sizes={{ width: IconSizes.SM, height: IconSizes.XL }}
                classNameButton='bg-whiteBase-darker flex h-10 w-10 rounded-[10px] text-secondaryText dark:bg-whiteBase/5'
              />
            </div>
          ))}
      </div>
    </div>
  );
}
