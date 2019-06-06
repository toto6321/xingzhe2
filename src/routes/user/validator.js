'use strict'

const Router = require('koa-joi-router')
const Joi = Router.Joi

module.exports = {
  user_login: {
    body: {
      email: Joi.string().email().required(),
      password: Joi.string().required()
    },
    type: 'json',
  },
  user_signup: {
    body: {
      email: Joi.string().email().required(),
      phone: Joi.string().required(),
      password: Joi.string().required()
    },
    type: 'json',
  },
  user_info: {
    query: {
      phone: Joi.string().required()
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
