export const spacing = {
  // Espacements de base (basés sur 4px)
  none: 0,
  xs: 4, // 4px
  sm: 8, // 8px
  base: 12, // 12px
  md: 16, // 16px
  lg: 20, // 20px
  xl: 24, // 24px
  xxl: 32, // 32px
  xxxl: 40, // 40px

  // Espacements fractionnaires
  px: 1, // 1px
  0.5: 2, // 2px
  1.5: 6, // 6px
  2.5: 10, // 10px
  3.5: 14, // 14px
} as const;

// Types pour TypeScript
export type SpacingToken = keyof typeof spacing;
