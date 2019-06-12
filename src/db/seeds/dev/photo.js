if (!process.env.NODE_ENV) {
  throw new Error('NODE_ENV is unset!')
}

if (process.env.NODE_ENV !== 'development') {
  throw new Error('Seed is only allowed in development!')
}

const faker = require('faker')
const table = 'photo'

const seed = async knex => {
  let mock_data = [{
    owner_id: 1,
    name: '20190612_120000.jpg',
    url: 'http://www.baidu.com/123.png',
    deleted: false,
    image_created_at: '2019/06/12 12:00:00',
    coordinate_type: 1,
    latitude: 30,
    longitude: 120
  }]

  faker.locale = 'zh_CN'

  for (let i = 0; i < 9; i++) {
    let entity = {
      owner_id: 1,
      name: faker.image.avatar(),
      url: faker.image.imageUrl(),
      deleted: false,
      image_created_at: faker.date.recent(),
      coordinate_type: 1,
      latitude: 40,
      longitude: 100
    }
    mock_data.push(entity)
  }

  // delete all data there
  await knex(table).truncate()

  // insert mock data
  await knex(table).insert(mock_data)
}

module.exports = { seed }
