'use strict'
const userService = require('../services/user/userServices')
const login = (ctx, next) => {
  const token = get_jwt_token(ctx)
  ctx.body = { token }
}

const signup = async (ctx, next) => {
  const { email, code, phone } = ctx.query
  if (!email) ctx.status = 412
  const result = await userService.is_email_existed(email)
  const data = await userService.get_many_by_telephone(code, phone)
  if (!result || data.length > 0) {
    ctx.status = 400
  } else {
    ctx.status = 200
  }
}

const info = async (ctx, next) => {
  let { code, phone } = ctx.query
  const data = await userService.get_many_by_telephone(code, phone)
  ctx.body = { data }
}

const get_jwt_token = (ctx) => {
  // return ctx.request.header['authorization']
}

module.exports = {
  login,
  signup,
  info
}
