import { ButtonType, ButtonVariant, IconSizes } from 'types';

import { PrimaryButton } from 'ui';

import search from '../../public/search.svg';

export default function SearchForm() {
  return (
    <form>
      <label htmlFor='search'>
        <input
          id='search'
          type='text'
          autoComplete='off'
          placeholder='Search for breeds by name'
          className='w-full rounded-[20px] py-[15px] pl-5 text-medium leading-[30px] text-darkBase placeholder:text-secondaryText active:outline-accentBase dark:bg-whiteBase/5 dark:text-secondaryText'
        />
      </label>
      <PrimaryButton
        variant={ButtonVariant.Iconic}
        // onHandleClick={() => console.log('To Search page')}
        type={ButtonType.Submit}
        iconSrc={search}
        iconAlt='Button for searching breeds'
        classNameButton='absolute right-2.5 top-2.5 flex h-10 w-10 rounded-[10px] bg-accentBase-light dark:bg-accentBase/20'
        sizes={{ width: IconSizes.LG, height: IconSizes.LG }}
      />
    </form>
  );
}
