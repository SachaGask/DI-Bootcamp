const express = require('express');
const app = express();

const PORT = 3000; // Port d'écoute du serveur

// Middleware global pour parser le corps JSON des requêtes
app.use(express.json());

// Routes de l'API seront définies ici plus tard ...
// Démarrage du serveur

app.listen(PORT, () => {
console.log(`Serveur démarré et à l'écoute sur le port ${PORT}`);
});