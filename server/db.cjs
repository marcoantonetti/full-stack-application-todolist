const Pool = require('pg').Pool
require('dotenv').config()

// Postgres database communication
const pool = new Pool({
    user: 'postgres',
    password: "jugodeub4",
    host: 'localhost',
    port: 5432,
    database: "todoAppDatabase",
})

module.exports = pool