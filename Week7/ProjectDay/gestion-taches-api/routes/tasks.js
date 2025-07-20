const express = require('express');
const router = express.Router();

// Routes CRUD pour "tasks" définies ci-dessous...
// Exemple de route (nous ajouterons les autres implémentations plus tard) :

router.get('/', (req, res) => {
res.send("Liste de toutes les tâches");
});

// (Les autres routes GET/:id, POST, PUT, DELETE seront définies ici)
// Export du routeur
module.exports = router;