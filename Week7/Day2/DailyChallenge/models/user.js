import { db } from '../config/db.js';
import bcrypt from 'bcrypt';

// Modèle pour les utilisateurs et les mots de passe
class User {
    // Initialiser les tables users et hashpwd si elles n'existent pas
    static async initTables() {
        const usersTableExists = await db.schema.hasTable('users');
        const hashpwdTableExists = await db.schema.hasTable('hashpwd');
        
        if (!usersTableExists) {
            console.log('Creating users table...');
            await db.schema.createTable('users', (table) => {
                table.increments('id').primary();
                table.string('email').notNullable().unique();
                table.string('username').notNullable().unique();
                table.string('first_name').notNullable();
                table.string('last_name').notNullable();
                table.timestamp('created_at').defaultTo(db.fn.now());
                table.timestamp('updated_at').defaultTo(db.fn.now());
            });
            console.log('Users table created successfully');
        } else {
            console.log('Users table already exists');
        }
        
        if (!hashpwdTableExists) {
            console.log('Creating hashpwd table...');
            await db.schema.createTable('hashpwd', (table) => {
                table.increments('id').primary();
                table.string('username').notNullable().unique();
                table.string('password').notNullable();
                table.timestamp('created_at').defaultTo(db.fn.now());
                table.timestamp('updated_at').defaultTo(db.fn.now());
                
                // Foreign key constraint to users table
                table.foreign('username').references('username').inTable('users');
            });
            console.log('Hashpwd table created successfully');
        } else {
            console.log('Hashpwd table already exists');
        }
    }
    
    // Récupérer tous les utilisateurs
    static async getAllUsers() {
        try {
            return await db('users').select('id', 'email', 'username', 'first_name', 'last_name', 'created_at', 'updated_at');
        } catch (error) {
            console.error('Error getting all users:', error);
            throw error;
        }
    }
    
    // Récupérer un utilisateur par ID
    static async getUserById(id) {
        try {
            const user = await db('users')
                .select('id', 'email', 'username', 'first_name', 'last_name', 'created_at', 'updated_at')
                .where({ id })
                .first();
            return user;
        } catch (error) {
            console.error(`Error getting user with id ${id}:`, error);
            throw error;
        }
    }
    
    // Récupérer un utilisateur par username
    static async getUserByUsername(username) {
        try {
            const user = await db('users')
                .select('id', 'email', 'username', 'first_name', 'last_name')
                .where({ username })
                .first();
            return user;
        } catch (error) {
            console.error(`Error getting user with username ${username}:`, error);
            throw error;
        }
    }
    
    // Vérifier si un utilisateur existe déjà
    static async checkUserExists(email, username) {
        try {
            const user = await db('users')
                .where({ email })
                .orWhere({ username })
                .first();
            return !!user;
        } catch (error) {
            console.error('Error checking if user exists:', error);
            throw error;
        }
    }
    
    // Inscrire un nouvel utilisateur (avec transaction)
    static async registerUser(userData, password) {
        const { email, username, first_name, last_name } = userData;
        
        // Vérifier si l'utilisateur existe déjà
        const userExists = await User.checkUserExists(email, username);
        if (userExists) {
            throw new Error('User with this email or username already exists');
        }
        
        // Hasher le mot de passe
        const hashedPassword = await bcrypt.hash(password, 10);
        
        try {
            // Utiliser une transaction pour garantir l'intégrité des données
            return await db.transaction(async (trx) => {
                // Insérer les informations utilisateur
                const [userId] = await trx('users').insert({
                    email,
                    username,
                    first_name,
                    last_name
                }).returning('id');
                
                // Insérer le mot de passe hashé
                await trx('hashpwd').insert({
                    username,
                    password: hashedPassword
                });
                
                // Récupérer l'utilisateur créé
                return await trx('users')
                    .select('id', 'email', 'username', 'first_name', 'last_name')
                    .where({ id: userId.id })
                    .first();
            });
        } catch (error) {
            console.error('Error registering user:', error);
            throw error;
        }
    }
    
    // Vérifier les identifiants pour la connexion
    static async verifyLogin(username, password) {
        try {
            // Récupérer les informations de mot de passe pour le username
            const passwordInfo = await db('hashpwd')
                .where({ username })
                .first();
            
            if (!passwordInfo) {
                return null; // Utilisateur non trouvé
            }
            
            // Comparer le mot de passe fourni avec le hash stocké
            const isValid = await bcrypt.compare(password, passwordInfo.password);
            
            if (!isValid) {
                return null; // Mot de passe incorrect
            }
            
            // Si tout est bon, récupérer les informations de l'utilisateur
            return await User.getUserByUsername(username);
        } catch (error) {
            console.error('Error verifying login:', error);
            throw error;
        }
    }
    
    // Mettre à jour les informations d'un utilisateur
    static async updateUser(id, userData) {
        const { email, username, first_name, last_name } = userData;
        const updateData = {};
        
        // Vérifier et préparer les données à mettre à jour
        if (email) updateData.email = email;
        if (username) updateData.username = username;
        if (first_name) updateData.first_name = first_name;
        if (last_name) updateData.last_name = last_name;
        updateData.updated_at = db.fn.now();
        
        try {
            // Mettre à jour l'utilisateur
            const [updatedUser] = await db('users')
                .where({ id })
                .update(updateData)
                .returning(['id', 'email', 'username', 'first_name', 'last_name', 'created_at', 'updated_at']);
            
            return updatedUser;
        } catch (error) {
            console.error(`Error updating user with id ${id}:`, error);
            throw error;
        }
    }
}

export default User;
