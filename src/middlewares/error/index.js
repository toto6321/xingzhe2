const errorHandler = require('koa-json-error')
const _ = require('lodash')

const postFormat = (err0, err1) => {
  return _.omit(_.assign(err0, err1), 'stack')
}

module.exports = errorHandler(postFormat)
