var pg = require('pg');

var config = {
    user: 'postgres',
    database: 'fruits',
    password: 'password',
    host: 'localhost',
    port: 5432,
    max: 10, // max number of clients in the pool
    idleTimeoutMillis: 30000, // how long a client is allowed to remain idle before being closed
}

var client = new pg.Client(config);

client.connect();

async function query() {
    
    try {
      let response = await client.query("SELECT * FROM citrus WHERE color='orange'");
      console.log(response.rows);
    } catch(err) {
      console.log (err); 
    }
  }

  query();