'use client';

import { useEffect } from 'react';

import { Themes } from 'types';
import { useLocalStorage } from './useLocalStorage';

export const useTheme = () => {
  const [theme, setTheme] = useLocalStorage<Themes.Light | Themes.Dark>({
    key: 'theme',
    initialValue: Themes.Light,
  });

  const isDark = theme === Themes.Dark;

  useEffect(() => {
    if (
      theme === Themes.Dark ||
      (!('theme' in localStorage) &&
        window.matchMedia(`(prefers-color-scheme: ${Themes.Dark})`).matches)
    ) {
      document.documentElement.classList.add(Themes.Dark);
    } else {
      document.documentElement.classList.remove(Themes.Dark);
    }
  }, [theme]);

  const handleSwitchTheme = () => {
    const newTheme = isDark ? Themes.Light : Themes.Dark;
    setTheme(newTheme);
  };

  return { isDark, handleSwitchTheme };
};
