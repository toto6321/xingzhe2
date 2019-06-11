const log4js = require('log4js')

const configuration = {
  appenders: {
    console: {
      type: 'stdout',
    },
    dev: {
      type: 'file',
      filename: './logs/dev/log.log',
      maxLogSize: 20480,
      backups: 5
    },
    staging: {
      type: 'file',
      filename: './logs/staging/log.log',
      maxLogSize: 20480,
      backups: 5
    },
    production: {
      type: 'file',
      filename: './logs/production/log.log'
    }
  },
  categories: {
    development: {
      appenders: ['console', 'dev'],
      level: 'debug'
    },
    staging: {
      appenders: ['staging'],
      level: 'info'
    },
    production: {
      appenders: ['production'],
      level: 'info'
    },
    default: {
      appenders: ['console'],
      level: 'all'
    }
  }
}

log4js.configure(configuration)

module.exports = log4js.getLogger(process.env.NODE_ENV || 'default')
