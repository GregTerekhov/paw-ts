import { Dispatch, SetStateAction } from 'react';

import { ButtonVariant, IconSizes } from 'types';

import { Container, ThemeSwitcher } from '.';
import { PrimaryButton } from 'ui';

import close from '../public/close.svg';

export default function MobileMenu({
  children,
  setIsOpen,
}: Readonly<{
  children: React.ReactNode;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}>) {
  return (
    <div className='fixed left-0 top-0 z-30 h-screen w-screen overflow-auto bg-whiteBase-darker pt-5 md:pt-[30px] dark:bg-darkBase-foreground'>
      <Container>
        <ThemeSwitcher />
        <div className='mb-5 flex justify-end'>
          <PrimaryButton
            variant={ButtonVariant.Iconic}
            onHandleClick={() => setIsOpen(false)}
            iconSrc={close}
            iconAlt='Close menu button'
            sizes={{ width: IconSizes['3XL'], height: IconSizes['3XL'] }}
            classNameButton='flex h-[60px] w-[60px] rounded-[20px] bg-whiteBase dark:bg-whiteBase/5'
          />
        </div>
        <div>{children}</div>
      </Container>
    </div>
  );
}
