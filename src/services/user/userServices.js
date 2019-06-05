const db = require('../../db/')

const is_email_existed = async email => {
  const result = await db('user')
    .select('id')
    .where('email', email)
  return result
}

const get_many_by_telephone = async (tel_code = '86', telephone) => {
  const result = await db('user')
    .select('id', 'nickname')
    .where({
      tel_code: tel_code,
      telephone: telephone
    })
  return result
}

module.exports = {
  is_email_existed,
  get_many_by_telephone
}
