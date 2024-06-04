import { IconName, Sizes } from 'types';

interface SvgIconProps {
  id: IconName;
  size: Sizes;
  className: string;
}

export default function SvgIcon({ id, size, className }: SvgIconProps) {
  return (
    <svg
      width={size.width}
      height={size.height}
      className={className}
    >
      <use href={`/icons.svg#icon-${id}`}></use>
    </svg>
  );
}
