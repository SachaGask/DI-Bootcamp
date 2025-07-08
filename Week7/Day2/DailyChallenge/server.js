import express from 'express';
import userRoutes from './routes/userRoutes.js';
import User from './models/user.js';
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
app.use('/', userRoutes);

// Route racine
app.get('/', (req, res) => {
    res.send(`
        <h1>User Management API</h1>
        <h2>Available Routes:</h2>
        <ul>
            <li>POST /register - Register a new user</li>
            <li>POST /login - Login a user</li>
            <li>GET /users - Get all users</li>
            <li>GET /users/:id - Get a user by ID</li>
            <li>PUT /users/:id - Update a user by ID</li>
        </ul>
    `);
});

// Middleware pour gérer les routes non trouvées
app.use((req, res, next) => {
    res.status(404).json({ 
        success: false,
        message: 'Route not found' 
    });
});

// Middleware pour gérer les erreurs
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ 
        success: false,
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
            // Initialiser les tables
            await User.initTables();
            
            // Démarrer le serveur
            app.listen(PORT, () => {
                console.log(`User Management API running on http://localhost:${PORT}`);
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
