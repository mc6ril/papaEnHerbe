import {Theme} from '@design-system/theme/types';
import {designSystem} from '../index';

export const darkTheme: Theme = {
  mode: 'dark',
  colors: {
    background: {
      primary: designSystem.colors.neutral[900],
      secondary: designSystem.colors.neutral[800],
      tertiary: designSystem.colors.neutral[700],
    },
    text: {
      primary: designSystem.colors.neutral[50],
      secondary: designSystem.colors.neutral[200],
      tertiary: designSystem.colors.neutral[400],
    },
    border: {
      primary: designSystem.colors.neutral[700],
      secondary: designSystem.colors.neutral[600],
    },
    status: {
      success: designSystem.colors.success[500],
      error: designSystem.colors.error[500],
      warning: designSystem.colors.warning[500],
      info: designSystem.colors.info[500],
      disabled: designSystem.colors.neutral[300],
    },
  },
};
