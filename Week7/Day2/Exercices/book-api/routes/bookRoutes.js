import express from 'express';
import { 
    getAllBooks, 
    getBookById, 
    createBook
} from '../controllers/bookController.js';

const router = express.Router();

// GET /api/books - Récupérer tous les livres
router.get('/', getAllBooks);

// GET /api/books/:bookId - Récupérer un livre spécifique
router.get('/:bookId', getBookById);

// POST /api/books - Créer un nouveau livre
router.post('/', createBook);

export default router;
