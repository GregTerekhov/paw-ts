export enum ButtonType {
  Button = 'button',
  Submit = 'submit',
}

export enum ButtonVariant {
  LabelWithin = 'labelled',
  Iconic = 'iconic',
}

export enum IconSizes {
  XXS = 12,
  XS = 16,
  SM = 18,
  MD = 19,
  LG = 20,
  XL = 22,
  '2XL' = 24,
  '3XL' = 25,
  '4XL' = 26,
  '5XL' = 30,
  '6XL' = 100,
  '7XL' = 200,
}

export type Sizes = {
  width: IconSizes;
  height: IconSizes;
};

export enum IconName {
  Arrow = 'arrow',
  Ascending = 'ascending',
  Burger = 'burger',
  Close = 'close',
  Descending = 'descending',
  Dislike = 'dislike',
  Eye = 'eye',
  Favourite = 'favourite',
  Like = 'like',
  Logo = 'logo',
  NoImage = 'no-image',
  Reload = 'reload',
  Search = 'search',
  SleepingEye = 'sleeping-eye',
  Upload = 'upload',
}
