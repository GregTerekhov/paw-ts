import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import { ButtonType, ButtonVariant, IconSizes, PathLabel } from 'types';

import { PrimaryButton } from 'ui';

import like from '../../public/like.svg';
import dislike from '../../public/dislike.svg';
import favourite from '../../public/favourite.svg';

interface ButtonStyle {
  backgroundColor: string;
  borderWidth: string;
  radius?: string;
}

interface IVotingButtons {
  style: ButtonStyle;
  iconSrc: StaticImport;
  label: PathLabel;
  height?: IconSizes;
}

export default function VotingPictures() {
  const votingButtons: IVotingButtons[] = [
    {
      style: {
        backgroundColor: 'bg-like',
        borderWidth: 'border-4',
        radius: 'rounded-l-[20px]',
      },
      iconSrc: like,
      label: PathLabel.Likes,
    },
    {
      style: { backgroundColor: 'bg-accentBase', borderWidth: 'border-y-4' },

      iconSrc: favourite,
      label: PathLabel.Favourites,
      height: IconSizes.MD,
    },
    {
      style: {
        backgroundColor: 'bg-dislike',
        borderWidth: 'border-4',
        radius: 'rounded-r-[20px]',
      },
      iconSrc: dislike,
      label: PathLabel.Dislikes,
    },
  ];
  return (
    <ul className='absolute -bottom-8 left-[55px] flex overflow-hidden md:left-[210px] lg:left-[196px]'>
      {Array.isArray(votingButtons) &&
        votingButtons.map(({ style, iconSrc, label, height = IconSizes.XL }) => (
          <li key={label}>
            <PrimaryButton
              variant={ButtonVariant.Iconic}
              //   onHandleClick={}
              iconSrc={iconSrc}
              iconAlt={`Add current picture to ${label} page`}
              sizes={{ width: IconSizes.XL, height }}
              classNameButton={`${style.radius} ${style.backgroundColor} flex h-[60px] w-[60px] ${style.borderWidth} border-solid border-whiteBase md:h-20 md:w-20`}
              type={ButtonType.Submit}
            />
          </li>
        ))}
    </ul>
  );
}
