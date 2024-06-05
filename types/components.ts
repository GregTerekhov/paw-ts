export enum Themes {
  Light = 'light',
  Dark = 'dark',
}

export interface GridItem {
  id: number;
  name: string;
  gridClass: string;
  size?: string;
}
