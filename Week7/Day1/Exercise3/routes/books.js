const express = require('express');
const router = express.Router();

// Sample in-memory database for storing books
const books = [];
let nextId = 1;

// Get all books
router.get('/', (req, res) => {
    res.json(books);
});

// Add a new book
router.post('/', (req, res) => {
    const { title, author, publishedYear } = req.body;
    
    if (!title || !author || !publishedYear) {
        return res.status(400).json({ error: 'Title, author, and publishedYear are required' });
    }
    
    const newBook = {
        id: nextId++,
        title,
        author,
        publishedYear
    };
    
    books.push(newBook);
    res.status(201).json(newBook);
});

// Update a book by ID
router.put('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const { title, author, publishedYear } = req.body;
    
    const bookIndex = books.findIndex(book => book.id === id);
    if (bookIndex === -1) {
        return res.status(404).json({ error: 'Book not found' });
    }
    
    if (title !== undefined) books[bookIndex].title = title;
    if (author !== undefined) books[bookIndex].author = author;
    if (publishedYear !== undefined) books[bookIndex].publishedYear = publishedYear;
    
    res.json(books[bookIndex]);
});

// Delete a book by ID
router.delete('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const bookIndex = books.findIndex(book => book.id === id);
    
    if (bookIndex === -1) {
        return res.status(404).json({ error: 'Book not found' });
    }
    
    const deletedBook = books.splice(bookIndex, 1)[0];
    res.json(deletedBook);
});

module.exports = router;
