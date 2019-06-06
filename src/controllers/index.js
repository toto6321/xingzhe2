'use strict'
const userService = require('../services/user/userServices')
const login = ctx => {
  const token = get_jwt_token(ctx)
  ctx.body = { token }
}

const signup = async ctx => {
  const { email, code, phone } = ctx.request.body
  if (!email || !phone) {
    ctx.status = 412
    return
  }
  const result = await userService.is_email_existed(email)
  const data = await userService.get_many_by_telephone(code, phone)
  if (!result || data.length > 0) {
    ctx.status = 400
  } else {
    ctx.status = 200
  }
}

const info = async ctx => {
  let { code, phone } = ctx.request.body
  const data = await userService.get_many_by_telephone(code, phone)
  ctx.body = { data }
}

const get_jwt_token = ctx => {
  return ctx.request.header['authorization']
}

module.exports = {
  login,
  signup,
  info
}
