import { Theme } from '../types';
import { eraseCookie, getCookie, setCookie } from './cookiesHelpers';

const applyPreference = (theme: string) => {
  const root = document.firstElementChild;
  root?.classList.remove(Theme.Dark, Theme.Light);
  root?.classList.add(theme);
};

export const getPreference = (storageKey: string): string => {
  const cookie = getCookie(storageKey);

  if (cookie) {
    return cookie;
  }

  return typeof window !== 'undefined' &&
    window.matchMedia(`(prefers-color-scheme: ${Theme.Dark})`).matches
    ? Theme.Dark
    : Theme.Light;
};

export const setPreference = (storageKey: string, theme: string) => {
  eraseCookie(storageKey);

  if (theme) {
    setCookie(storageKey, theme, 365);
    applyPreference(theme);
  }
};
