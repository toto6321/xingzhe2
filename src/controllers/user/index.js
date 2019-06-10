'use strict'
const userService = require('../../services/user/userServices')
const login = ctx => {
  const token = get_jwt_token(ctx)
  ctx.body = { token }
}

const signup = async ctx => {
  const { email, password } = ctx.request.body
  const data = await userService.get_many_by_email(email)
  if (data.length > 0) {
    const msg = `Email of ${email} is used!`
    console.error('ERROR:', msg)
    ctx.status = 400
  } else {
    const data = { email, password }
    const result = await userService.insert_one(data)
    ctx.status = 201
    ctx.body = { id: result[0] }
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
