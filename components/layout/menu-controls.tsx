'use client';

import { useState } from 'react';

import { ButtonVariant, IconSizes } from 'types';

import { MobileMenu, Navigation } from '..';
import { PrimaryButton } from 'ui';

import burger from '../../public/burger.svg';

export default function MenuControls() {
  const [isUploadMenu, setIsUploadMenu] = useState(false);

  return (
    <>
      <div className='hidden h-[60px] w-[60px] max-lg:block'>
        <PrimaryButton
          variant={ButtonVariant.Iconic}
          onHandleClick={() => setIsUploadMenu(true)}
          iconSrc={burger}
          iconAlt='Open mobile menu'
          classNameButton='flex h-[60px] w-[60px] rounded-[20px] bg-whiteBase hover:bg-accentBase-light dark:bg-whiteBase/5'
          sizes={{ width: IconSizes['5XL'], height: IconSizes.SM }}
        />
      </div>
      {isUploadMenu && (
        <MobileMenu setIsOpen={setIsUploadMenu}>
          <Navigation />
        </MobileMenu>
      )}
    </>
  );
}
