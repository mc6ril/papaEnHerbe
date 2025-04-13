import {designSystem, spacing} from '@design-system/index';
import React from 'react';
import {View, ViewStyle} from 'react-native';

type CardVariant = 'elevated' | 'outline' | 'filled';

interface CardProps {
  variant?: CardVariant;
  children: React.ReactNode;
  style?: ViewStyle;
}

export const Card: React.FC<CardProps> = ({
  variant = 'elevated',
  children,
  style,
}) => {
  const getCardStyle = (): ViewStyle => {
    const baseStyle: ViewStyle = {
      borderRadius: designSystem.borders.radius.lg,
      padding: spacing.base,
    };

    const variantStyles: Record<CardVariant, ViewStyle> = {
      elevated: {
        backgroundColor: designSystem.colors.neutral[50],
        ...designSystem.shadows.md,
      },
      outline: {
        backgroundColor: 'transparent',
        borderWidth: designSystem.borders.width[1],
        borderColor: designSystem.colors.neutral[200],
      },
      filled: {
        backgroundColor: designSystem.colors.neutral[100],
      },
    };

    return {
      ...baseStyle,
      ...variantStyles[variant],
      ...style,
    };
  };

  return <View style={getCardStyle()}>{children}</View>;
};
