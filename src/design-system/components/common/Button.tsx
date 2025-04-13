import React from "react";
import { TouchableOpacity, Text, ViewStyle, TextStyle } from "react-native";
import { useTheme } from "@design-system/theme/ThemeProvider";
import { typography } from "@design-system/tokens/typography";
import { spacing } from "@design-system/tokens/spacing";
import { shadows } from "@design-system/tokens/shadows";
import { textStyles } from "@design-system/tokens/text-styles";

type ButtonVariant = "primary" | "secondary" | "tertiary" | "outline";
type ButtonSize = "sm" | "base" | "lg";

interface ButtonProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  onPress: () => void;
  children: React.ReactNode;
  disabled?: boolean;
  style?: ViewStyle;
}

export const DesignButton: React.FC<ButtonProps> = ({
  variant = "primary",
  size = "base",
  onPress,
  children,
  disabled = false,
  style,
}) => {
  const { theme } = useTheme();

  const getButtonStyle = (): ViewStyle => {
    const baseStyle: ViewStyle = {
      borderRadius: spacing.sm,
      paddingHorizontal: spacing.base,
      shadowColor: theme.colors.text.primary,
      justifyContent: "center",
      alignItems: "center",
      flex: 1,
    };

    const shadowStyle: ViewStyle = {
      ...shadows.sm,
    };

    const variantStyles: Record<ButtonVariant, ViewStyle> = {
      primary: {
        backgroundColor: disabled ? theme.colors.status.disabled : theme.colors.background.primary,
      },
      secondary: {
        backgroundColor: disabled ? theme.colors.status.disabled : theme.colors.background.secondary,
      },
      tertiary: {
        backgroundColor: disabled ? theme.colors.status.disabled : theme.colors.background.tertiary,
      },
      outline: {
        backgroundColor: "transparent",
        borderWidth: 1,
        borderColor: disabled ? theme.colors.status.error : theme.colors.border.primary,
      },
    };

    const sizeStyles: Record<ButtonSize, ViewStyle> = {
      sm: {
        paddingVertical: spacing.sm,
      },
      base: {
        paddingVertical: spacing.base,
      },
      lg: {
        paddingVertical: spacing.lg,
      },
    };

    return {
      ...baseStyle,
      ...variantStyles[variant],
      ...sizeStyles[size],
      ...shadowStyle,
      ...style,
    };
  };

  const getTextStyle = (): TextStyle => {
    const baseStyle: TextStyle = {
      ...textStyles.button,
    };

    const variantTextStyles: Record<ButtonVariant, TextStyle> = {
      primary: {
        color: theme.colors.text.primary,
      },
      secondary: {
        color: theme.colors.text.primary,
      },
      tertiary: {
        color: theme.colors.text.primary,
      },
      outline: {
        color: disabled ? theme.colors.status.error : theme.colors.text.secondary,
      },
    };

    const sizeTextStyles: Record<ButtonSize, TextStyle> = {
      sm: {
        fontSize: typography.fontSize.sm,
      },
      base: {
        fontSize: typography.fontSize.base,
      },
      lg: {
        fontSize: typography.fontSize.lg,
      },
    };

    return {
      ...baseStyle,
      ...variantTextStyles[variant],
      ...sizeTextStyles[size],
    };
  };

  return (
    <TouchableOpacity
      style={getButtonStyle()}
      onPress={onPress}
      disabled={disabled}
      activeOpacity={0.8}>
      <Text style={getTextStyle()}>{children}</Text>
    </TouchableOpacity>
  );
};
