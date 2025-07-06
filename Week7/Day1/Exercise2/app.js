const express = require('express');
const todosRouter = require('./routes/todos');

const app = express();
const PORT = 3000;

// Middleware to parse JSON
app.use(express.json());

// Mount the todos router
app.use('/todos', todosRouter);

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
