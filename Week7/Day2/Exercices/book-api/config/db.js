import pg from 'pg';
import knex from 'knex';

const db = knex({
    client: 'pg',
    connection: {
        host: 'localhost',
        port: 5432,
        user: 'postgres',
        database: 'postgres',
        password: ''
    }
});

// Vérification de la connexion
const testConnection = async () => {
    try {
        const result = await db.raw('SELECT 1+1 AS result');
        console.log('Database connection successful');
        return true;
    } catch (error) {
        console.error('Database connection failed:', error);
        return false;
    }
};

export { db, testConnection };
