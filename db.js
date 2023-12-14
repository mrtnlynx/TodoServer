const dotenv = require('dotenv');
dotenv.config();
const { Pool } = require('pg');

const itemsPool = new Pool({
    connectionString: process.env.DBConnectionString,
    ssl: {
        rejectUnauthorized: false,
    },
});

const query = async (text, params) => {
    const result = await itemsPool.query(text, params);
    return result;
};

module.exports = { itemsPool, query };