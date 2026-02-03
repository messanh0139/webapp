# Screenshots pour la Documentation

Ce dossier contient les captures d'écran de l'application pour la documentation.

## Captures à réaliser :

### 1. home-hero.png
- Page d'accueil, hero section
- Titre avec gradient doré
- Boutons CTA visibles
- Résolution : 1920x1080

### 2. home-features.png  
- Section des features (4 cards)
- Icônes et textes visibles
- Résolution : 1920x1080

### 3. destinations.png
- Les 3 cards de destinations
- Images et informations visibles
- Résolution : 1920x1080

### 4. chatbot-widget.png
- Widget chatbot fermé en bas à droite
- Icône flottante dorée
- Résolution : 1920x1080

### 5. chatbot-conversation.png
- Widget chatbot ouvert
- Conversation avec plusieurs messages
- Résolution : 1920x1080

### 6. quiz-questions.png
- Page quiz avec une question
- Barre de progression
- Options avec emojis
- Résolution : 1920x1080

### 7. quiz-result.png
- Résultat du quiz
- Recommandation affichée
- Détails de la destination
- Résolution : 1920x1080

### 8. booking-form.png
- Formulaire de réservation
- Tous les champs visibles
- Sidebar informative
- Résolution : 1920x1080

### 9. booking-success.png
- Page de confirmation
- Numéro de réservation
- Récapitulatif
- Résolution : 1920x1080

## Comment prendre les screenshots :

### Sur Linux :
```bash
# Utiliser Gnome Screenshot
gnome-screenshot -w  # Capture fenêtre
gnome-screenshot -a  # Capture zone

# Ou utiliser Flameshot
flameshot gui
```

### Sur Mac :
```bash
Cmd + Shift + 4  # Capture zone
Cmd + Shift + 3  # Capture écran complet
```

### Sur Windows :
```bash
Windows + Shift + S  # Outil capture
```

## Optimisation :

Après capture, optimiser les images :
```bash
# Installer imagemagick
sudo apt install imagemagick  # Linux

# Redimensionner et optimiser
convert input.png -resize 1920x1080 -quality 85 output.png
```

## Alternative :

Si vous ne pouvez pas prendre de screenshots maintenant, des placeholders ont été générés automatiquement par le code. Ils seront remplacés par vos vraies images plus tard.
