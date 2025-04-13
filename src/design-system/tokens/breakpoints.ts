import {Dimensions, PixelRatio, Platform} from 'react-native';

// Dimensions de référence pour le scaling
const TARGET_SCREEN_WIDTH = 375; // iPhone 12/13
const TARGET_TABLET_SCREEN_WIDTH = 768; // iPad mini
const {width: screenWidth} = Dimensions.get('window');

// Fonction pour détecter si l'appareil est une tablette
export function isTablet(): boolean {
  return Platform.OS === 'ios'
    ? screenWidth >= TARGET_TABLET_SCREEN_WIDTH
    : screenWidth >= TARGET_TABLET_SCREEN_WIDTH;
}

// Facteur d'échelle pour adapter les tailles
export function scaleFactor(): number {
  if (isTablet()) {
    return screenWidth / TARGET_TABLET_SCREEN_WIDTH;
  }
  return Math.min(1, screenWidth / TARGET_SCREEN_WIDTH);
}

// Normalisation des tailles en pixels
export function normalize(size: number): number {
  if (isTablet()) {
    return size;
  }
  const newSize = size * scaleFactor();
  return PixelRatio.roundToNearestPixel(newSize);
}

export const breakpoints = {
  // Tailles d'écran standard
  screen: {
    xs: 320, // iPhone SE
    sm: 375, // iPhone 12/13 mini
    md: 414, // iPhone 12/13 Pro Max
    lg: 768, // iPad mini
    xl: 1024, // iPad Pro
    '2xl': 1366, // iPad Pro 12.9"
  },

  // Layout helpers
  layout: {
    maxWidth: 1200,
    containerPadding: normalize(16),
    sidebarWidth: normalize(280),
    headerHeight: normalize(64),
    footerHeight: normalize(64),
  },
} as const;

// Types pour TypeScript
export type BreakpointToken = keyof typeof breakpoints;
export type ScreenToken = keyof typeof breakpoints.screen;
export type LayoutToken = keyof typeof breakpoints.layout;
