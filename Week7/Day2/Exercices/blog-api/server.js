import express from 'express';
import postRoutes from './routes/postRoutes.js';
import Post from './models/post.js';
import { testConnection } from './config/db.js';

const app = express();
const PORT = 3000;

// Middleware pour parser le JSON
app.use(express.json());

// Middleware pour logger les requêtes
app.use((req, res, next) => {
    console.log(`${new Date().toISOString()} - ${req.method} ${req.url}`);
    next();
});

// Monter les routes
app.use('/posts', postRoutes);

// Route racine
app.get('/', (req, res) => {
    res.send('Bienvenue sur l\'API du blog! Utilisez /posts pour accéder aux articles.');
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
            // Initialiser la table posts
            await Post.initTable();
            
            // Démarrer le serveur
            app.listen(PORT, () => {
                console.log(`Blog API server running on http://localhost:${PORT}`);
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
