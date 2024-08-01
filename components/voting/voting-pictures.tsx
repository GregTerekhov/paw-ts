import { ButtonType, ButtonVariant, IconSizes } from 'types';
import { getVotingButtons } from 'data';

import { PrimaryButton } from 'ui';

export default function VotingPictures() {
  const votingButtons = getVotingButtons();

  return (
    <ul className='absolute -bottom-8 left-1/2 flex -translate-x-1/2 overflow-hidden rounded-[20px] border-4 border-solid border-whiteBase bg-whiteBase dark:border-darkBase-foreground dark:bg-whiteBase/5'>
      {Array.isArray(votingButtons) &&
        votingButtons.map(({ style, iconSrc, label, height = IconSizes.XL }) => (
          <li key={label}>
            <PrimaryButton
              variant={ButtonVariant.Iconic}
              //   onHandleClick={}
              iconSrc={iconSrc}
              sizes={{ width: IconSizes.XL, height }}
              classNameButton={`${style.backgroundColor} group flex h-[60px] w-[60px] ${style.borderWidth} border-solid border-whiteBase md:h-20 md:w-20`}
              type={ButtonType.Submit}
              iconClass={`${style.iconStyle ?? ''} fill-whiteBase`}
            />
          </li>
        ))}
    </ul>
  );
}
