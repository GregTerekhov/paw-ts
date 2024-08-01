import { StaticImageData, StaticImport } from 'next/dist/shared/lib/get-img-props';
import { IconName, IconSizes, PathLabel, Paths } from 'types';

interface ISortButtons {
  id: string;
  iconSrc: IconName;
}

interface GalleryFilters {
  label: string;
  value: string;
}

interface HeaderLinks {
  path: Paths;
  label: PathLabel;
  iconSrc: IconName;
  height?: IconSizes;
}

interface Sizes {
  width: number;
  height: number;
}

interface Paddings {
  paddingX: string;
  paddingY?: string;
  paddingB?: string;
  paddingT?: string;
}

interface NavigationLink {
  path: Paths;
  label: PathLabel;
  iconSrc: StaticImport;
  sizes: Sizes;
  backgroundColor: string;
  padding: Paddings;
}

export const getSortButton = (): ISortButtons[] => {
  return [
    {
      id: 'asc',
      iconSrc: IconName.Ascending,
    },
    {
      id: 'desc',
      iconSrc: IconName.Descending,
    },
  ];
};

export const getGalleryFilters = (): GalleryFilters[] => {
  return [
    {
      label: 'Order',
      value: 'Random',
    },
    {
      label: 'Type',
      value: 'Static',
    },
    {
      label: 'Breed',
      value: 'None',
    },
  ];
};

export const getHeaderLinks = (): HeaderLinks[] => {
  return [
    {
      path: Paths.Likes,
      label: PathLabel.Likes,
      iconSrc: IconName.Like,
    },
    {
      path: Paths.Favourites,
      label: PathLabel.Favourites,
      iconSrc: IconName.Favourite,
      height: IconSizes['4XL'],
    },
    {
      path: Paths.Dislikes,
      label: PathLabel.Dislikes,
      iconSrc: IconName.Dislike,
    },
  ];
};

export const getNavLinks = (
  voting: StaticImageData,
  breeds: StaticImageData,
  gallery: StaticImageData,
): NavigationLink[] => {
  return [
    {
      path: Paths.Voting,
      label: PathLabel.Voting,
      iconSrc: voting,
      sizes: { width: 112, height: 141 },
      backgroundColor: 'bg-[#b4b7ff]',
      padding: { paddingX: 'px-[9px]', paddingB: 'pb-6', paddingT: 'pt-[25px]' },
    },
    {
      path: Paths.Breeds,
      label: PathLabel.Breeds,
      iconSrc: breeds,
      sizes: { width: 110, height: 160 },
      backgroundColor: 'bg-like',
      padding: { paddingX: 'px-2.5', paddingY: 'py-[15px]' },
    },
    {
      path: Paths.Gallery,
      label: PathLabel.Gallery,
      iconSrc: gallery,
      sizes: { width: 112, height: 190 },
      backgroundColor: 'bg-dislike',
      padding: { paddingX: 'px-[9px]' },
    },
  ];
};
