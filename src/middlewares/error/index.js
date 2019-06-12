const errorHandler = require('koa-json-error')
const _ = require('lodash')
const logger = require('../../middlewares/log/init')

const postFormat = (err0, err1) => {
  const error = _.omit(_.assign(err0, err1), 'stack')
  logger.warn(error)
  return error
}

module.exports = errorHandler(postFormat)
