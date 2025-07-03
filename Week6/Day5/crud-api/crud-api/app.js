// app.js
const express = require('express');
const app = express();
const PORT = 5000;

const { fetchPosts } = require('./data/dataService');

app.get('/api/posts', async (req, res) => {
  try {
    const posts = await fetchPosts();
    console.log("✅ Données récupérées avec succès !");
    res.json(posts);
  } catch (error) {
    res.status(500).json({ message: "Erreur lors de la récupération des données." });
  }
});

app.listen(PORT, () => {
  console.log(`🚀 CRUD API with Axios running at http://localhost:${PORT}`);
});
