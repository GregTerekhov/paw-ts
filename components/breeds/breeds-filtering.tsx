import { ButtonType, ButtonVariant, IconName, IconSizes } from 'types';
import { getSortButton } from 'data';

import { PrimaryButton, SvgIcon } from 'ui';

export default function BreedsFiltering() {
  const sortButton = getSortButton();

  return (
    <div className='max-md:mb-2.5 max-md:space-y-2.5 md:flex md:flex-1 md:gap-x-2.5'>
      <button
        type={ButtonType.Button}
        className='flex items-center justify-between rounded-[10px] border border-solid border-transparent bg-whiteBase-darker px-2.5 py-2 text-secondaryText hover:border-accentBase-light max-md:w-full md:w-[230px] lg:w-[226px] dark:bg-whiteBase/5 dark:hover:border-accentBase/20'
      >
        All breeds
        <SvgIcon
          id={IconName.Arrow}
          size={{ width: IconSizes.XXS, height: IconSizes.XXS }}
          className=' fill-secondaryText'
        />
      </button>
      <div className='flex gap-x-2.5'>
        <button
          type={ButtonType.Button}
          className='flex items-center justify-between rounded-[10px] border border-solid border-transparent bg-whiteBase-darker px-2.5 py-2 text-secondaryText hover:border-accentBase-light max-md:w-full md:w-[124px] lg:w-[101px] dark:bg-whiteBase/5 dark:hover:border-accentBase/20'
        >
          Limit: 10
          <SvgIcon
            id={IconName.Arrow}
            size={{ width: IconSizes.XXS, height: IconSizes.XXS }}
            className=' fill-secondaryText'
          />
        </button>
        {Array.isArray(sortButton) &&
          sortButton.map(({ id, iconSrc }) => (
            <div
              key={id}
              className='h-10 w-10'
            >
              <PrimaryButton
                variant={ButtonVariant.Iconic}
                // onHandleClick={}
                iconSrc={iconSrc}
                sizes={{ width: IconSizes.SM, height: IconSizes.XL }}
                classNameButton='bg-whiteBase-darker border border-solid border-transparent hover:border-accentBase-light dark:hover:border-accentBase/20 group flex h-10 w-10 rounded-[10px] text-secondaryText dark:bg-whiteBase/5'
                iconClass='fill-secondaryText group-hover:fill-accentBase'
              />
            </div>
          ))}
      </div>
    </div>
  );
}
