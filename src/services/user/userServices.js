const db = require('../../db/')

const table = 'user'

const get_many_by_email = async email => {
  return db(table)
    .select('id', 'nickname', 'created_at', 'updated_at')
    .where('email', email)
    .limit(1)
}

const get_many_by_telephone = async (code = '86', telephone) => {
  return db(table)
    .select('id', 'nickname', 'created_at', 'updated_at')
    .where({
      code: code,
      telephone: telephone
    })
}

const insert_one = async user => {
  return db(table)
    .insert(user, ['id'])
}

const update_password_by_email = async (email, cybertext) => {
  return db(table)
    .update({ password: cybertext })
    .where('email', email)
}

module.exports = {
  get_many_by_email,
  get_many_by_telephone,
  insert_one,
  update_password_by_email
}
