// server.js
const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

// Simule une base de données en mémoire
let posts = [
  { id: 1, title: "Premier post", content: "Contenu du premier post" },
  { id: 2, title: "Deuxième post", content: "Contenu du deuxième post" },
];

// ROUTES CRUD

// GET /posts - liste tous les posts
app.get('/posts', (req, res) => {
  res.json(posts);
});

// GET /posts/:id - retourne un post par id
app.get('/posts/:id', (req, res) => {
  const post = posts.find(p => p.id === parseInt(req.params.id));
  if (!post) return res.status(404).json({ message: "Post non trouvé" });
  res.json(post);
});

// POST /posts - crée un nouveau post
app.post('/posts', (req, res) => {
  const { title, content } = req.body;
  if (!title || !content) return res.status(400).json({ message: "Title and content are required" });

  const newPost = {
    id: posts.length + 1,
    title,
    content
  };
  posts.push(newPost);
  res.status(201).json(newPost);
});

// PUT /posts/:id - met à jour un post existant
app.put('/posts/:id', (req, res) => {
  const post = posts.find(p => p.id === parseInt(req.params.id));
  if (!post) return res.status(404).json({ message: "Post non trouvé" });

  const { title, content } = req.body;
  post.title = title || post.title;
  post.content = content || post.content;

  res.json(post);
});

// DELETE /posts/:id - supprime un post
app.delete('/posts/:id', (req, res) => {
  const index = posts.findIndex(p => p.id === parseInt(req.params.id));
  if (index === -1) return res.status(404).json({ message: "Post non trouvé" });

  posts.splice(index, 1);
  res.json({ message: "Post supprimé avec succès" });
});

// ❌ Middleware pour les routes non trouvées
app.use((req, res, next) => {
  res.status(404).json({ message: "Route introuvable" });
});

// 🚨 Middleware de gestion d’erreurs internes
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: "Erreur serveur interne" });
});

// 🚀 Démarrer le serveur
app.listen(PORT, () => {
  console.log(`Serveur lancé sur http://localhost:${PORT}`);
});
