'use client';

import { useRouter } from 'next/navigation';

import { ButtonVariant, IconName, IconSizes } from 'types';

import { PrimaryButton } from 'ui';

export default function ReturnButton() {
  const router = useRouter();

  const handleGoBack = (): void => {
    router.back();
  };

  return (
    <PrimaryButton
      variant={ButtonVariant.Iconic}
      onHandleClick={handleGoBack}
      iconSrc={IconName.Arrow}
      classNameButton='flex group h-10 w-10 rounded-[10px] bg-accentBase-light dark:bg-accentBase/20 hover:bg-accentBase'
      sizes={{ width: IconSizes.LG, height: IconSizes.LG }}
      iconClass='rotate-90 fill-accentBase group-hover:fill-whiteBase'
    />
  );
}
