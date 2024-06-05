import type { Config } from 'tailwindcss';
import plugin from 'tailwindcss/plugin';

export const hocusFunction = plugin(function ({ addVariant }) {
  addVariant('hocus', ['&:hover', '&:focus']);
});

export const iconColors = plugin(function ({ addComponents }) {
  addComponents({
    '.icon-primary': {
      fill: '#ff868e',

      // '&:hover': {
      //   fill: 'fff',
      // },
    },
    '.icon-secondary': {
      fill: '#8c8c8c',
    },
    '.icon-jpg': {
      fill: '#f8f7f7',
    },
  });
});

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './ui/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'selector',
  theme: {
    screens: {
      sm: '375px',
      md: '768px',
      lg: '1440px',
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        transparent: 'transparent',
        currentColor: 'currentColor',
        accentBase: {
          DEFAULT: '#ff868e',
          light: '#fbe0dc',
        },
        whiteBase: {
          DEFAULT: '#fff',
          darker: '#f8f8f7',
        },
        darkBase: {
          DEFAULT: '#1d1d1d',
          foreground: '#282828',
        },
        secondaryText: '#8c8c8c',
        like: '#97eab9',
        dislike: '#ffd280',
      },
      fontSize: {
        xs: '10px',
        sm: '12px',
        base: '16px',
        medium: '20px',
        lg: '36px',
        xl: '44px',
      },
      maxHeight: {
        mobile: 'calc(100vh - 180px)',
        tablet: 'calc(100vh - 130px)',
        desktop: 'calc(100vh - 138px)',
        votingSm: 'calc(100vh - 490px)',
        breedsSm: 'calc(100vh - 370px)',
        gallerySm: 'calc(100vh - 662px)',
        votingMd: 'calc(100vh - 690px)',
        breedsMd: 'calc(100vh - 240px)',
        galleryMd: 'calc(100vh - 416px)',
        votingLg: 'calc(100vh - 662px)',
        modalUpload: 'calc(100vh - 60px)',
      },
      maxWidth: {
        gridItem: 'calc(100% - 20px)',
      },
      gridTemplateColumns: {
        16: 'repeat(16, minmax(0, 1fr))',
      },
    },
  },
  plugins: [hocusFunction, iconColors],
};
export default config;
