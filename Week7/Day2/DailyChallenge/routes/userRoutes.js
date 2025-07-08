import express from 'express';
import { 
    registerUser,
    loginUser,
    getAllUsers,
    getUserById,
    updateUser
} from '../controllers/userController.js';

const router = express.Router();

// POST /register - Inscription d'un nouvel utilisateur
router.post('/register', registerUser);

// POST /login - Connexion d'un utilisateur
router.post('/login', loginUser);

// GET /users - Récupérer tous les utilisateurs
router.get('/users', getAllUsers);

// GET /users/:id - Récupérer un utilisateur par ID
router.get('/users/:id', getUserById);

// PUT /users/:id - Mettre à jour un utilisateur par ID
router.put('/users/:id', updateUser);

export default router;
