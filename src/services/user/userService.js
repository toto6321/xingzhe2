const bcrypt = require('bcrypt')

const userDbService = require('./userDBService')

const is_pasword_matched = async (email, password) => {
  const info = await userDbService.get_password_by_email(email)
  console.debug('info:', info)
  if (!info) {
    return false
  } else {
    const hash = info[0].password
    console.debug('password:', password)
    console.debug('hash:', hash)
    return bcrypt.compare(password, hash)
  }
}

module.exports = {
  is_pasword_matched
}
