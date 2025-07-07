import express from 'express';
import { 
    getAllPosts, 
    getPostById, 
    createPost, 
    updatePost, 
    deletePost 
} from '../controllers/postController.js';

const router = express.Router();

// GET /posts - Récupérer tous les posts
router.get('/', getAllPosts);

// GET /posts/:id - Récupérer un post spécifique
router.get('/:id', getPostById);

// POST /posts - Créer un nouveau post
router.post('/', createPost);

// PUT /posts/:id - Mettre à jour un post existant
router.put('/:id', updatePost);

// DELETE /posts/:id - Supprimer un post
router.delete('/:id', deletePost);

export default router;
