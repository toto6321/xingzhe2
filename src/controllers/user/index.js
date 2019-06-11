'use strict'
const bcrypt = require('bcrypt')
const jsonWebToken = require('jsonwebtoken')

const userDBService = require('../../services/user/userDBService')
const userService = require('../../services/user/userService')

const login = async ctx => {
  const { email, password, code, phone } = ctx.request.body
  const info = await userDBService.get_one_by_email(email)
  console.debug('info', info)
  if (!info) {
    const msg = `User of email ${email} is not found!`
    console.error('ERROR:', msg)
    ctx.status = 400
    ctx.body = { msg }
  } else {
    const is_matched = await userService.is_password_matched(email, password)
    if (is_matched) {
      const token = jsonWebToken.sign(
        Object.assign({}, info[0]),
        process.env.JWT_SECRET,
        { expiresIn: process.env.JWT_TOKEN_EXPIRATION_TIME }
      )
      ctx.status = 200
      ctx.body = {
        id: info[0].id,
        token: token
      }
    } else {
      ctx.status = 401
    }
  }
}

const signup = async ctx => {
  const { email, password } = ctx.request.body
  const data = await userDBService.get_one_by_email(email)
  if (data) {
    const msg = `Email of ${email} is used!`
    console.error('ERROR:', msg)
    ctx.status = 400
  } else {
    const data = { email }
    const result = await userDBService.insert_one(data).catch(e => {
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
            userDBService.update_password_by_email(email, hash).catch(e => {
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
  const data = await userDBService.get_many_by_telephone(code, phone)
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
