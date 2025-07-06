const express = require('express');
const router = express.Router();
const triviaQuestions = require('../models/quiz');

// GET /quiz - Démarrer le quiz et afficher la première question
router.get('/', (req, res) => {
    // Initialiser une nouvelle session de quiz
    req.session.currentQuestionIndex = 0;
    req.session.score = 0;
    req.session.totalQuestions = triviaQuestions.length;

    const currentQuestion = triviaQuestions[req.session.currentQuestionIndex];
    
    res.send(`
        <h1>Trivia Quiz</h1>
        <p>Question ${req.session.currentQuestionIndex + 1} / ${req.session.totalQuestions}</p>
        <h2>${currentQuestion.question}</h2>
        <form action="/quiz" method="POST">
            <input type="text" name="answer" placeholder="Votre réponse" required>
            <button type="submit">Soumettre</button>
        </form>
    `);
});

// POST /quiz - Soumettre une réponse et passer à la question suivante
router.post('/', (req, res) => {
    const userAnswer = req.body.answer.trim().toLowerCase();
    const currentQuestion = triviaQuestions[req.session.currentQuestionIndex];
    const correctAnswer = currentQuestion.answer.toLowerCase();
    let feedback = '';
    
    // Vérifier si la réponse est correcte
    if (userAnswer === correctAnswer) {
        req.session.score += 1;
        feedback = '<div style="color: green">Correct!</div>';
    } else {
        feedback = `<div style="color: red">Incorrect! La bonne réponse était: ${currentQuestion.answer}</div>`;
    }
    
    // Passer à la question suivante
    req.session.currentQuestionIndex += 1;
    
    // Vérifier si c'est la fin du quiz
    if (req.session.currentQuestionIndex >= triviaQuestions.length) {
        res.redirect('/quiz/score');
        return;
    }
    
    // Afficher la question suivante
    const nextQuestion = triviaQuestions[req.session.currentQuestionIndex];
    
    res.send(`
        <h1>Trivia Quiz</h1>
        ${feedback}
        <p>Question ${req.session.currentQuestionIndex + 1} / ${req.session.totalQuestions}</p>
        <h2>${nextQuestion.question}</h2>
        <form action="/quiz" method="POST">
            <input type="text" name="answer" placeholder="Votre réponse" required>
            <button type="submit">Soumettre</button>
        </form>
    `);
});

// GET /quiz/score - Afficher le score final
router.get('/score', (req, res) => {
    const score = req.session.score || 0;
    const totalQuestions = req.session.totalQuestions || triviaQuestions.length;
    const percentage = Math.round((score / totalQuestions) * 100);
    
    res.send(`
        <h1>Quiz terminé !</h1>
        <h2>Votre score: ${score}/${totalQuestions} (${percentage}%)</h2>
        <p>Merci d'avoir participé au quiz!</p>
        <a href="/quiz">Recommencer le quiz</a>
    `);
});

module.exports = router;
