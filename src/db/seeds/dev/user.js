if (!process.env.NODE_ENV) {
  throw new Error('NODE_ENV is unset!')
}

if (process.env.NODE_ENV !== 'development') {
  throw new Error('Seed is only allowed in development!')
}

const faker = require('faker')

const seed = async knex => {
  let mock_data = [{
    nickname: 'demo',
    email: 'demo@xingzhe.com',
    code: '86',
    telephone: '12345678911',
    password: 'password',
  }]

  faker.locale = 'zh_CN'

  for (let i = 0; i < 9; i++) {
    let user = {
      nickname: faker.internet.userName(),
      email: faker.internet.email(),
      code: '86',
      telephone: faker.phone.phoneNumber().replace('-', ''),
      password: faker.internet.password(),
    }
    mock_data.push(user)
  }

  // delete all data there
  await knex('user').truncate()

  // insert mock data
  await knex('user').insert(mock_data)
}

module.exports = { seed }
