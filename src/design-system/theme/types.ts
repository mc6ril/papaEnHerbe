export type ThemeMode = 'light' | 'dark';

export interface ThemeColors {
  background: {
    primary: string;
    secondary: string;
    tertiary: string;
  };
  text: {
    primary: string;
    secondary: string;
    tertiary: string;
  };
  border: {
    primary: string;
    secondary: string;
  };
  status: {
    success: string;
    error: string;
    warning: string;
    info: string;
    disabled: string;
  };
}

export interface Theme {
  mode: ThemeMode;
  colors: ThemeColors;
}

export type ThemeContextType = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  toggleTheme: () => void;
};
