# User Management API

API de gestion d'utilisateurs avec inscription et connexion utilisant Express.js, Bcrypt, Knex et PostgreSQL.

## Fonctionnalités

- Inscription des utilisateurs avec hachage des mots de passe
- Authentification des utilisateurs
- Récupération de la liste des utilisateurs
- Récupération des détails d'un utilisateur
- Mise à jour des informations d'un utilisateur

## Structure du projet

```
server/
  |_ config/        # Configuration de la base de données
  |_ controllers/   # Contrôleurs pour les routes
  |_ models/        # Modèles de données
  |_ routes/        # Routes Express
  |_ server.js      # Point d'entrée de l'application
```

## Routes API

- `POST /register` : Inscription d'un nouvel utilisateur
- `POST /login` : Connexion d'un utilisateur
- `GET /users` : Récupération de tous les utilisateurs
- `GET /users/:id` : Récupération d'un utilisateur par ID
- `PUT /users/:id` : Mise à jour d'un utilisateur

## Structure de la base de données

- Table `users` : id, email, username, first_name, last_name
- Table `hashpwd` : id, username, password (hashed)

## Installation et démarrage

1. Installer les dépendances : `npm install`
2. Démarrer le serveur : `npm start`
3. Pour le développement : `npm run dev`

## Tester l'API

Utiliser Postman ou curl pour tester les endpoints de l'API :

### Exemple de requête d'inscription :
```json
POST /register
{
  "email": "john@example.com",
  "username": "johndoe",
  "first_name": "John",
  "last_name": "Doe",
  "password": "secret123"
}
```

### Exemple de requête de connexion :
```json
POST /login
{
  "username": "johndoe",
  "password": "secret123"
}
```
