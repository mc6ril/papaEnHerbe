export const accessibility = {
  // Tailles de texte minimum
  text: {
    minimumSize: 14, // 14px minimum pour la lisibilité
    minimumLineHeight: 1.5, // Ratio minimum pour l'espacement des lignes
    minimumLetterSpacing: 0.5, // Espacement minimum entre les lettres
  },

  // Contrastes de couleurs
  contrast: {
    minimum: 4.5, // Ratio de contraste minimum pour le texte normal
    enhanced: 7, // Ratio de contraste minimum pour le texte important
    largeText: 3, // Ratio de contraste minimum pour le texte large
  },

  // Espacement pour la lisibilité
  spacing: {
    minimumTouchTarget: 44, // 44px minimum pour les zones cliquables
    minimumTextSpacing: 8, // 8px minimum entre les lignes de texte
    minimumComponentSpacing: 16, // 16px minimum entre les composants
  },

  // Règles d'accessibilité
  rules: {
    focusVisible: true, // Indicateur de focus visible
    reducedMotion: true, // Support de la réduction des animations
    screenReader: true, // Support des lecteurs d'écran
  },
} as const;

// Types pour TypeScript
export type AccessibilityToken = keyof typeof accessibility;
export type TextAccessibilityToken = keyof typeof accessibility.text;
export type ContrastToken = keyof typeof accessibility.contrast;
export type SpacingAccessibilityToken = keyof typeof accessibility.spacing;
export type RulesAccessibilityToken = keyof typeof accessibility.rules;
