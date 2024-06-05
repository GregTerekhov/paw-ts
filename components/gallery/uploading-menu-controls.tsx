'use client';

import { useState } from 'react';

import { ButtonVariant, IconName, IconSizes } from 'types';

import { MobileMenu, UploadMenu } from '..';
import { PrimaryButton } from 'ui';
import Modal from 'components/modal';
// import Link from 'next/link';
// import { useSearchParams } from 'next/navigation';

interface UploadButtonProps {
  className: string;
}

export default function UploadingMenuControls({ className }: UploadButtonProps) {
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  // const isOpen = useSearchParams().has('show');
  // console.log('isOpen', isOpen);

  return (
    <>
      {/* <Link
        href={`${Paths.Gallery}?show=true`}
        className={`${className} group hidden items-center justify-center gap-x-2.5 rounded-[10px] bg-accentBase-light py-3 text-sm uppercase leading-4 tracking-[.16667em] text-accentBase hover:bg-accentBase hover:text-whiteBase dark:bg-accentBase/20`}
      >
        <SvgIcon
          id={IconName.Upload}
          className='fill-accentBase group-hover:fill-whiteBase'
          size={{ width: IconSizes.XS, height: IconSizes.XS }}
        />
        Upload
      </Link> */}
      <PrimaryButton
        variant={ButtonVariant.LabelWithin}
        onHandleClick={() => setIsOpenMenu(true)}
        label='Upload'
        iconSrc={IconName.Upload}
        iconClass='fill-accentBase group-hover:fill-whiteBase'
        sizes={{ width: IconSizes.XS, height: IconSizes.XS }}
        classNameButton={`${className} hidden group hover:bg-accentBase gap-x-2.5 rounded-[10px] bg-accentBase-light py-3 text-sm uppercase leading-4 tracking-[.16667em] text-accentBase dark:bg-accentBase/20 hover:text-whiteBase`}
      />
      {isOpenMenu && (
        <>
          <div className='hidden max-lg:block'>
            <MobileMenu setIsOpen={setIsOpenMenu}>
              <UploadMenu />
            </MobileMenu>
          </div>
          <div className='hidden lg:block'>
            <Modal setIsOpen={setIsOpenMenu}>
              <UploadMenu />
            </Modal>
          </div>
        </>
      )}
    </>
  );
}
