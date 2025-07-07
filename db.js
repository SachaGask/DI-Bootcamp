import knex from "knex";

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

try {
    //insert //
    const rows = await db('products')
    .update({name:'iPhone X', price: 1200}, ['id', 'name','price'])
    .where({name: 'iPhone 5'})
    //.insert({ name: 'iPhone', price: 1000 })
    //.returning(['id','name'])
    // .select('*')
    // .orderBy('name')
    // .from('products')
    // .where({id: 2})
    // .where({id: 10})
    // .del()

    console.log('Success:', rows);
}

catch(e) {
    console.error('Error connecting to the database:', e);
}