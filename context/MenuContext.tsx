'use client';

import { createContext, ReactNode, useContext, useState } from 'react';

interface IMenuContext {
  toggleMenu: (menuId: string) => void;
  closeMenu: () => void;
  openMenuId: string | null;
}

interface IMenuProviderProps {
  children: ReactNode;
}

const MenuContext = createContext<IMenuContext>({
  toggleMenu: () => {},
  closeMenu: () => {},
  openMenuId: null,
});

export const MenuProvider = ({ children }: IMenuProviderProps) => {
  const [openMenuId, setOpenMenuId] = useState<string | null>(null);

  const toggleMenu = (menuId: string) => {
    setOpenMenuId((prevState) => (prevState === menuId ? null : menuId));
  };

  const closeMenu = () => {
    setOpenMenuId(null);
  };

  return (
    <MenuContext.Provider value={{ openMenuId, toggleMenu, closeMenu }}>
      {children}
    </MenuContext.Provider>
  );
};

export const useMenu = () => {
  const context = useContext(MenuContext);

  if (!context) {
    throw new Error('useMenu must be used within a MenuProvider');
  }
  return context;
};
