import { db } from '../config/db.js';

// Modèle pour les opérations CRUD sur la table posts
class Post {
    // Récupérer tous les posts
    static async getAllPosts() {
        try {
            return await db.select('*').from('posts').orderBy('id');
        } catch (error) {
            console.error('Error getting all posts:', error);
            throw error;
        }
    }

    // Récupérer un post par son ID
    static async getPostById(id) {
        try {
            const post = await db.select('*').from('posts').where({ id }).first();
            return post;
        } catch (error) {
            console.error(`Error getting post with id ${id}:`, error);
            throw error;
        }
    }

    // Créer un nouveau post
    static async createPost(postData) {
        try {
            const [newPost] = await db('posts').insert(postData).returning('*');
            return newPost;
        } catch (error) {
            console.error('Error creating post:', error);
            throw error;
        }
    }

    // Mettre à jour un post existant
    static async updatePost(id, postData) {
        try {
            const [updatedPost] = await db('posts').where({ id }).update(postData).returning('*');
            return updatedPost;
        } catch (error) {
            console.error(`Error updating post with id ${id}:`, error);
            throw error;
        }
    }

    // Supprimer un post
    static async deletePost(id) {
        try {
            const deletedRows = await db('posts').where({ id }).del();
            return deletedRows > 0;
        } catch (error) {
            console.error(`Error deleting post with id ${id}:`, error);
            throw error;
        }
    }

    // Créer la table posts si elle n'existe pas
    static async initTable() {
        const exists = await db.schema.hasTable('posts');
        
        if (!exists) {
            console.log('Creating posts table...');
            await db.schema.createTable('posts', (table) => {
                table.increments('id').primary();
                table.string('title').notNullable();
                table.text('content').notNullable();
                table.timestamp('created_at').defaultTo(db.fn.now());
            });
            console.log('Posts table created successfully');
            
            // Insérer quelques données de test
            await db('posts').insert([
                { title: 'Premier article de blog', content: 'Contenu du premier article...' },
                { title: 'Second article de blog', content: 'Contenu du second article...' }
            ]);
            console.log('Sample data inserted');
        } else {
            console.log('Posts table already exists');
        }
    }
}

export default Post;
