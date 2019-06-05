const env = process.env.NODE_ENV || 'development'

const db_config = require('../../knexfile')
module.exports = require('knex')(db_config[env])

