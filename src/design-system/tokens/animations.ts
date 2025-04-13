export const animations = {
  // Durées d'animation
  duration: {
    fastest: 100, // 100ms
    faster: 200, // 200ms
    fast: 300, // 300ms
    normal: 400, // 400ms
    slow: 500, // 500ms
    slower: 600, // 600ms
    slowest: 700, // 700ms
  },

  // Courbes d'animation (easing)
  easing: {
    linear: 'linear',
    easeIn: 'ease-in',
    easeOut: 'ease-out',
    easeInOut: 'ease-in-out',
    // Courbes personnalisées pour React Native
    standard: [0.2, 0, 0, 1],
    accelerate: [0.4, 0, 1, 1],
    decelerate: [0, 0, 0.2, 1],
    sharp: [0.4, 0, 0.6, 1],
  },

  // Transitions communes
  transitions: {
    fade: {
      duration: 300,
      easing: 'ease-in-out',
    },
    slide: {
      duration: 400,
      easing: 'ease-out',
    },
    scale: {
      duration: 300,
      easing: 'ease-in-out',
    },
  },
} as const;

// Types pour TypeScript
export type AnimationToken = keyof typeof animations;
export type DurationToken = keyof typeof animations.duration;
export type EasingToken = keyof typeof animations.easing;
export type TransitionToken = keyof typeof animations.transitions;
