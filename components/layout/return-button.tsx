'use client';

import { useRouter } from 'next/navigation';

import { ButtonVariant, IconSizes } from 'types';

import { PrimaryButton } from 'ui';

import arrow from '../../public/arrow.svg';

export default function ReturnButton() {
  const router = useRouter();

  const handleGoBack = (): void => {
    router.back();
  };

  return (
    <PrimaryButton
      variant={ButtonVariant.Iconic}
      onHandleClick={handleGoBack}
      iconSrc={arrow}
      iconAlt='Return button'
      classNameButton='flex h-10 w-10 rounded-[10px] bg-accentBase-light dark:bg-accentBase/20'
      sizes={{ width: IconSizes.LG, height: IconSizes.LG }}
      iconClass={{ rotate: '90deg' }}
    />
  );
}
