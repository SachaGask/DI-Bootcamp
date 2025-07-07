import Book from '../models/book.js';

// Contrôleurs pour les routes de livres
export const getAllBooks = async (req, res) => {
    try {
        const books = await Book.getAllBooks();
        res.status(200).json(books);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving books', error: error.message });
    }
};

export const getBookById = async (req, res) => {
    try {
        const id = parseInt(req.params.bookId);
        if (isNaN(id)) {
            return res.status(400).json({ message: 'Invalid ID format' });
        }
        
        const book = await Book.getBookById(id);
        
        if (!book) {
            return res.status(404).json({ message: 'Book not found' });
        }
        
        res.status(200).json(book);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving book', error: error.message });
    }
};

export const createBook = async (req, res) => {
    try {
        const { title, author, publishedYear } = req.body;
        
        if (!title || !author || !publishedYear) {
            return res.status(400).json({ message: 'Title, author and publishedYear are required' });
        }
        
        // Vérifier que publishedYear est un nombre
        if (isNaN(parseInt(publishedYear))) {
            return res.status(400).json({ message: 'PublishedYear must be a number' });
        }
        
        const bookData = {
            title,
            author,
            publishedYear: parseInt(publishedYear)
        };
        
        const newBook = await Book.createBook(bookData);
        res.status(201).json(newBook);
    } catch (error) {
        res.status(500).json({ message: 'Error creating book', error: error.message });
    }
};
