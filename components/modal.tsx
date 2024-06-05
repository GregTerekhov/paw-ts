import { Dispatch, SetStateAction } from 'react';
import { ButtonVariant, IconName, IconSizes } from 'types';

import { PrimaryButton } from 'ui';

export default function Modal({
  children,
  setIsOpen,
}: Readonly<{
  children: React.ReactNode;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}>) {
  return (
    <div className='fixed left-0 top-0 z-10 flex h-full w-full items-center justify-end bg-darkBase/60 p-10'>
      <div className='max-h-modalUpload h-screen w-[680px] rounded-[20px] bg-whiteBase-darker p-5 dark:bg-darkBase-foreground'>
        <div className='flex justify-end'>
          <PrimaryButton
            variant={ButtonVariant.Iconic}
            onHandleClick={() => setIsOpen(false)}
            iconSrc={IconName.Close}
            sizes={{ width: IconSizes['3XL'], height: IconSizes['3XL'] }}
            classNameButton='group flex h-[60px] w-[60px] rounded-[20px] bg-whiteBase hover:bg-accentBase dark:bg-whiteBase/5 mb-5'
            iconClass='fill-accentBase group-hover:fill-whiteBase'
          />
        </div>
        {children}
      </div>
    </div>
  );
}
