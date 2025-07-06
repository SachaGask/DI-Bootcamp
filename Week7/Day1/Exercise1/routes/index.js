const express = require('express');
const router = express.Router();

// Homepage route
router.get('/', (req, res) => {
    res.send('<h1>Welcome to the Homepage!</h1>');
});

// About page route
router.get('/about', (req, res) => {
    res.send('<h1>About Us</h1><p>This is the about page of our simple Express application.</p>');
});

module.exports = router;
