'use strict'

const Router = require('koa-joi-router')
const Joi = Router.Joi

module.exports = {
  get: {
    query: {
      user_id: Joi.number().integer.min(0).required()
    }
  },
  post: {
    type: 'multipart',
  },
  delete: {
    query: {
      photo_id: Joi.number().integer.min(0).required()
    }
  }
}