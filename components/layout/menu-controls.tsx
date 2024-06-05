'use client';

import { useState } from 'react';

import { ButtonVariant, IconName, IconSizes } from 'types';

import { MobileMenu, Navigation } from '..';
import { PrimaryButton } from 'ui';

export default function MenuControls() {
  const [isUploadMenu, setIsUploadMenu] = useState(false);

  return (
    <>
      <div className='hidden h-[60px] w-[60px] max-lg:block'>
        <PrimaryButton
          variant={ButtonVariant.Iconic}
          onHandleClick={() => setIsUploadMenu(true)}
          iconSrc={IconName.Burger}
          classNameButton='group flex h-[60px] w-[60px] rounded-[20px] bg-whiteBase hover:bg-accentBase dark:bg-whiteBase/5'
          sizes={{ width: IconSizes['5XL'], height: IconSizes.SM }}
          iconClass='fill-accentBase group-hover:fill-whiteBase'
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
