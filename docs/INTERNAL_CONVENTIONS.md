# Conventions de Structure des Fichiers

## Structure des Écrans (Screens)

Chaque écran doit suivre la structure suivante :

```
src/presentation/features/[feature]/screens/
├── [ScreenName].tsx
└── styles.ts
```

### Exemple :

```
src/presentation/features/home/screens/
├── HomePage.tsx
└── styles.ts
```

## Structure des Composants (Components)

Chaque composant doit suivre la structure suivante :

```
src/presentation/features/[feature]/components/
├── [ComponentName].tsx
└── styles.ts
```

### Exemple :

```
src/presentation/features/home/components/
├── DatePicker.tsx
└── styles.ts
```

## Règles à Suivre

1. **Séparation des Styles**

   - Toujours séparer les styles dans un fichier `styles.ts` distinct
   - Le fichier de styles doit être dans le même dossier que le composant/écran
   - Utiliser `StyleSheet.create()` dans le fichier de styles

2. **Import des Styles**

   - Importer les styles depuis le fichier local : `import { styles } from './styles'`
   - Ne jamais définir les styles directement dans le fichier du composant

3. **Nommage**

   - Utiliser des noms descriptifs pour les composants et écrans
   - Suivre le pattern PascalCase pour les noms de fichiers
   - Utiliser des noms en minuscules pour les fichiers de styles

4. **Organisation des Dossiers**
   - Regrouper les composants par fonctionnalité
   - Maintenir une hiérarchie claire : features > screens/components
   - Éviter les composants "orphelins" en dehors des dossiers de fonctionnalités

## Exemple de Code

### Composant

```typescript
// MyComponent.tsx
import { styles } from "./styles";

export const MyComponent = () => {
  return <View style={styles.container}>{/* Contenu du composant */}</View>;
};
```

### Styles

```typescript
// styles.ts
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    // ... autres styles
  },
});
```
