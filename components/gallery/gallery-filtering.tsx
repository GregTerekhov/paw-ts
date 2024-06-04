import { ButtonType, ButtonVariant, IconName, IconSizes } from 'types';

import { PrimaryButton, SvgIcon } from 'ui';

interface GalleryFilters {
  label: string;
  value: string;
}

export default function GalleryFiltering() {
  const galleryFilters: GalleryFilters[] = [
    {
      label: 'Order',
      value: 'Random',
    },
    {
      label: 'Type',
      value: 'Static',
    },
    {
      label: 'Breed',
      value: 'None',
    },
  ];

  return (
    <ul className='mb-2.5 rounded-[10px] bg-whiteBase-darker p-2.5 max-md:space-y-2.5 md:mb-5 md:grid md:grid-cols-2 md:grid-rows-2 md:gap-x-5 md:gap-y-2.5 md:pb-5 md:pt-2.5 dark:bg-whiteBase/5'>
      {Array.isArray(galleryFilters) &&
        galleryFilters.map(({ label, value }) => (
          <li
            key={label}
            className='col-span-1'
          >
            <span className='inline-block indent-2.5 text-xs font-medium uppercase leading-[18px] text-secondaryText'>
              {label}
            </span>
            <button
              type={ButtonType.Button}
              className='flex w-full items-center justify-between rounded-[10px] bg-whiteBase px-2.5 py-2 text-darkBase dark:bg-darkBase dark:text-whiteBase'
            >
              {value}
              <SvgIcon
                id={IconName.Arrow}
                size={{ width: IconSizes.XXS, height: IconSizes.XXS }}
                className=' fill-secondaryText'
              />
            </button>
          </li>
        ))}
      <li className='items-end max-md:space-y-2.5 md:flex md:justify-between md:gap-x-2.5'>
        <div className='grow'>
          <span className='inline-block indent-2.5 text-xs font-medium uppercase leading-[18px] text-secondaryText'>
            Limit
          </span>
          <button
            type={ButtonType.Button}
            className='flex w-full items-center justify-between rounded-[10px] bg-whiteBase px-2.5 py-2 text-darkBase dark:bg-darkBase dark:text-whiteBase'
          >
            5 items per page
            <SvgIcon
              id={IconName.Arrow}
              size={{ width: IconSizes.XXS, height: IconSizes.XXS }}
              className=' fill-secondaryText'
            />
          </button>
        </div>
        <div>
          <PrimaryButton
            variant={ButtonVariant.Iconic}
            // onHandleClick={}
            iconSrc={IconName.Reload}
            iconClass='fill-accentBase'
            sizes={{ width: IconSizes.SM, height: IconSizes.LG }}
            classNameButton='flex w-full rounded-[10px] bg-whiteBase px-2.5 py-2 md:h-10 md:w-10 dark:bg-darkBase'
            type={ButtonType.Submit}
          />
        </div>
      </li>
    </ul>
  );
}
