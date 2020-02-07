const { Pool } = require("pg");

const pool = new Pool({
  connectionString: "postgres://postgres:1234@localhost:3000/postgres"
});

module.exports = pool;
