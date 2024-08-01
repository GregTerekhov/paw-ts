'use client';

import { ButtonVariant, IconName, IconSizes } from 'types';
import { useMenu } from 'context';

import { MobileMenu, Modal } from 'template';
import UploadMenu from '../upload-menu';
import { PrimaryButton } from 'ui';
// import Link from 'next/link';
// import { useSearchParams } from 'next/navigation';

interface UploadButtonProps {
  className: string;
  menuId: string;
}

export default function UploadingMenuControls({ className, menuId }: UploadButtonProps) {
  const { openMenuId, toggleMenu, closeMenu } = useMenu();

  const isOpen = openMenuId === menuId;

  // const isOpen = useSearchParams().has('show');
  // console.log('isOpen', isOpen);

  const handleClick = () => {
    toggleMenu(menuId);
  };

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
        onHandleClick={handleClick}
        label='Upload'
        iconSrc={IconName.Upload}
        iconClass='fill-accentBase group-hover:fill-whiteBase'
        sizes={{ width: IconSizes.XS, height: IconSizes.XS }}
        classNameButton={`${className} hidden group hover:bg-accentBase gap-x-2.5 rounded-[10px] bg-accentBase-light py-3 text-sm uppercase leading-4 tracking-[.16667em] text-accentBase dark:bg-accentBase/20 hover:text-whiteBase`}
      />
      {isOpen && (
        <>
          <div className='hidden max-lg:block'>
            <MobileMenu
              closeMenu={closeMenu}
              isOpen={isOpen}
            >
              <UploadMenu />
            </MobileMenu>
          </div>
          {/* <div className='hidden lg:block'>
            <Modal setIsOpen={closeMenu}>
              <UploadMenu />
            </Modal>
          </div> */}
        </>
      )}
    </>
  );
}
