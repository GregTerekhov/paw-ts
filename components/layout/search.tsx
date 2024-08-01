'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { ButtonType, ButtonVariant, IconName, IconSizes, Paths } from 'types';

import { PrimaryButton } from 'ui';

export default function SearchForm() {
  const [isHovered, setIsHovered] = useState(false);
  const router = useRouter();

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    router.push(Paths.Search);
  };
  return (
    <form>
      <label htmlFor='search'>
        <input
          id='search'
          type='text'
          autoComplete='off'
          placeholder='Search for breeds by name'
          className={`${isHovered ? 'border-accentBase-light placeholder:text-transparent dark:hover:border-accentBase/20' : 'border-transparent placeholder:text-secondaryText'} w-full rounded-[20px] border border-solid py-[15px] pl-5 text-medium leading-[30px] text-darkBase focus:!border-accentBase focus:!outline-none focus:placeholder:text-darkBase dark:bg-whiteBase/5 dark:text-secondaryText dark:focus:!border-accentBase/20`}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        />
      </label>
      <PrimaryButton
        variant={ButtonVariant.Iconic}
        onHandleClick={handleClick}
        type={ButtonType.Submit}
        iconSrc={IconName.Search}
        classNameButton='absolute group hover:bg-accentBase right-2.5 top-2.5 flex h-10 w-10 rounded-[10px] bg-accentBase-light dark:bg-accentBase/20'
        sizes={{ width: IconSizes.LG, height: IconSizes.LG }}
        iconClass='fill-accentBase group-hover:fill-whiteBase'
      />
    </form>
  );
}
