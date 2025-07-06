// API //

// RESTful API
// Create - POST
// Read - GET
// Update - PUT/PATCH
// Delete - DELETE

// /users - GET - get all users/one user
// /users - POST - create a new user
// /users - PUT - update a user
// /users- - DELETE - delete a user

// app.get
// app.post
// app.put
// app.delete

const express = require('express');
const { users } = require('./models/data.js');

const app = express();

const PORT = 3001;

// Verif si le serveur tourne bien //
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

// Middleware - Function //
app.use('/', express.static(__dirname + '/public'));



app.get('/search', (req,res) => {
    const {name} = req.query;
    const filteredUsers = users.filter(item => {
        return item.name.toLowerCase().includes(name.toLowerCase())
    });

    res.json(filteredUsers);
});

// Read all users //
app.get('/users', (req, res) => {
  res.send(users);
});

// Read one specific user //
app.get('/users/:id', (req, res) => {
  const { id } = req.params;
  const user = users.find((item) => item.id == id);

  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }

  res.json(user);
});




