# Documentation Technique

## Architecture

### Design System

Le design system est organisé en plusieurs parties :

#### Tokens

Les tokens sont les éléments de base du design system, organisés dans `src/design-system/tokens/` :

- `colors.ts` : Système de couleurs avec support des thèmes clair/sombre
- `typography.ts` : Système de typographie
- `spacing.ts` : Système d'espacement
- `shadows.ts` : Système d'ombres
- `animations.ts` : Système d'animations
- `breakpoints.ts` : Système de breakpoints et fonctions de scaling
- `icons.ts` : Système d'icônes
- `accessibility.ts` : Règles d'accessibilité

#### Hooks

Les hooks utilitaires sont disponibles dans `src/design-system/hooks/` :

- `useTheme.ts` : Gestion du thème (clair/sombre)
- `useSpacing.ts` : Utilisation du système d'espacement
- `useTypography.ts` : Utilisation du système de typographie

### Système de Thème

Le système de thème utilise deux éléments complémentaires :

#### ThemeProvider

Le `ThemeProvider` est un composant de contexte qui enveloppe l'application et fournit le thème à tous les composants enfants. Il doit être placé à la racine de l'application :

```typescript
// App.tsx
import {ThemeProvider} from './design-system/ThemeProvider';

export default function App() {
  return <ThemeProvider>{/* Le reste de l'application */}</ThemeProvider>;
}
```

Le `ThemeProvider` :

- Gère l'état du thème (clair/sombre)
- Fournit le contexte du thème à toute l'application
- Permet de changer le thème globalement
- Gère la persistance du thème (si nécessaire)

#### useTheme

Le hook `useTheme` permet d'accéder au thème dans n'importe quel composant :

```typescript
import {useTheme} from './design-system/hooks/useTheme';

function MyComponent() {
  const {colors, theme, isDark, isLight} = useTheme();

  return (
    <View style={{backgroundColor: colors.primary[500]}}>{/* ... */}</View>
  );
}
```

Le hook `useTheme` :

- Permet d'accéder au thème actuel
- Fournit les couleurs adaptées au thème
- Donne des informations sur l'état du thème (isDark, isLight)
- Met à jour automatiquement le composant quand le thème change

#### Pourquoi les deux ?

- `ThemeProvider` : Gère l'état global du thème et le fournit à l'application
- `useTheme` : Permet d'accéder facilement au thème dans les composants

C'est un pattern courant en React : un Provider pour gérer l'état global et un hook pour y accéder facilement.

### Tests

Le projet utilise Jest et React Native Testing Library pour les tests unitaires.

#### Configuration

Le fichier `jest.config.js` configure :

- Le preset React Native
- Les extensions de fichiers à tester
- Les patterns d'ignorance pour les node_modules
- La collecte de couverture de code

#### Commandes

```bash
yarn test          # Lance tous les tests
yarn test:watch    # Lance les tests en mode watch
yarn test:coverage # Génère un rapport de couverture
```

### Storybook

Storybook est utilisé pour la documentation et le développement visuel des composants.

#### Configuration

- `.storybook/main.js` : Configuration principale
- `.storybook/preview.js` : Configuration de prévisualisation

#### Commandes

```bash
yarn storybook        # Lance le serveur Storybook
yarn storybook:build  # Construit la version statique
```

## Structure des Composants

Chaque composant suit cette structure :

```
src/components/ComponentName/
├── ComponentName.tsx        # Le composant
├── ComponentName.test.tsx   # Les tests
└── ComponentName.stories.tsx # Les stories
```

### Exemple de Composant

```typescript
// Button.tsx
import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';
import {useTheme} from '../../design-system/hooks/useTheme';

interface ButtonProps {
  onPress: () => void;
  children: string;
  variant?: 'primary' | 'secondary';
}

export const Button = ({
  onPress,
  children,
  variant = 'primary',
}: ButtonProps) => {
  const {colors} = useTheme();

  return (
    <TouchableOpacity
      style={[styles.button, {backgroundColor: colors[variant][500]}]}
      onPress={onPress}>
      <Text style={styles.text}>{children}</Text>
    </TouchableOpacity>
  );
};
```

### Exemple de Tests

```typescript
// Button.test.tsx
import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import {Button} from './Button';

describe('Button', () => {
  it('should call onPress when pressed', () => {
    const onPress = jest.fn();
    const {getByText} = render(<Button onPress={onPress}>Click me</Button>);
    fireEvent.press(getByText('Click me'));
    expect(onPress).toHaveBeenCalled();
  });
});
```

### Exemple de Stories

```typescript
// Button.stories.tsx
import React from 'react';
import {storiesOf} from '@storybook/react-native';
import {Button} from './Button';

storiesOf('Button', module)
  .add('Primary', () => <Button onPress={() => {}}>Primary Button</Button>)
  .add('Secondary', () => (
    <Button onPress={() => {}} variant="secondary">
      Secondary Button
    </Button>
  ));
```

## Responsive Design

Le projet utilise un système de scaling basé sur les dimensions de l'écran :

```typescript
// Fonctions de scaling
export function scaleFactor(): number {
  if (isTablet()) {
    return screenWidth / TARGET_TABLET_SCREEN_WIDTH;
  }
  return Math.min(1, screenWidth / TARGET_SCREEN_WIDTH);
}

export function normalize(size: number): number {
  if (isTablet()) {
    return size;
  }
  const newSize = size * scaleFactor();
  return PixelRatio.roundToNearestPixel(newSize);
}
```

## Thèmes

Le système de thèmes supporte les modes clair et sombre :

```typescript
export const colors = {
  light: {
    primary: {
      /* ... */
    },
    secondary: {
      /* ... */
    },
    // ...
  },
  dark: {
    primary: {
      /* ... */
    },
    secondary: {
      /* ... */
    },
    // ...
  },
};
```

L'utilisation se fait via le hook `useTheme` :

```typescript
const {colors, theme, isDark, isLight} = useTheme();
```
