'use client';

import { createContext, ReactNode, useCallback, useContext, useEffect, useState } from 'react';

import { Theme } from 'types';
import { getPreference, setPreference } from 'helpers';

interface IThemeContext {
  theme: string | undefined;
  toggleTheme: () => void;
}

interface IThemeProviderProps {
  children: ReactNode;
  storageKey: string;
  startTheme?: string | undefined;
}

const ThemeContext = createContext<IThemeContext>({ theme: Theme.Light, toggleTheme: () => {} });

export const ThemeProvider = ({
  children,
  storageKey,
  startTheme = Theme.Light,
}: IThemeProviderProps) => {
  const initialTheme = startTheme ?? getPreference(storageKey);
  const [theme, setTheme] = useState<string>(initialTheme);

  useEffect(() => {
    setPreference(storageKey, theme);
  }, [theme, storageKey]);

  const toggleTheme = useCallback(() => {
    setTheme((prevTheme) => (prevTheme === Theme.Dark ? Theme.Light : Theme.Dark));
  }, []);

  return <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>;
};

export const useTheme = () => {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
