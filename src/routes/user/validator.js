'use strict'

const Router = require('koa-joi-router')
const Joi = Router.Joi

module.exports = {
  user_login: {
    header: {
      authorization: Joi.string().token()
    },
    body: {
      email: Joi.string().email(),
      password: Joi.string()
    },
    type: 'json',
  },
  user_signup: {
    body: {
      email: Joi.string().email(),
      phone: Joi.string(),
      password: Joi.string()
    },
    type: 'json',
  },
  user_info: {
    query: {
      phone: Joi.string()
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
