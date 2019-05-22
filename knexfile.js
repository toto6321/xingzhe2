// Update with your config settings.

module.exports = {
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
      directory: './src/db/migrations/dev',
    },
    seeds: {
      directory: './src/db/seeds/dev',
    },
  },
  staging: {
    client: 'mysql',
    debug: true,
    connection: {
      host: process.env.DB_HOST,
      port: process.env.DB_PORT,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE + 'staging',
      charset: 'utf8mb4',
      collate: 'utf8mb4_unicode_ci'
    },
    migrations: {
      directory: './src/db//migrations/staging',
    },
    seeds: {
      directory: './src/db/seeds/staging',
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

};
