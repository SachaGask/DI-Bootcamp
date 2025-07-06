# Trivia Quiz Game avec Express.js

## Description
Une application de quiz trivia simple construite avec Express.js. Cette application permet aux utilisateurs de répondre à une série de questions et de voir leur score final.

## Fonctionnalités
- Questions de quiz trivia préchargées
- Suivi des réponses et du score de l'utilisateur
- Feedback immédiat sur les réponses
- Page de score final

## Installation
1. Cloner le projet
2. Installer les dépendances: `npm install`
3. Démarrer le serveur: `npm start`

## Routes
- `GET /quiz`: Commencer le quiz
- `POST /quiz`: Soumettre une réponse et voir la question suivante
- `GET /quiz/score`: Voir le score final

## Technologies utilisées
- Express.js
- express-session pour la gestion des sessions
