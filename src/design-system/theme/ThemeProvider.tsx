import React, {createContext, useContext, useState} from 'react';
import {Theme, ThemeContextType} from '@design-system/theme/types';
import {lightTheme} from '@design-system/theme/light';
import {darkTheme} from '@design-system/theme/dark';

export const ThemeContext = createContext<ThemeContextType>({
  theme: lightTheme,
  setTheme: () => {},
  toggleTheme: () => {},
});

export const useTheme = (): ThemeContextType => useContext(ThemeContext);

interface ThemeProviderProps {
  children: React.ReactNode;
  defaultTheme?: Theme;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({
  children,
  defaultTheme = lightTheme,
}) => {
  const [theme, setTheme] = useState<Theme>(defaultTheme);

  const toggleTheme = () => {
    setTheme(prevTheme =>
      prevTheme.mode === 'light' ? darkTheme : lightTheme,
    );
  };

  return (
    <ThemeContext.Provider value={{theme, setTheme, toggleTheme}}>
      {children}
    </ThemeContext.Provider>
  );
};
