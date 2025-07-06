const express = require('express');
const session = require('express-session');
const quizRouter = require('./routes/quiz');

const app = express();
const PORT = 3001; // Différent du port de l'Exercise1

// Middleware to parse JSON
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Configurer session pour stocker les progrès du quiz
app.use(session({
    secret: 'trivia-quiz-secret',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false } // secure: true en production avec HTTPS
}));

// Mount the quiz router
app.use('/quiz', quizRouter);

// Route d'accueil
app.get('/', (req, res) => {
    res.send('<h1>Trivia Quiz Game</h1><p>Commencez le quiz <a href="/quiz">ici</a>!</p>');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Quiz server is running on http://localhost:${PORT}`);
});
