import { db } from '../config/db.js';

// Modèle pour les opérations CRUD sur la table books
class Book {
    // Récupérer tous les livres
    static async getAllBooks() {
        try {
            return await db.select('*').from('books').orderBy('id');
        } catch (error) {
            console.error('Error getting all books:', error);
            throw error;
        }
    }

    // Récupérer un livre par son ID
    static async getBookById(id) {
        try {
            const book = await db.select('*').from('books').where({ id }).first();
            return book;
        } catch (error) {
            console.error(`Error getting book with id ${id}:`, error);
            throw error;
        }
    }

    // Créer un nouveau livre
    static async createBook(bookData) {
        try {
            const [newBook] = await db('books').insert(bookData).returning('*');
            return newBook;
        } catch (error) {
            console.error('Error creating book:', error);
            throw error;
        }
    }

    // Mettre à jour un livre existant
    static async updateBook(id, bookData) {
        try {
            const [updatedBook] = await db('books').where({ id }).update(bookData).returning('*');
            return updatedBook;
        } catch (error) {
            console.error(`Error updating book with id ${id}:`, error);
            throw error;
        }
    }

    // Supprimer un livre
    static async deleteBook(id) {
        try {
            const deletedRows = await db('books').where({ id }).del();
            return deletedRows > 0;
        } catch (error) {
            console.error(`Error deleting book with id ${id}:`, error);
            throw error;
        }
    }

    // Créer la table books si elle n'existe pas
    static async initTable() {
        const exists = await db.schema.hasTable('books');
        
        if (!exists) {
            console.log('Creating books table...');
            await db.schema.createTable('books', (table) => {
                table.increments('id').primary();
                table.string('title').notNullable();
                table.string('author').notNullable();
                table.integer('publishedYear').notNullable();
                table.timestamp('created_at').defaultTo(db.fn.now());
            });
            console.log('Books table created successfully');
            
            // Insérer quelques données de test
            await db('books').insert([
                { title: '1984', author: 'George Orwell', publishedYear: 1949 },
                { title: 'To Kill a Mockingbird', author: 'Harper Lee', publishedYear: 1960 },
                { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', publishedYear: 1925 }
            ]);
            console.log('Sample data inserted');
        } else {
            console.log('Books table already exists');
        }
    }
}

export default Book;
