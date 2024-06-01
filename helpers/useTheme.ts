import { useEffect, useState } from 'react';

export const useTheme = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    if (
      localStorage.theme === 'dark' ||
      (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  const handleSwitchTheme = () => {
    setIsDark(!isDark);

    if (isDark) {
      localStorage.theme = 'dark';
    } else {
      localStorage.theme = 'light';
    }
  };

  return { isDark, handleSwitchTheme };
};
