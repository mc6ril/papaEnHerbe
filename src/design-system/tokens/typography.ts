export const typography = {
  // Familles de polices
  fontFamily: {
    sans: 'System',
    serif: 'Georgia',
    mono: 'Menlo',
  },

  // Tailles de police
  fontSize: {
    xs: 12, // 12px
    sm: 14, // 14px
    base: 16, // 16px
    lg: 18, // 18px
    xl: 20, // 20px
    '2xl': 24, // 24px
    '3xl': 30, // 30px
    '4xl': 36, // 36px
    '5xl': 48, // 48px
    '6xl': 60, // 60px
  },

  // Poids de police
  fontWeight: {
    thin: '100',
    extralight: '200',
    light: '300',
    normal: '400',
    medium: '500',
    semibold: '600',
    bold: '700',
    extrabold: '800',
    black: '900',
  },

  // Hauteur de ligne (en pixels)
  lineHeight: {
    xs: 14, // 14px
    sm: 16, // 16px
    base: 16, // 16px
    lg: 20, // 20px
    xl: 22, // 22px
    '2xl': 26, // 26px
    '3xl': 32, // 32px
    '4xl': 38, // 38px
    '5xl': 50, // 50px
    '6xl': 62, // 62px
  },

  // Espacement des lettres (en pixels)
  letterSpacing: {
    tighter: -0.8,
    tight: -0.4,
    normal: 0,
    wide: 0.4,
    wider: 0.8,
    widest: 1.6,
  },
} as const;

// Types pour TypeScript
export type TypographyToken = keyof typeof typography;
export type FontFamilyToken = keyof typeof typography.fontFamily;
export type FontSizeToken = keyof typeof typography.fontSize;
export type FontWeightToken = keyof typeof typography.fontWeight;
export type LineHeightToken = keyof typeof typography.lineHeight;
export type LetterSpacingToken = keyof typeof typography.letterSpacing;
