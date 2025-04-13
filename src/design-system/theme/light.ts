import {Theme} from './types';
import {designSystem} from '../index';

export const lightTheme: Theme = {
  mode: 'light',
  colors: {
    background: {
      primary: designSystem.colors.neutral[50],
      secondary: designSystem.colors.neutral[100],
      tertiary: designSystem.colors.neutral[200],
    },
    text: {
      primary: designSystem.colors.neutral[900],
      secondary: designSystem.colors.neutral[600],
      tertiary: designSystem.colors.neutral[400],
    },
    border: {
      primary: designSystem.colors.neutral[200],
      secondary: designSystem.colors.neutral[300],
    },
    status: {
      success: designSystem.colors.success[500],
      error: designSystem.colors.error[500],
      warning: designSystem.colors.warning[500],
      info: designSystem.colors.info[500],
      disabled: designSystem.colors.info[500],
    },
  },
};
