// 🌟 Exercise 1: blog-api/server.js
const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

let posts = [
  { id: 1, title: 'First Post', content: 'Hello World!' },
  { id: 2, title: 'Second Post', content: 'Another blog entry' }
];

app.get('/posts', (req, res) => res.json(posts));

app.get('/posts/:id', (req, res) => {
  const post = posts.find(p => p.id == req.params.id);
  post ? res.json(post) : res.status(404).send('Post not found');
});

app.post('/posts', (req, res) => {
  const newPost = { id: posts.length + 1, ...req.body };
  posts.push(newPost);
  res.status(201).json(newPost);
});

app.put('/posts/:id', (req, res) => {
  const post = posts.find(p => p.id == req.params.id);
  if (post) {
    Object.assign(post, req.body);
    res.json(post);
  } else res.status(404).send('Post not found');
});

app.delete('/posts/:id', (req, res) => {
  const index = posts.findIndex(p => p.id == req.params.id);
  if (index >= 0) {
    posts.splice(index, 1);
    res.sendStatus(204);
  } else res.status(404).send('Post not found');
});

app.use((req, res) => res.status(404).send('Route not found'));
app.listen(PORT, () => console.log(`Blog API running on port ${PORT}`));


// 🌟 Exercise 2: book-api/app.js
const express = require('express');
const app = express();
const PORT = 5000;

app.use(express.json());

let books = [
  { id: 1, title: 'Book A', author: 'Author A', publishedYear: 2000 },
  { id: 2, title: 'Book B', author: 'Author B', publishedYear: 2005 }
];

app.get('/api/books', (req, res) => res.json(books));

app.get('/api/books/:bookId', (req, res) => {
  const book = books.find(b => b.id == req.params.bookId);
  book ? res.status(200).json(book) : res.status(404).send('Book not found');
});

app.post('/api/books', (req, res) => {
  const newBook = { id: books.length + 1, ...req.body };
  books.push(newBook);
  res.status(201).json(newBook);
});

app.listen(PORT, () => console.log(`Book API running on port ${PORT}`));


// 🌟 Exercise 3: crud-api/app.js
const express = require('express');
const { fetchPosts } = require('./data/dataService');
const app = express();
const PORT = 5000;

app.get('/api/posts', async (req, res) => {
  try {
    const posts = await fetchPosts();
    console.log('Posts retrieved and sent');
    res.json(posts);
  } catch (err) {
    res.status(500).send('Error fetching posts');
  }
});

app.listen(PORT, () => console.log(`CRUD API running on port ${PORT}`));


// 🌟 Exercise 3: crud-api/data/dataService.js
const axios = require('axios');

async function fetchPosts() {
  const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
  return response.data;
}

module.exports = { fetchPosts };
