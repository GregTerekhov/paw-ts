import { ButtonType, ButtonVariant, IconName, IconSizes, PathLabel } from 'types';

import { PrimaryButton } from 'ui';

interface ButtonStyle {
  backgroundColor: string;
  iconStyle: string;
  borderWidth?: string;
}

interface IVotingButtons {
  style: ButtonStyle;
  iconSrc: IconName;
  label: PathLabel;
  height?: IconSizes;
}

export default function VotingPictures() {
  const votingButtons: IVotingButtons[] = [
    {
      style: {
        backgroundColor: 'bg-like hover:bg-like/30',
        iconStyle: 'group-hover:fill-like',
      },
      iconSrc: IconName.Like,
      label: PathLabel.Likes,
    },
    {
      style: {
        backgroundColor: 'bg-accentBase hover:bg-accentBase/30',
        borderWidth: 'border-x-4',
        iconStyle: 'group-hover:fill-accentBase',
      },

      iconSrc: IconName.Favourite,
      label: PathLabel.Favourites,
      height: IconSizes.MD,
    },
    {
      style: {
        backgroundColor: 'bg-dislike hover:bg-dislike/30',
        iconStyle: 'group-hover:fill-dislike',
      },
      iconSrc: IconName.Dislike,
      label: PathLabel.Dislikes,
    },
  ];
  return (
    <ul className='absolute -bottom-8 left-[55px] flex overflow-hidden rounded-[20px] border-4 border-solid bg-whiteBase md:left-[210px] lg:left-[196px] dark:border-darkBase-foreground dark:bg-whiteBase/5'>
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
