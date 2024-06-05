'use client';

import { Dispatch, SetStateAction } from 'react';

import { ButtonVariant, IconName, IconSizes } from 'types';

import { Container, ThemeSwitcher } from '.';
import { PrimaryButton } from 'ui';

export default function MobileMenu({
  children,
  setIsOpen,
}: Readonly<{
  children: React.ReactNode;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}>) {
  // const router = useRouter();
  return (
    <div className='fixed left-0 top-0 z-30 h-screen overflow-auto bg-whiteBase-darker pt-5 max-lg:w-screen md:pt-[30px] dark:bg-darkBase-foreground'>
      <Container>
        <ThemeSwitcher />
        <div className='mb-5 flex justify-end'>
          {/* <Link
            href={router.back}
            className='group flex h-[60px] w-[60px] rounded-[20px] bg-whiteBase hover:bg-accentBase dark:bg-whiteBase/5'
          >
            <SvgIcon
              id={IconName.Close}
              className='fill-accentBase group-hover:fill-whiteBase'
              size={{ width: IconSizes['3XL'], height: IconSizes['3XL'] }}
            />
          </Link> */}
          <PrimaryButton
            variant={ButtonVariant.Iconic}
            onHandleClick={() => setIsOpen(false)}
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
