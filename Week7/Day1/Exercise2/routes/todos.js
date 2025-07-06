const express = require('express');
const router = express.Router();

// Sample in-memory database for storing to-do items
const todos = [];
let nextId = 1;

// Get all to-do items
router.get('/', (req, res) => {
    res.json(todos);
});

// Add a new to-do item
router.post('/', (req, res) => {
    const { text } = req.body;
    if (!text) {
        return res.status(400).json({ error: 'Text is required' });
    }
    
    const newTodo = {
        id: nextId++,
        text: text,
        completed: false
    };
    
    todos.push(newTodo);
    res.status(201).json(newTodo);
});

// Update a to-do item by ID
router.put('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const { text, completed } = req.body;
    
    const todoIndex = todos.findIndex(todo => todo.id === id);
    if (todoIndex === -1) {
        return res.status(404).json({ error: 'Todo not found' });
    }
    
    if (text !== undefined) todos[todoIndex].text = text;
    if (completed !== undefined) todos[todoIndex].completed = completed;
    
    res.json(todos[todoIndex]);
});

// Delete a to-do item by ID
router.delete('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const todoIndex = todos.findIndex(todo => todo.id === id);
    
    if (todoIndex === -1) {
        return res.status(404).json({ error: 'Todo not found' });
    }
    
    const deletedTodo = todos.splice(todoIndex, 1)[0];
    res.json(deletedTodo);
});

module.exports = router;
