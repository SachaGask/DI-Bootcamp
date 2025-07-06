// emoji-game/index.js
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const session = require('express-session');
const app = express();
const PORT = 3000;

const emojis = [
    { emoji: '😀', name: 'Smile' },
    { emoji: '🐶', name: 'Dog' },
    { emoji: '🌮', name: 'Taco' },
    { emoji: '🚀', name: 'Rocket' },
    { emoji: '🎸', name: 'Guitar' },
    { emoji: '🍕', name: 'Pizza' },
    { emoji: '👻', name: 'Ghost' },
    { emoji: '🦄', name: 'Unicorn' },
    { emoji: '🐱', name: 'Cat' },
    { emoji: '🍔', name: 'Burger' },
];

let leaderboard = [];

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(session({ secret: 'emoji-game', resave: false, saveUninitialized: true }));

function getRandomEmoji() {
    const correct = emojis[Math.floor(Math.random() * emojis.length)];
    let options = new Set([correct.name]);
    while (options.size < 4) {
        options.add(emojis[Math.floor(Math.random() * emojis.length)].name);
    }
    return { correct, options: shuffle([...options]) };
}

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

app.get('/', (req, res) => {
    if (!req.session.score) req.session.score = 0;
    const round = getRandomEmoji();
    req.session.correctAnswer = round.correct.name;

    const html = `
        <h1>Guess the Emoji!</h1>
        <h2>Your score: ${req.session.score}</h2>
        <form method="POST" action="/guess">
            <p style="font-size:3rem">${round.correct.emoji}</p>
            ${round.options.map(option => `
                <label><input type="radio" name="guess" value="${option}" required> ${option}</label><br>`).join('')}
            <button type="submit">Submit</button>
        </form>
        <br><a href="/leaderboard">View Leaderboard</a>
    `;

    res.send(html);
});

app.post('/guess', (req, res) => {
    const guess = req.body.guess;
    let message = '';

    if (guess === req.session.correctAnswer) {
        req.session.score++;
        message = '✅ Correct!';
    } else {
        message = `❌ Wrong! The correct answer was ${req.session.correctAnswer}`;
        leaderboard.push({ score: req.session.score });
        req.session.score = 0;
    }

    res.send(`
        <h1>${message}</h1>
        <a href="/">Play Again</a>
    `);
});

app.get('/leaderboard', (req, res) => {
    const top = leaderboard.sort((a, b) => b.score - a.score).slice(0, 5);
    res.send(`
        <h1>Leaderboard</h1>
        <ol>
            ${top.map(s => `<li>${s.score} points</li>`).join('')}
        </ol>
        <a href="/">Back to Game</a>
    `);
});

app.listen(PORT, () => console.log(`Game server running on http://localhost:${PORT}`));
