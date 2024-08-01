import { IconName, IconSizes, PathLabel } from 'types';

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

interface IBreedDescription {
  title: string;
  description: string;
}

export const getVotingButtons = (): IVotingButtons[] => {
  return [
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
};

export const getBreedDescription = (): IBreedDescription[] => {
  return [
    {
      title: 'Temperament: ',
      description: 'Description',
    },
    {
      title: 'Origin: ',
      description: 'Description about',
    },
    {
      title: 'Weight: ',
      description: 'Description',
    },
    {
      title: 'Life span: ',
      description: 'Description',
    },
  ];
};
