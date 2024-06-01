'use client';

import { MouseEventHandler } from 'react';
import Image from 'next/image';

import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import { ButtonType, ButtonVariant, IconSizes } from 'types';

interface Sizes {
  width?: IconSizes;
  height?: IconSizes;
}

interface IPrimaryButtonProps {
  variant: ButtonVariant;
  onHandleClick?: MouseEventHandler<HTMLButtonElement>;
  type?: ButtonType;
  label?: string;
  iconSrc?: StaticImport;
  iconAlt?: string;
  classNameButton?: string;
  sizes?: Sizes;
  iconClass?: { rotate: string };
}

export default function PrimaryButton({
  variant,
  onHandleClick,
  label,
  iconSrc,
  iconAlt,
  sizes,
  classNameButton,
  iconClass,
  type = ButtonType.Button,
}: IPrimaryButtonProps) {
  return (
    <button
      type={type}
      className={`${classNameButton} items-center justify-center`}
      onClick={onHandleClick}
    >
      {iconSrc && iconAlt && sizes && (
        <Image
          src={iconSrc}
          unoptimized
          alt={iconAlt}
          width={sizes.width}
          height={sizes.height}
          style={iconClass}
        />
      )}
      {label && label}
    </button>
  );
}

// {`${style.radius} ${style.backgroundColor} flex h-[60px] w-[60px] ${style.borderWidth} border-solid border-whiteBase md:h-20 md:w-20`}
// 'absolute right-2.5 top-2.5 flex h-10 w-10 rounded-[10px] bg-accentBase-light dark:bg-accentBase/20'
// 'flex h-10 w-10 rounded-[10px] bg-accentBase-light dark:bg-accentBase/20'
// 'flex h-[60px] w-[60px] rounded-[20px] bg-whiteBase hover:bg-accentBase-light dark:bg-whiteBase/5'
// `${className} hidden gap-x-2.5 rounded-[10px] bg-accentBase-light py-3 text-sm uppercase leading-4 tracking-[.16667em] text-accentBase dark:bg-accentBase/20`
// 'flex w-full rounded-[10px] bg-whiteBase px-2.5 py-2 md:h-10 md:w-10 dark:bg-darkBase'
// 'bg-whiteBase-darker flex h-10 w-10 rounded-[10px] text-secondaryText dark:bg-whiteBase/5'
// 'flex h-[60px] w-[60px] rounded-[20px] bg-whiteBase dark:bg-whiteBase/5'
// 'absolute left-1/2 top-1/2 flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 rounded-[10px] bg-whiteBase'
// 'absolute left-1/2 top-1/2 flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 rounded-[10px] bg-whiteBase'
