'use client';

import { ButtonVariant, IconName, IconSizes } from 'types';

import { Container, ThemeSwitcher } from 'components';
import { PrimaryButton } from 'ui';

export default function MobileMenu({
  children,
  isOpen,
  closeMenu,
}: Readonly<{
  children: React.ReactNode;
  isOpen: boolean;
  closeMenu: () => void;
}>) {
  return (
    <div
      className={`${isOpen ? 'left-0' : '-left-full'} fixed top-0 z-30 h-screen overflow-auto bg-whiteBase-darker pt-5 max-lg:w-screen md:pt-[30px] dark:bg-darkBase-foreground`}
    >
      <Container>
        <ThemeSwitcher />
        <div className='mb-5 flex justify-end'>
          <PrimaryButton
            variant={ButtonVariant.Iconic}
            onHandleClick={closeMenu}
            iconSrc={IconName.Close}
            sizes={{ width: IconSizes['3XL'], height: IconSizes['3XL'] }}
            classNameButton='group flex h-[60px] w-[60px] rounded-[20px] bg-whiteBase hover:bg-accentBase dark:bg-whiteBase/5'
            iconClass='fill-accentBase group-hover:fill-whiteBase'
          />
        </div>
        <div>{children}</div>
      </Container>
    </div>
  );
}
