'use strict'
const bcrypt = require('bcrypt')
const jsonWebToken = require('jsonwebtoken')
const logger = require('../../middlewares/log/init')

const userDBService = require('../../services/user/userDBService')
const userService = require('../../services/user/userService')

const login = async ctx => {
  const { email, password, code, phone } = ctx.request.body
  const info = await userDBService.get_one_by_email(email)
  if (!info) {
    const msg = `User of email ${email} is not found!`
    logger.warn('WARN:', msg)
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
  if (data && data.length > 0) {
    const msg = `Email of ${email} is used!`
    logger.warn('ERROR:', msg)
    ctx.status = 400
  } else {
    const data = { email }
    const result = await userDBService.insert_one(data).catch(e => {
      logger.error('ERROR:', e)
    })

    bcrypt.genSalt(12, (err, salt) => {
      logger.debug('salt', salt)
      if (err) {
        logger.error('ERROR:', err)
        logger.debug('email:', email)
      } else {
        bcrypt.hash(password, salt, (err2, hash) => {
          if (err2) {
            logger.error('ERROR:', err2)
            logger.debug('email:', email)
          } else {
            logger.debug('hash', hash)
            userDBService.update_password_by_email(email, hash).catch(e => {
              logger.error('ERROR:', e)
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
