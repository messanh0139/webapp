"""
TimeTravel Agency Backend API
Gère le chatbot IA, les recommandations personnalisées et les réservations
"""
from flask import Flask, request, jsonify
from flask_cors import CORS
from mistralai import Mistral
import os
from dotenv import load_dotenv

load_dotenv()

app = Flask(__name__)
CORS(app)

# Configuration Mistral AI
MISTRAL_API_KEY = os.getenv('MISTRAL_API_KEY')
mistral_client = Mistral(api_key=MISTRAL_API_KEY) if MISTRAL_API_KEY else None

# Base de données des destinations
DESTINATIONS = {
    "paris_1889": {
        "name": "Paris 1889 - Belle Époque",
        "period": "XIXe siècle",
        "description": "Plongez dans l'effervescence de l'Exposition Universelle de 1889. Admirez l'inauguration de la Tour Eiffel, flânez dans les cafés parisiens et découvrez l'âge d'or de la culture française.",
        "highlights": [
            "Inauguration de la Tour Eiffel",
            "Exposition Universelle",
            "Cafés de la Belle Époque",
            "Spectacles du Moulin Rouge",
            "Architecture Haussmannienne"
        ],
        "price": 8500,
        "duration": "7 jours",
        "category": ["culturelle", "artistique", "raffinement", "urbaine"]
    },
    "cretace": {
        "name": "Crétacé -65M - Ère des Dinosaures",
        "period": "Préhistoire",
        "description": "Vivez l'aventure ultime en observant les dinosaures dans leur habitat naturel. Une immersion totale dans un monde sauvage et fascinant, juste avant la grande extinction.",
        "highlights": [
            "Observation des T-Rex et Tricératops",
            "Forêts préhistoriques luxuriantes",
            "Volcans actifs",
            "Faune et flore primitives",
            "Sécurité maximale garantie"
        ],
        "price": 15000,
        "duration": "5 jours",
        "category": ["aventure", "nature", "sauvage", "origines"]
    },
    "florence_1504": {
        "name": "Florence 1504 - Renaissance Italienne",
        "period": "Renaissance",
        "description": "Rencontrez les génies de la Renaissance. Assistez Michel-Ange travailler sur le David, explorez les ateliers d'art et imprégnez-vous de l'effervescence créative florentine.",
        "highlights": [
            "Michel-Ange au travail",
            "Ateliers de Léonard de Vinci",
            "Palais des Médicis",
            "Cathédrale Santa Maria del Fiore",
            "Marchés Renaissance"
        ],
        "price": 12000,
        "duration": "6 jours",
        "category": ["culturelle", "artistique", "architecture", "renaissance"]
    }
}

# Système de personnalité du chatbot
CHATBOT_SYSTEM_PROMPT = """Tu es l'assistant virtuel de TimeTravel Agency, une agence de voyage temporel de luxe.

Ton rôle : conseiller les clients sur les meilleures destinations temporelles.

Ton ton :
- Professionnel mais chaleureux
- Passionné d'histoire
- Toujours enthousiaste sans être trop familier
- Expertise en voyage temporel (fictif mais crédible)

Tu connais parfaitement :
- Paris 1889 (Belle Époque, Tour Eiffel, Exposition Universelle) - 8500€
- Crétacé -65M (dinosaures, nature préhistorique) - 15000€
- Florence 1504 (Renaissance, art, Michel-Ange) - 12000€

Tu peux :
- Suggérer des destinations selon les intérêts du client
- Répondre aux questions sur la sécurité, les prix, la durée
- Donner des conseils historiques
- Rassurer sur les aspects techniques du voyage temporel

Reste toujours dans ton rôle et maintiens l'immersion dans l'univers du voyage temporel."""


@app.route('/')
def home():
    return jsonify({
        "message": "TimeTravel Agency API",
        "version": "1.0.0",
        "endpoints": [
            "/api/destinations",
            "/api/chat",
            "/api/quiz/recommend",
            "/api/booking"
        ]
    })


@app.route('/api/destinations', methods=['GET'])
def get_destinations():
    """Retourne toutes les destinations disponibles"""
    return jsonify({
        "success": True,
        "destinations": DESTINATIONS
    })


