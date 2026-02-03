# 🚀 Guide de Démarrage Rapide - TimeTravel Agency

## ⚡ Installation en 5 Minutes

### Étape 1 : Backend Python
```bash
cd backend
python3 -m venv venv
source venv/bin/activate
pip install -r requirements.txt
cp .env.example .env
# Éditez .env et ajoutez votre clé API Mistral
```

### Étape 2 : Frontend React
```bash
cd ../frontend
npm install
```

### Étape 3 : Obtenir Clé API Mistral
1. Allez sur https://mistral.ai
2. Créez un compte (gratuit)
3. Créez une clé API
4. Collez-la dans `backend/.env`

### Étape 4 : Lancer l'Application

**Terminal 1 :**
```bash
cd backend
source venv/bin/activate
python app.py
```

**Terminal 2 :**
```bash
cd frontend
npm run dev
```

**Navigateur :**
Ouvrez http://localhost:3000

---

## 🎯 Premiers Tests

### Test du Chatbot
1. Cliquer sur l'icône dorée en bas à droite
2. Essayer : "Je veux voir des dinosaures"
3. Essayer : "Combien coûte Paris ?"

### Test du Quiz
1. Aller sur la page "Quiz"
2. Répondre aux 4 questions
3. Voir la recommandation IA

### Test de Réservation
1. Aller sur "Réserver"
2. Remplir le formulaire
3. Voir la confirmation

---

## 🐛 Problèmes Courants

### Le backend ne démarre pas
```bash
# Vérifier que venv est activé
which python  # doit pointer vers venv/bin/python

# Réinstaller les dépendances
pip install -r requirements.txt
```

### Le chatbot ne répond pas
- Vérifier que la clé API Mistral est dans `backend/.env`
- Vérifier que le backend tourne sur http://localhost:5000
- Ouvrir la console (F12) pour voir les erreurs

### Port déjà utilisé
```bash
# Backend : changer le port dans app.py (dernière ligne)
app.run(debug=True, port=5001)

# Frontend : changer le port dans vite.config.js
server: { port: 3001 }
```

---

## 📚 Documentation Complète

Pour plus de détails, consultez le [README.md](../README.md) complet.

---

## ✅ Checklist Avant Démonstration

- [ ] Backend démarre sans erreur
- [ ] Frontend démarre sans erreur
- [ ] Clé API Mistral configurée
- [ ] Chatbot répond aux questions
- [ ] Quiz génère des recommandations
- [ ] Formulaire fonctionne
- [ ] Pas d'erreurs dans la console (F12)

---

**Bon courage ! 🕰️**
