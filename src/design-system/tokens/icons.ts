export const icons = {
  // Tailles d'icônes
  size: {
    xs: 12, // 12px
    sm: 16, // 16px
    md: 24, // 24px
    lg: 32, // 32px
    xl: 48, // 48px
    '2xl': 64, // 64px
  },

  // Familles d'icônes
  family: {
    material: 'MaterialIcons',
    materialCommunity: 'MaterialCommunityIcons',
    ionicons: 'Ionicons',
    fontAwesome: 'FontAwesome',
    fontAwesome5: 'FontAwesome5',
  },

  // Couleurs d'icônes
  color: {
    primary: 'primary',
    secondary: 'secondary',
    success: 'success',
    error: 'error',
    warning: 'warning',
    info: 'info',
    light: 'light',
    dark: 'dark',
  },
} as const;

// Types pour TypeScript
export type IconToken = keyof typeof icons;
export type IconSizeToken = keyof typeof icons.size;
export type IconFamilyToken = keyof typeof icons.family;
export type IconColorToken = keyof typeof icons.color;
