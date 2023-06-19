import { createPool } from 'mysql2/promise';
import { config } from '../config/config';

export const pool = createPool({
  host: config.dbHost,
  user: config.dbUser,
  password: config.dbPassword,
  database: config.dbDatabase,
  namedPlaceholders: true,
  decimalNumbers: true,
  // port: config.port,
  // socketPath: config.socketPath
});


// Test query
pool.query('SELECT `title` FROM trips')
  .then(([rows, fields]) => {
    console.log('Results of your query:', rows);
  })
  .catch((error) => {
    console.error('Error in query:', error);
  });
