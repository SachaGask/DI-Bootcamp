const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());

app.get('/api/hello', (req, res) => {
  res.send({ message: 'Hello From Express' });
});

app.post('/api/world', (req, res) => {
  console.log(req.body); // Affiche { post: '...' }
  res.send({ message: `I received your POST request. This is what you sent me: ${req.body.post}` });
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
