const env = process.env.NODE_ENV || 'development'

const db_config = {
  development: {
    client: 'mysql',
    debug: true,
    connection: {
      host: process.env.DB_HOST,
      port: process.env.DB_PORT,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE + '_dev',
      charset: 'utf8mb4',
      collate: 'utf8mb4_unicode_ci'
    },
    migrations: {
      directory: './migrations/dev',
    },
    seeds: {
      directory: './seeds/dev',
    },
  },
  testing: {
    client: 'mysql',
    debug: true,
    connection: {
      host: process.env.DB_HOST,
      port: process.env.DB_PORT,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE + '_testing',
      charset: 'utf8mb4',
      collate: 'utf8mb4_unicode_ci'
    },
    migrations: {
      directory: './migrations/testing',
    },
    seeds: {
      directory: './seeds/testing',
    },
  },
  production: {
    client: 'mysql',
    debug: false,
    connection: {
      host: process.env.DB_HOST,
      port: process.env.DB_PORT,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
      charset: 'utf8mb4',
      collate: 'utf8mb4_unicode_ci'
    },
    migrations: {
      directory: './src/db/migrations',
    },
  }
}

module.exports = require('knex')[db_config[env]]

