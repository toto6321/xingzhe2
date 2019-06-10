'use strict'
const bcrypt = require('bcrypt')

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
    const data = { email }
    const result = await userService.insert_one(data).catch(e => {
      console.error('ERROR:', e)
    })

    bcrypt.genSalt(12, (err, salt) => {
      console.debug('salt', salt)
      if (err) {
        console.error('ERROR:', err)
        console.error('email:', email)
      } else {
        bcrypt.hash(password, salt, (err2, hash) => {
          if (err2) {
            console.error('ERROR:', err2)
            console.error('email:', email)
          } else {
            console.debug('hash', hash)
            userService.update_password_by_email(email, hash).catch(e => {
              console.error('ERROR:', e)
            })
          }
        })
      }
    })

    ctx.status = 201
    ctx.body = { id: result[0] }
  }
}

const info = async ctx => {
  // eslint-disable-next-line no-unused-vars
  let { email, code, phone } = ctx.request.body
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
