import knex from "knex";
import { Pool } from 'pg';
import dotenv from 'dotenv';
dotenv.config();

const { DB_HOST, DB_NAME, DB_PASSWORD, DB_PORT, DB_USER, DATABASE_URL } = process.env;

const poolConfig = DATABASE_URL ? {
    connectionString: DATABASE_URL,
    ssl: process.env.NODE_ENV === 'production' ? { rejectUnauthorized: false } : false
} : {
    host: DB_HOST,
    port: DB_PORT || 5432,
    user: DB_USER,
    database: DB_NAME,
    password: DB_PASSWORD,
    ssl: process.env.NODE_ENV === 'production' ? { rejectUnauthorized: false } : false
};

const pool = new Pool(poolConfig);

// Configuration avec variables individuelles ou URL complète
const dbConfig = DATABASE_URL ? {
    client: 'pg',
    connection: DATABASE_URL,
    ssl: process.env.NODE_ENV === 'production' ? { rejectUnauthorized: false } : false
} : {
    client: 'pg',
    connection: {
        host: DB_HOST,
        port: DB_PORT || 5432,
        user: DB_USER,
        database: DB_NAME,
        password: DB_PASSWORD,
        ssl: process.env.NODE_ENV === 'production' ? { rejectUnauthorized: false } : false
    }
};

const db = knex(dbConfig);

const trx = await db.transaction()
try {
    // const [product1] = await db('products')
    // .insert({ name: 'iPad 1', price: 100 }, ['id', 'name', 'price'])
    // .transacting(trx)

    // const [product2] = await db('products')
    // .insert({ name: 'iPad 2', price: 150 }, ['id', 'name', 'price'])
    // .transacting(trx)

    console.log(product1, product2)
    await trx.commit();

} catch(e) {
    console.log('Transaction error:', e);
    await trx.rollback();
}

try {
    // Test de connexion
    const result = await db.raw('SELECT 1+1 AS result');
    console.log('Database connected successfully:', result.rows[0]);
    
    // Afficher tous les produits
    const rows = await db('products')
        .select('*')
        .limit(10);
    console.log('Products in database:', rows);
    
} catch(e) {
    console.error('Error connecting to the database:', e);
}

// Exemple d'utilisation de Pool pour des requêtes SQL brutes
try {
    const poolResult = await pool.query('SELECT * FROM products LIMIT 3');
    console.log('Pool query result:', poolResult.rows);
} catch (e) {
    console.error('Pool query error:', e);
}

export { db as default, pool };