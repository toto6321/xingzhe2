'use strict'

const Router = require('koa-joi-router')
const Joi = Router.Joi

module.exports = {
  get: {
    query: {
      user_id: Joi.number().integer().min(0).required()
    }
  },
  post: {
    type: 'json',
    body: {
      name: Joi.string().min(1).required(),

    }
  },
  delete: {
    type: 'json',
    body: {
      ids: Joi.array().items(Joi.number().integer().min(0))
    }
  },
  upload_photos: {
    type: 'multipart'
  }
}
