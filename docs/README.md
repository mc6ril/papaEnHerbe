# Papa en Herbe - Application d'accompagnement pour les futurs papas

## Mission

Accompagner les futurs papas (surtout les primo-papas) tout au long de la grossesse et les aider à se sentir légitimes, informés et utiles.

## Objectifs Principaux

1. **Légitimité**

   - Aider les futurs papas à trouver leur place dans le processus de grossesse
   - Valoriser leur rôle et leur importance
   - Créer un espace de partage et d'échange entre futurs papas

2. **Information**

   - Fournir des informations claires et fiables sur la grossesse
   - Expliquer les changements physiques et émotionnels
   - Guider sur les démarches administratives et médicales
   - Partager des conseils pratiques pour le quotidien

3. **Utilité**
   - Proposer des actions concrètes pour soutenir la future maman
   - Suggérer des activités de préparation à la parentalité
   - Offrir des outils pour suivre l'évolution de la grossesse
   - Faciliter l'organisation et la préparation de l'arrivée du bébé

## Plan de Développement

### Phase 1 - MVP (Minimum Viable Product)

- **Splash Screen**

  - Logo et identité visuelle
  - Animation d'accueil
  - Message chaleureux

- **Home Page**

  - Sélection de la date de conception/terme
  - Affichage de la semaine actuelle de grossesse
  - Informations sur le développement du bébé
  - Conseils basiques pour le futur papa
  - Interface simple et intuitive

- **Fonctionnalités de Base**
  - Calcul automatique de la progression
  - Affichage des étapes clés
  - Informations médicales de base
  - Conseils quotidiens

### Phase 2 - Personnalisation

- **Système d'Authentification**

  - Création de compte
  - Sauvegarde des préférences
  - Synchronisation des données

- **Fonctionnalités Avancées**

  - Calendrier des rendez-vous médicaux
  - Liste de tâches personnalisée
  - Suivi des symptômes
  - Rappels et notifications
  - Personnalisation du contenu selon le stade

- **Améliorations UX/UI**
  - Interface plus riche
  - Animations et transitions
  - Thème personnalisable

### Phase 3 - Communauté et Engagement

- **Espace Communautaire**

  - Partage d'expériences
  - Forum de discussion
  - Témoignages de papas
  - Système de mentorat

- **Fonctionnalités Sociales**

  - Profils utilisateurs
  - Système de notifications
  - Partage de moments clés
  - Espace couple

- **Contenu Premium**
  - Guides détaillés
  - Vidéos éducatives
  - Ressources expertes
  - Ateliers en ligne

## Fonctionnalités Clés (à développer)

- Suivi de grossesse personnalisé
- Calendrier des rendez-vous médicaux
- Liste de tâches et préparatifs
- Espace de partage d'expériences
- Ressources éducatives
- Outils de suivi des symptômes et du bien-être
- Guide des démarches administratives
- Suggestions d'activités de couple
- Préparation à l'accouchement

## Architecture

Cette application suit une architecture propre (Clean Architecture) avec la structure suivante :

```
src/
├── core/                  # Logique métier centrale
│   ├── entities/         # Entités du domaine
│   ├── repositories/     # Interfaces des repositories
│   └── usecases/        # Cas d'utilisation
│
├── data/                 # Couche d'accès aux données
│   ├── repositories/    # Implémentations des repositories
│   └── datasources/    # Sources de données (API, local storage)
│
├── domain/              # Modèles et interfaces du domaine
│   ├── models/         # Modèles de données
│   └── interfaces/     # Interfaces communes
│
├── infrastructure/      # Services et configurations
│   ├── api/           # Configuration API
│   ├── storage/       # Configuration stockage
│   └── services/      # Services externes
│
├── presentation/       # Couche présentation
│   ├── components/    # Composants réutilisables
│   ├── features/      # Fonctionnalités de l'application
│   │   ├── home/     # Fonctionnalité Home
│   │   │   ├── components/  # Composants spécifiques à Home
│   │   │   ├── screens/    # Écrans de la fonctionnalité Home
│   │   │   └── services/   # Services spécifiques à Home
│   │   └── ...       # Autres fonctionnalités
│   ├── services/      # Services de présentation
│   └── utils/         # Utilitaires de présentation
│
└── design-system/     # Système de design
    ├── components/    # Composants UI de base
    ├── theme/        # Configuration du thème
    └── styles/       # Styles globaux
```

Cette architecture garantit :

- Une séparation claire des responsabilités
- Une maintenabilité optimale
- Une testabilité facilitée
- Une évolutivité du code
- Une réutilisation maximale des composants

## Valeurs

- Empathie
- Fiabilité
- Accessibilité
- Bienveillance
- Partage
- Accompagnement
