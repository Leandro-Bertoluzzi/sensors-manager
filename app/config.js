module.exports = {
  NODE_ENV: process.env.NODE_ENV || 'development',
  HOST: process.env.HOST || '0.0.0.0',
  PORT: process.env.PORT || 3000,
  DB_HOST : process.env.DB_HOST || 'localhost',
  DB_PORT : process.env.DB_PORT || '3306',
  DB_USER : process.env.DB_USER || 'root',
  DB_PASS : process.env.DB_PASS || 'root',
  DB_NAME   : process.env.DB_NAME   || 'node_db'
}