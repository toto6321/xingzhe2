'use strict'

const Router = require('koa-joi-router')
const Joi = Router.Joi

module.exports = {
  user_login: {
    body: {
      email: Joi.string().email().required(),
      code: Joi.string().default('86').required(),
      phone: Joi.string().min(7).default('1111111').required(),
      password: Joi.string().length(32, 'ASCII').required()
    },
    type: 'json',
  },
  user_signup: {
    body: {
      email: Joi.string().email().required(),
      code: Joi.string().default('86').optional(),
      phone: Joi.string().min(7).optional(),
      password: Joi.string().length(32, 'ASCII').required()
    },
    type: 'json',
  },
  user_info: {
    query: {
      email: Joi.string().email().required(),
      code: Joi.string().default('86').optional(),
      phone: Joi.string().min(7).optional()
    }
  },
  // insert your validator before the template
  template: {
    header: {},
    query: {},
    params: {},
    body: {},
    type: {},
    output: {}
  }

}
