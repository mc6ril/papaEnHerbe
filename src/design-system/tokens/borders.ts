export const borders = {
  // Rayons de bordure
  radius: {
    none: 0,
    sm: 2, // 2px
    base: 4, // 4px
    md: 6, // 6px
    lg: 8, // 8px
    xl: 12, // 12px
    '2xl': 16, // 16px
    '3xl': 24, // 24px
    full: 9999,
  },

  // Styles de bordure
  style: {
    solid: 'solid',
    dashed: 'dashed',
    dotted: 'dotted',
    none: 'none',
  },

  // Épaisseurs de bordure
  width: {
    0: 0,
    1: 1,
    2: 2,
    4: 4,
    8: 8,
  },
} as const;

// Types pour TypeScript
export type BorderToken = keyof typeof borders;
export type BorderRadiusToken = keyof typeof borders.radius;
export type BorderStyleToken = keyof typeof borders.style;
export type BorderWidthToken = keyof typeof borders.width;
