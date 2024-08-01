import { ReactNode } from 'react';

import { MenuProvider, ThemeProvider } from 'context';

interface IProviderWrapperProps {
  children: ReactNode;
  theme: string | undefined;
  storageKey: string;
}

export default function ProviderWrapper({ children, storageKey, theme }: IProviderWrapperProps) {
  return (
    <ThemeProvider
      storageKey={storageKey}
      startTheme={theme}
    >
      <MenuProvider>{children}</MenuProvider>
    </ThemeProvider>
  );
}
