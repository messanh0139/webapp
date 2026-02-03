# TimeTravel Agency - Webapp Interactive

## Description

TimeTravel Agency est une webapp moderne et interactive présentant une agence de voyage temporel de luxe. L'application permet aux utilisateurs de découvrir trois destinations temporelles fascinantes, d'interagir avec un agent conversationnel IA, de personnaliser leur voyage via un quiz intelligent et de réserver leur voyage temporel.

**Projet réalisé par** : Messanh Yaovi KODJO  
**Formation** : Master 2 - Projet Web & IA  
**Date** : Février 2026

---

## Features Implémentées

### Page d'Accueil
- **Hero Section** avec vidéo/animation de fond
- **Présentation élégante** de l'agence avec animations au scroll
- **CTA (Call-to-Action)** vers les destinations et le quiz
- **Section Features** présentant les avantages de l'agence
- **Animations fluides** avec Framer Motion et AOS

### Galerie des Destinations
- **3 destinations temporelles** :
  - **Paris 1889** - Belle Époque (8 500€)
  - **Crétacé -65M** - Ère des Dinosaures (15 000€)
  - **Florence 1504** - Renaissance Italienne (12 000€)
- **Cards interactives** avec hover effects
- **Informations détaillées** : prix, durée, points forts
- **Images optimisées** avec lazy loading
- **Design responsive** mobile-first

### Agent Conversationnel (Chatbot IA)
- **Widget flottant** en bas à droite
- **Interface élégante** cohérente avec le thème sombre et or
- **Intégration Mistral AI** (API mistral-small)
- **Personnalité définie** : conseiller voyage temporel professionnel et passionné
- **Fonctionnalités** :
  - Conseils sur les destinations
  - Informations sur les prix
  - Suggestions personnalisées
  - FAQ agence de voyage
- **Questions rapides** pour démarrer la conversation
- **Historique de conversation** préservé

### Quiz de Recommandation Personnalisée
- **4 questions interactives** :
  1. Type d'expérience recherchée
  2. Période préférée
  3. Environnement favori
  4. Activité idéale
- **Analyse IA** des réponses avec Mistral AI
- **Recommandation personnalisée** avec explication détaillée
- **Résultat complet** : destination, prix, durée, points forts
- **Navigation fluide** avec progression visuelle

### Formulaire de Réservation
- **Formulaire complet** avec validation
- **Sélection** destination + dates + nombre de voyageurs
- **Calcul automatique** du prix total
- **Confirmation immédiate** avec numéro de réservation
- **Sidebar informative** avec conditions et contact
- **Backend Flask** pour traiter les réservations

### Animations & UX
- **Fade-in progressif** des sections au scroll (AOS)
- **Animation du titre** en hero (apparition progressive)
- **Hover effects** sur les cards et boutons
- **Transitions douces** entre les pages (Framer Motion)
- **Micro-interactions** sur tous les éléments cliquables
- **Animations fluides** : durée 0.6-0.8s, easing natural
- **Indicateur de scroll** animé sur la page d'accueil

### Responsive Design
- **Mobile-first** approach
- **Navigation hamburger** sur mobile
- **Grids adaptatives** pour tous les écrans
- **Touch-friendly** pour tablettes et smartphones
- **Optimisation** des images et performances

---

## Technologies Utilisées

### Frontend
- **React 18** - Framework JavaScript
- **Vite** - Build tool moderne et rapide
- **React Router** - Navigation SPA
- **Framer Motion** - Animations avancées
- **AOS (Animate On Scroll)** - Animations au scroll
- **Axios** - Requêtes HTTP
- **React Icons** - Icônes

### Backend
- **Flask 3.0.0** - Framework Python
- **Flask-CORS 4.0.0** - Gestion CORS
- **Mistral AI 1.0.0** - Modèle LLM (mistral-small-latest)
- **Python-dotenv 1.0.0** - Variables d'environnement
- **Gunicorn 21.2.0** - Serveur WSGI pour production

### Design
- **CSS Custom** avec variables CSS
- **Google Fonts** : Playfair Display (titres) + Poppins (texte)
- **Thème sombre** élégant avec accents dorés
- **Animations CSS** personnalisées

---

## Outils IA Utilisés

### Mistral AI
- **Modèle** : `mistral-small-latest` (gratuit)
- **Version SDK** : 1.0.0
- **Usage** :
  - Chatbot conversationnel pour conseils voyage
  - Génération de recommandations personnalisées basées sur le quiz
  - Réponses contextuelles sur les destinations
