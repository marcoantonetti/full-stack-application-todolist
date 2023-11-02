const Pool = require('pg').Pool
require('dotenv').config()

// Postgres database communication
const pool = new Pool({
    user: 'postgres', // my user
    password: "jugodeub4", // my password
    host: 'localhost',
    port: 5432,
    database: "todoAppDatabase",
})

module.exports = pool