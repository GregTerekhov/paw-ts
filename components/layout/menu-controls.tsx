'use client';

import { ButtonVariant, IconName, IconSizes } from 'types';
import { useMenu } from 'context';

import { MobileMenu } from 'template';
import Navigation from '../navigation';
import { PrimaryButton } from 'ui';

interface IMenuControls {
  menuId: string;
}

export default function MenuControls({ menuId }: IMenuControls) {
  const { openMenuId, toggleMenu, closeMenu } = useMenu();

  const isOpen = openMenuId === menuId;

  const handleClick = () => {
    toggleMenu(menuId);
  };

  return (
    <>
      <div className='hidden h-[60px] w-[60px] max-lg:block'>
        <PrimaryButton
          variant={ButtonVariant.Iconic}
          onHandleClick={handleClick}
          iconSrc={IconName.Burger}
          classNameButton='group flex h-[60px] w-[60px] rounded-[20px] bg-whiteBase hover:bg-accentBase dark:bg-whiteBase/5'
          sizes={{ width: IconSizes['5XL'], height: IconSizes.SM }}
          iconClass='fill-accentBase group-hover:fill-whiteBase'
        />
      </div>
      {isOpen && (
        <MobileMenu
          closeMenu={closeMenu}
          isOpen={isOpen}
        >
          <Navigation />
        </MobileMenu>
      )}
    </>
  );
}