- **API** : API Mistral officielle via SDK Python
- **Méthode** : `mistral_client.chat.complete()` avec historique de conversation

### Transparence IA
- Toutes les interactions IA sont clairement identifiées
- L'utilisateur sait quand il interagit avec l'IA
- Les prompts système définissent une personnalité cohérente
- Fallback en cas d'indisponibilité de l'API

---

## Installation Complète

### Prérequis
- **Python 3.8+** installé sur votre système
- **Node.js 16+** et **npm** installés
- **Clé API Mistral** gratuite (inscription sur [mistral.ai](https://mistral.ai))
- **Terminal/Console** avec accès bash (Linux/Mac) ou PowerShell (Windows)

---

### Installation Étape par Étape

#### 1- Naviguer vers le projet
```bash
cd /home/jes/Bureau/webapp_messanh_yaovi_KODJO_M2
```

#### 2- Installation du Backend Python

```bash
# Aller dans le dossier backend
cd backend

# Créer l'environnement virtuel Python
python3 -m venv venv

# Installer toutes les dépendances Python dans le venv
./venv/bin/pip install -r requirements.txt

# Note : Le venv peut utiliser le Python système (miniconda3)
# C'est normal si vous voyez des symlinks
```

**Configuration de l'API Mistral :**
```bash
# Créer le fichier .env depuis le template
cp .env.example .env

# Éditer le fichier .env avec votre éditeur préféré
nano .env   # ou vi .env, ou code .env, etc.

# Ajouter votre clé API Mistral :
# MISTRAL_API_KEY=your_mistral_api_key_here
# FLASK_ENV=development
# FLASK_DEBUG=True
```

#### 3- Installation du Frontend React

```bash
# Retourner à la racine puis aller dans frontend
cd ../frontend

# Installer toutes les dépendances npm
npm install

# Attendre la fin de l'installation (peut prendre 1-2 minutes)
```

#### 4- Vérification de l'installation

```bash
# Vérifier que venv est créé
ls ../backend/venv

# Vérifier que node_modules est créé
ls node_modules

# Tout est prêt ! 
```

---

## Démarrage de l'Application

### Méthode Rapide (2 Terminaux)

**Terminal 1 - Lancer le Backend Flask :**
```bash
cd /home/jes/Bureau/webapp_messanh_yaovi_KODJO_M2/backend

# Utiliser directement le python du venv
./venv/bin/python app.py

# Vous devriez voir :
# * Serving Flask app 'app'
# * Debug mode: on
# * Running on http://127.0.0.1:5000
```

**Terminal 2 - Lancer le Frontend React :**
```bash
cd /home/jes/Bureau/webapp_messanh_yaovi_KODJO_M2/frontend
npm run dev                        # Lancer le serveur Vite

# Vous devriez voir :
# VITE v5.4.21  ready in XXX ms
# ➜  Local:   http://localhost:3000/
# ➜  Network: use --host to expose

# Note : Si le port 3000 est occupé, Vite utilisera automatiquement 3001
```

### Accéder à l'Application

Ouvrez votre navigateur et allez à : **http://localhost:3000** (ou **http://localhost:3001** si le port 3000 est occupé)

L'application devrait se charger avec :
- Page d'accueil avec animations
- Navigation fonctionnelle
- Chatbot IA en bas à droite (si API configurée)
- Backend Flask accessible sur http://127.0.0.1:5000

---

## Configuration de l'API Mistral AI

### Obtenir votre Clé API Gratuite

1. **Créer un compte** sur [mistral.ai](https://mistral.ai)
2. **Se connecter** à votre compte
3. **Aller dans** : Dashboard → API Keys
4. **Cliquer** sur "Create new key"
5. **Copier** la clé générée (elle commence par `mk-...`)
6. **Coller** dans `backend/.env` :

```env
MISTRAL_API_KEY=mk-xxxxxxxxxxxxxxxxxxxxxxxxxx
FLASK_ENV=development
FLASK_DEBUG=True
```

### Vérification de la Configuration

Pour tester que l'API fonctionne :

```bash
cd backend
./venv/bin/python -c "
from mistralai import Mistral
import os
from dotenv import load_dotenv

load_dotenv()
api_key = os.getenv('MISTRAL_API_KEY')
print(f'API Key configurée: {api_key[:10]}...' if api_key else 'API Key manquante!')
client = Mistral(api_key=api_key) if api_key else None
print('Client Mistral créé avec succès!' if client else 'Erreur: API Key manquante')
"
```

Si tout fonctionne, vous devriez voir : 
```
API Key configurée: mk-xxxxxxx...
Client Mistral créé avec succès!
```

---

## Commandes Utiles

### Backend (Flask)
```bash
cd backend

# Lancer le serveur en développement
./venv/bin/python app.py

# Lancer en mode production avec Gunicorn
./venv/bin/gunicorn app:app --bind 0.0.0.0:5000

# Vérifier les packages installés
./venv/bin/pip list

# Réinstaller les dépendances si nécessaire
./venv/bin/pip install -r requirements.txt --force-reinstall
```

### Frontend (React + Vite)
```bash
cd frontend

# Mode développement (hot reload)
npm run dev

# Build pour production
npm run build

# Prévisualiser le build
npm run preview

# Linter le code
npm run lint
```

---

## Dépannage (Troubleshooting)

### Problème : Le backend ne démarre pas
```bash
cd backend

# Vérifier que le venv existe
ls -la venv/

# Réinstaller les dépendances dans le venv
./venv/bin/pip install -r requirements.txt --force-reinstall

# Vérifier la version de mistralai
./venv/bin/pip show mistralai

# Lancer avec logs détaillés
./venv/bin/python app.py

# Si erreur pydantic, vérifier les versions :
./venv/bin/pip list | grep pydantic
```

### Problème : Le frontend ne démarre pas
```bash
# Supprimer node_modules et réinstaller
rm -rf node_modules package-lock.json
npm install

# Vider le cache Vite
rm -rf .vite
npm run dev
```

### Problème : Le chatbot ne fonctionne pas
```bash
# Vérifier que l'API Mistral est configurée
cd backend
cat .env | grep MISTRAL_API_KEY

# Tester la connexion à l'API
curl -X POST http://localhost:5000/api/chat \
  -H "Content-Type: application/json" \
  -d '{"message":"Bonjour","history":[]}'
```

### Problème : Erreur CORS
- Vérifier que Flask-CORS est installé : `pip list | grep Flask-CORS`
- Relancer les deux serveurs
- Vider le cache du navigateur (Ctrl+Shift+R)

### Problème : Port déjà utilisé
```bash
# Pour le backend - Libérer le port 5000
lsof -ti:5000 | xargs kill -9 2>/dev/null || true

# Ou changer le port du backend (app.py, ligne finale)
app.run(debug=True, port=5001)  # Changer 5000 → 5001

# Pour le frontend - Vite choisit automatiquement 3001 si 3000 est occupé
# Ou forcer dans vite.config.js :
server: { port: 3001 }  # Changer 3000 → 3001
```

---

## Accès depuis Mobile/Tablette

Pour tester sur mobile dans le même réseau local :

```bash
# Obtenir votre IP locale
hostname -I   # Linux
ipconfig      # Windows

# Exemple : 192.168.1.42

# Modifier vite.config.js :
server: {
  host: '0.0.0.0',
  port: 3000
}

# Relancer le frontend
npm run dev

# Accéder depuis mobile :
# http://192.168.1.42:3000
```

---

---

## Démonstration & Guide d'Utilisation

### Captures d'Écran

#### Page d'Accueil
![Hero Section](docs/screenshots/home-hero.png)
- Hero section avec animations de titres progressives
- Boutons CTA vers destinations et quiz
- Scroll indicator animé

![Features](docs/screenshots/home-features.png)
- Section des avantages avec icônes
- Cards avec hover effects
- Design épuré et professionnel

#### Galerie des Destinations
![Destinations](docs/screenshots/destinations.png)
- 3 cards interactives (Paris, Crétacé, Florence)
- Informations prix et durée
- Hover effects avec zoom image

#### Chatbot IA
![Chatbot Widget](docs/screenshots/chatbot-widget.png)
- Widget flottant en bas à droite
- Interface cohérente avec le thème
- Animation d'ouverture fluide

![Chatbot Conversation](docs/screenshots/chatbot-conversation.png)
- Conversation avec l'IA Mistral
- Questions rapides pré-définies
- Réponses personnalisées et contextuelles

#### Quiz de Recommandation
![Quiz Questions](docs/screenshots/quiz-questions.png)
- 4 questions avec options illustrées
- Barre de progression
- Navigation fluide

![Quiz Résultat](docs/screenshots/quiz-result.png)
- Recommandation IA personnalisée
- Détails de la destination recommandée
- Bouton réservation directe

#### Formulaire de Réservation
![Booking Form](docs/screenshots/booking-form.png)
- Formulaire complet avec validation
- Calcul automatique du prix
- Sidebar informative

![Booking Success](docs/screenshots/booking-success.png)
- Confirmation avec numéro de réservation
- Récapitulatif de la réservation
- Message de confirmation

---

### Démonstration Vidéo

**Créer votre vidéo de démonstration :**

```bash
# Outils recommandés pour enregistrer :
# - OBS Studio (gratuit, multi-plateforme)
# - QuickTime Player (Mac)
# - Windows Game Bar (Windows)

# Structure suggérée (3-5 minutes) :
1. Introduction (30s)
   - Présentation du projet
   - Technologies utilisées

2. Navigation (1min)
   - Page d'accueil avec animations
   - Navigation vers les destinations
   - Responsive sur mobile (DevTools)

3. Chatbot IA (1min)
   - Ouvrir le chatbot
   - Poser 2-3 questions
   - Montrer les réponses intelligentes

4. Quiz Personnalisé (1min)
   - Répondre aux 4 questions
   - Voir la recommandation IA
   - Explication du choix

5. Réservation (1min)
   - Remplir le formulaire
   - Soumettre et voir la confirmation

6. Conclusion (30s)
   - Récapitulatif des features
   - Stack technique
```

**Hébergement vidéo suggéré :**
- YouTube (privé ou public)
- Loom (pour démonstrations courtes)
- Google Drive (partage limité)

---

### Scénarios de Test

#### Test 1 : Navigation Complète
```
1. Ouvrir http://localhost:3000
2. Scroller sur la page d'accueil
   - Vérifier les animations au scroll
3. Cliquer sur "Découvrir les destinations"
   - Page destinations charge correctement
4. Cliquer sur "Réserver" sur une card
   - Redirection vers booking avec destination pré-sélectionnée
```

#### Test 2 : Chatbot IA
```
1. Cliquer sur l'icône de chat en bas à droite
   - Widget s'ouvre avec animation
2. Cliquer sur "Quelle destination pour l'art ?"
   - Message envoyé et réponse IA reçue
3. Taper : "Je veux voir des dinosaures"
   - L'IA recommande le Crétacé
4. Taper : "C'est combien ?"
   - L'IA donne le prix (15 000€)
```

#### Test 3 : Quiz Personnalisé
```
1. Aller sur la page Quiz
2. Question 1 : Sélectionner "Culturelle et artistique"
   - Option se met en surbrillance dorée
3. Cliquer sur "Suivant"
   - Question 2 apparaît avec transition
4. Compléter les 4 questions
5. Cliquer sur "Voir le résultat"
   - Chargement puis recommandation affichée
6. Vérifier que la destination correspond aux réponses
   - Cohérence de la recommandation IA
```

#### Test 4 : Réservation
```
1. Aller sur la page Réservation
2. Sélectionner "Florence 1504"
   - Prix s'affiche : 12 000€
3. Remplir : Jean Dupont, jean@test.com, +33612345678
4. Sélectionner date : demain
5. Nombre de voyageurs : 2
   - Prix total : 24 000€ (calcul automatique)
6. Cliquer sur "Confirmer la réservation"
   - Page de confirmation avec numéro de réservation
```

#### Test 5 : Responsive Mobile
```
1. Ouvrir DevTools (F12)
2. Activer le mode responsive (Ctrl+Shift+M)
3. Tester iPhone 12 (390x844)
   ✓ Menu hamburger fonctionne
   ✓ Cards empilées verticalement
   ✓ Chatbot prend toute la largeur
4. Tester iPad (768x1024)
   ✓ Grids s'adaptent (2 colonnes)
5. Tester en mode paysage
   ✓ Layout reste cohérent
```

---

### 📊 Checklist de Démonstration

Avant de présenter votre projet, vérifiez :

**Fonctionnel :**
- [ ] Backend démarre sans erreur
- [ ] Frontend démarre sans erreur  
- [ ] API Mistral configurée et fonctionnelle
- [ ] Toutes les pages sont accessibles
- [ ] Navigation fonctionne correctement
- [ ] Chatbot répond aux questions
- [ ] Quiz génère des recommandations
- [ ] Formulaire soumet correctement

**Visuel :**
- [ ] Animations fluides (pas de lag)
- [ ] Images chargent correctement
- [ ] Thème cohérent sur toutes les pages
- [ ] Responsive fonctionne
- [ ] Pas d'erreurs console (F12)

**Contenu :**
- [ ] Textes sans fautes
- [ ] Prix cohérents (8500, 15000, 12000€)
- [ ] Informations destinations complètes
- [ ] README.md à jour

**Performance :**
- [ ] Temps de chargement < 3s
- [ ] Animations à 60fps
- [ ] Pas de warning dans la console
- [ ] API répond en < 2s

---

### Points à Mettre en Avant

Lors de votre présentation, insistez sur :

1. **Architecture Moderne**
   - Séparation backend/frontend
   - API RESTful bien structurée
   - Environnement virtuel Python

2. **Intégration IA Réussie**
   - Chatbot conversationnel fonctionnel
   - Recommandations personnalisées
   - Prompt engineering efficace

3. **Expérience Utilisateur**
   - Animations élégantes et fluides
   - Interface intuitive
   - Design responsive

4. **Qualité du Code**
   - Code organisé et commenté
   - Composants réutilisables (React)
   - Gestion d'état propre

5. **Documentation Complète**
   - README détaillé
   - Instructions d'installation claires
   - Exemples de tests

---

## Structure du Projet

```
webapp_messanh_yaovi_KODJO_M2/
│
├── backend/                      # Backend Flask + IA
│   ├── venv/                     # Environnement virtuel Python
│   ├── app.py                    # API Flask principale
│   ├── requirements.txt          # Dépendances Python
│   ├── .env.example             # Template variables d'environnement
│   └── .env                      # Variables d'environnement (à créer)
│
├── frontend/                     # Frontend React
│   ├── public/                   # Assets statiques
│   │   ├── images/              # Images des destinations
│   │   └── videos/              # Vidéos de fond
│   │
│   ├── src/
│   │   ├── components/          # Composants réutilisables
│   │   │   ├── Header.jsx
│   │   │   ├── Footer.jsx
│   │   │   ├── ChatWidget.jsx   # Chatbot IA
│   │   │   └── DestinationCard.jsx
│   │   │
│   │   ├── pages/               # Pages de l'application
│   │   │   ├── HomePage.jsx     # Page d'accueil
│   │   │   ├── DestinationsPage.jsx
│   │   │   ├── QuizPage.jsx     # Quiz IA
│   │   │   └── BookingPage.jsx  # Réservation
│   │   │
│   │   ├── App.jsx              # Composant racine
│   │   ├── main.jsx             # Point d'entrée
│   │   └── index.css            # Styles globaux
│   │
│   ├── package.json             # Dépendances npm
│   ├── vite.config.js           # Configuration Vite
│   └── index.html               # HTML principal
│
└── README.md                     # Cette documentation
```

---

## Fonctionnalités Détaillées

### Chatbot IA
**Prompt Système** :
```
Tu es l'assistant virtuel de TimeTravel Agency, une agence de voyage temporel de luxe.
Ton rôle : conseiller les clients sur les meilleures destinations temporelles.
Ton ton : Professionnel mais chaleureux, passionné d'histoire, toujours enthousiaste.
```

**Endpoints** :
- `POST /api/chat` - Envoie message et reçoit réponse IA
- Gère l'historique de conversation
- Intégration Mistral AI 1.0.0 avec `mistral_client.chat.complete()`
- Modèle : `mistral-small-latest`
- Format messages : dictionnaires Python standard (role + content)

### Quiz Personnalisé
**Analyse IA** :
- Collecte 4 réponses utilisateur
- Envoie au backend Flask
- Mistral AI analyse les préférences
- Recommande la destination la plus adaptée
- Génère une explication personnalisée

**Endpoint** :
- `POST /api/quiz/recommend` - Analyse et recommandation

### Système de Réservation
- Validation côté client et serveur
- Génération d'ID unique
- Calcul automatique du prix total
- Confirmation immédiate
- Email de confirmation (simulé)

**Endpoint** :
- `POST /api/booking` - Crée une réservation

---

## Design System

### Palette de Couleurs
- **Fond principal** : `#0a0a0a` (noir profond)
- **Fond secondaire** : `#1a1a1a` (gris très foncé)
- **Accent or** : `#d4af37` (or luxe)
- **Accent or clair** : `#f0d068`
- **Bronze** : `#cd7f32`
- **Texte** : `#ffffff` / `#b0b0b0` / `#666666`

### Typographie
- **Titres** : Playfair Display (serif, élégant)
- **Corps** : Poppins (sans-serif, moderne)

### Animations
- **Durée** : 0.6-0.8s
- **Easing** : ease-in-out, naturel
- **Types** :
  - Fade-in au scroll
  - Slide lateraux
  - Scale au hover
  - Float pour icônes

---

## Assets Requis

### Images à Placer
Placez vos images dans `frontend/public/images/` :
- `paris-1889.jpg` - Photo Belle Époque / Tour Eiffel
- `cretace.jpg` - Dinosaures / Paysage préhistorique
- `florence-1504.jpg` - Renaissance / Architecture florentine
- `hero-poster.jpg` - Image de fond hero (optionnel)

### Vidéos (Optionnel)
Placez dans `frontend/public/videos/` :
- `time-travel-bg.mp4` - Vidéo de fond hero

**Alternative** : Les images placeholder seront générées automatiquement.

---

## Tests & Validation

### Tester le Chatbot
1. Cliquer sur l'icône flottante en bas à droite
2. Essayer ces questions :
   - "Quelle destination pour l'art ?"
   - "Combien coûte le voyage à Paris ?"
   - "Le voyage temporel est-il sûr ?"
   - "Je veux voir des dinosaures"

### Tester le Quiz
1. Aller sur la page Quiz
2. Répondre aux 4 questions
3. Vérifier la recommandation personnalisée
4. Tester le bouton "Réserver ce voyage"

### Tester la Réservation
1. Remplir le formulaire complet
2. Vérifier le calcul du prix total
3. Soumettre et vérifier la confirmation
4. Tester avec différentes destinations

---

## Optimisations Implémentées

### Performance
- **Lazy loading** des images
- **Code splitting** avec Vite
- **Animations optimisées** avec Framer Motion
- **Debouncing** sur les inputs
- **Caching** des requêtes API

### SEO & Accessibilité
- **Meta tags** appropriés
- **Alt text** sur toutes les images
- **Labels** sur tous les inputs
- **ARIA labels** sur les boutons
- **Contrast ratio** respecté (WCAG AA)

### UX
- **Feedback visuel** sur toutes les actions
- **États de chargement** clairs
- **Messages d'erreur** explicites
- **Navigation intuitive**
- **Mobile-friendly**

---

## Compétences Démontrées

### Développement Web
- Architecture SPA moderne
- Intégration API RESTful
- State management React
- Routing client-side
- Responsive design

### Intelligence Artificielle
- Intégration LLM (Mistral AI)
- Prompt engineering
- Chatbot conversationnel
- Système de recommandation
- Génération de contenu personnalisé

### UX/UI Design
- Design system cohérent
- Animations fluides
- Micro-interactions
- Mobile-first
- Accessibilité

### DevOps
- Environnement virtuel Python
- Build tools modernes (Vite)
- Variables d'environnement
- API proxy configuration
- Documentation complète

---

## Crédits

### Développement
- **Auteur** : Messanh Yaovi KODJO
- **Formation** : Master 2
- **Encadrement** : Projet Web & IA

### Technologies & APIs
- **React** - Meta/Facebook
- **Flask** - Pallets Projects
- **Mistral AI** - mistral.ai
- **Framer Motion** - Framer
- **AOS** - Michał Sajnóg
- **React Icons** - React Icons

### Assets
- **Fonts** : Google Fonts
- **Images** : À fournir par l'utilisateur (destinations générées pendant Projet 1)
- **Icônes** : React Icons library

### Inspiration
- Design inspiré des sites de voyage de luxe
- UI moderne et épurée
- Thème temporel et futuriste

---

## Support & Contact

Pour toute question sur ce projet :
- **Email** : messanhyaovi.kodjo@ynov.com
- **Téléphone** : 07 49 82 05 62
- **Adresse** : 40 bd Jules Verne, 44300 Nantes
- **GitHub** : [Votre GitHub]
- **LinkedIn** : [Votre LinkedIn]

---

## Licence

Ce projet est réalisé dans un cadre éducatif (Master 2).  
© 2026 Messanh Yaovi KODJO - Tous droits réservés.

---

## Remerciements

Merci aux formateurs et à l'équipe pédagogique pour l'accompagnement sur ce projet ambitieux mêlant développement web moderne et intelligence artificielle.

---

**TimeTravel Agency - Voyagez à travers le temps avec luxe et sécurité !**