@app.route('/api/chat', methods=['POST'])
def chat():
    """Endpoint pour le chatbot IA"""
    if not mistral_client:
        return jsonify({
            "success": False,
            "error": "API Mistral non configurée. Ajoutez votre clé API dans .env"
        }), 500
    
    try:
        data = request.json
        user_message = data.get('message', '')
        conversation_history = data.get('history', [])
        
        # Construire l'historique de conversation
        messages = [
            {"role": "system", "content": CHATBOT_SYSTEM_PROMPT}
        ]
        
        for msg in conversation_history:
            messages.append({
                "role": msg['role'],
                "content": msg['content']
            })
        
        messages.append({"role": "user", "content": user_message})
        
        # Appel à Mistral AI
        chat_response = mistral_client.chat.complete(
            model="mistral-small-latest",
            messages=messages
        )
        
        assistant_message = chat_response.choices[0].message.content
        
        return jsonify({
            "success": True,
            "response": assistant_message
        })
    
    except Exception as e:
        return jsonify({
            "success": False,
            "error": str(e)
        }), 500


@app.route('/api/quiz/recommend', methods=['POST'])
def quiz_recommend():
    """Génère une recommandation personnalisée basée sur les réponses au quiz"""
    if not mistral_client:
        return jsonify({
            "success": False,
            "error": "API Mistral non configurée"
        }), 500
    
    try:
        data = request.json
        answers = data.get('answers', {})
        
        # Créer un prompt personnalisé basé sur les réponses
        prompt = f"""Basé sur ces préférences d'un client de TimeTravel Agency :

Question 1 - Type d'expérience : {answers.get('q1', '')}
Question 2 - Période préférée : {answers.get('q2', '')}
Question 3 - Environnement : {answers.get('q3', '')}
Question 4 - Activité idéale : {answers.get('q4', '')}

Destinations disponibles :
1. Paris 1889 - Belle Époque (culturel, raffiné, urbain) - 8500€
2. Crétacé -65M - Dinosaures (aventure, nature, sauvage) - 15000€
3. Florence 1504 - Renaissance (art, architecture, culturel) - 12000€

Recommande LA destination la plus adaptée et explique pourquoi en 3-4 phrases enthousiastes et personnalisées.
Format : [NOM_DESTINATION] suivi de l'explication."""
        
        messages = [
            {"role": "system", "content": CHATBOT_SYSTEM_PROMPT},
            {"role": "user", "content": prompt}
        ]
        
        chat_response = mistral_client.chat.complete(
            model="mistral-small-latest",
            messages=messages
        )
        
        recommendation = chat_response.choices[0].message.content
        
        # Déterminer quelle destination a été recommandée
        recommended_destination = None
        if "Paris" in recommendation or "1889" in recommendation or "Belle Époque" in recommendation:
            recommended_destination = "paris_1889"
        elif "Crétacé" in recommendation or "Dinosaure" in recommendation or "65M" in recommendation:
            recommended_destination = "cretace"
        elif "Florence" in recommendation or "1504" in recommendation or "Renaissance" in recommendation:
            recommended_destination = "florence_1504"
        
        return jsonify({
            "success": True,
            "recommendation": recommendation,
            "destination_id": recommended_destination,
            "destination_details": DESTINATIONS.get(recommended_destination) if recommended_destination else None
        })
    
    except Exception as e:
        return jsonify({
            "success": False,
            "error": str(e)
        }), 500


@app.route('/api/booking', methods=['POST'])
def create_booking():
    """Crée une réservation"""
    try:
        data = request.json
        
        required_fields = ['destination', 'name', 'email', 'date', 'travelers']
        for field in required_fields:
            if field not in data:
                return jsonify({
                    "success": False,
                    "error": f"Champ requis manquant : {field}"
                }), 400
        
        destination_id = data['destination']
        if destination_id not in DESTINATIONS:
            return jsonify({
                "success": False,
                "error": "Destination invalide"
            }), 400
        
        # Simuler la création d'une réservation
        booking = {
            "booking_id": f"TT{hash(data['email']) % 100000:05d}",
            "destination": DESTINATIONS[destination_id]['name'],
            "name": data['name'],
            "email": data['email'],
            "date": data['date'],
            "travelers": data['travelers'],
            "total_price": DESTINATIONS[destination_id]['price'] * int(data['travelers']),
            "status": "confirmed"
        }
        
        return jsonify({
            "success": True,
            "booking": booking,
            "message": "Réservation confirmée ! Vous recevrez un email de confirmation."
        })
    
    except Exception as e:
        return jsonify({
            "success": False,
            "error": str(e)
        }), 500


if __name__ == '__main__':
    app.run(debug=True, port=5000)
