const express = require('express');
const indexRouter = require('./routes/index');

const app = express();
const PORT = 3000;

// Middleware to parse JSON
app.use(express.json());

// Mount the router
app.use('/', indexRouter);

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
