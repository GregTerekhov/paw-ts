'use client';

import { useState } from 'react';

import { ButtonVariant, IconSizes } from 'types';

import { MobileMenu, UploadMenu } from '..';
import { PrimaryButton } from 'ui';

import upload from '../../public/upload.svg';

interface UploadButtonProps {
  className: string;
}

export default function UploadingMenuControls({ className }: UploadButtonProps) {
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  return (
    <>
      <PrimaryButton
        variant={ButtonVariant.LabelWithin}
        onHandleClick={() => setIsOpenMenu(true)}
        label='Upload'
        iconSrc={upload}
        iconAlt='Button for uploading photo'
        sizes={{ width: IconSizes.XS, height: IconSizes.XS }}
        classNameButton={`${className} hidden gap-x-2.5 rounded-[10px] bg-accentBase-light py-3 text-sm uppercase leading-4 tracking-[.16667em] text-accentBase dark:bg-accentBase/20`}
      />
      {isOpenMenu && (
        <MobileMenu setIsOpen={setIsOpenMenu}>
          <UploadMenu />
        </MobileMenu>
      )}
    </>
  );
}
