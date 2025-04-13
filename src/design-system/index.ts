// Tokens
export * from './tokens/colors';
export * from './tokens/typography';
export * from './tokens/spacing';
export * from './tokens/shadows';
export * from './tokens/borders';
export * from './tokens/animations';
export * from './tokens/breakpoints';
export * from './tokens/icons';
export * from './tokens/accessibility';

// Types
export type {ColorToken, ColorShade} from './tokens/colors';

export type {
  TypographyToken,
  FontFamilyToken,
  FontSizeToken,
  FontWeightToken,
  LineHeightToken,
  LetterSpacingToken,
} from './tokens/typography';

export type {SpacingToken} from './tokens/spacing';

export type {ShadowToken} from './tokens/shadows';

export type {
  BorderToken,
  BorderRadiusToken,
  BorderStyleToken,
  BorderWidthToken,
} from './tokens/borders';

export type {
  AnimationToken,
  DurationToken,
  EasingToken,
  TransitionToken,
} from './tokens/animations';

export type {
  BreakpointToken,
  ScreenToken,
  LayoutToken,
} from './tokens/breakpoints';

export type {
  IconToken,
  IconSizeToken,
  IconFamilyToken,
  IconColorToken,
} from './tokens/icons';

export type {
  AccessibilityToken,
  TextAccessibilityToken,
  ContrastToken,
  SpacingAccessibilityToken,
  RulesAccessibilityToken,
} from './tokens/accessibility';

// Utils
import {colors} from '@design-system/tokens/colors';
import {typography} from '@design-system/tokens/typography';
import {spacing} from '@design-system/tokens/spacing';
import {shadows} from '@design-system/tokens/shadows';
import {borders} from '@design-system/tokens/borders';
import {animations} from '@design-system/tokens/animations';
import {breakpoints} from '@design-system/tokens/breakpoints';
import {icons} from '@design-system/tokens/icons';
import {accessibility} from '@design-system/tokens/accessibility';

export const designSystem = {
  colors,
  typography,
  spacing,
  shadows,
  borders,
  animations,
  breakpoints,
  icons,
  accessibility,
} as const;
