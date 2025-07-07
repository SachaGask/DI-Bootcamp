import express from 'express';
import bookRoutes from './routes/bookRoutes.js';
import Book from './models/book.js';
import { testConnection } from './config/db.js';

const app = express();
const PORT = 5000;

// Middleware pour parser le JSON
app.use(express.json());

// Middleware pour logger les requêtes
app.use((req, res, next) => {
    console.log(`${new Date().toISOString()} - ${req.method} ${req.url}`);
    next();
});

// Monter les routes
app.use('/api/books', bookRoutes);

// Route racine
app.get('/', (req, res) => {
    res.send('Bienvenue sur l\'API des livres! Utilisez /api/books pour accéder aux ressources.');
});

// Middleware pour gérer les routes non trouvées
app.use((req, res, next) => {
    res.status(404).json({ message: 'Route not found' });
});

// Middleware pour gérer les erreurs
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ 
        message: 'Server error', 
        error: process.env.NODE_ENV === 'production' ? {} : err.message 
    });
});

// Fonction pour initialiser l'application
const initializeApp = async () => {
    try {
        // Tester la connexion à la base de données
        const connected = await testConnection();
        
        if (connected) {
            // Initialiser la table books
            await Book.initTable();
            
            // Démarrer le serveur
            app.listen(PORT, () => {
                console.log(`Book API server running on http://localhost:${PORT}`);
            });
        } else {
            console.error('Failed to connect to the database. Server not started.');
            process.exit(1);
        }
    } catch (error) {
        console.error('Error initializing app:', error);
        process.exit(1);
    }
};

// Démarrer l'application
initializeApp();
