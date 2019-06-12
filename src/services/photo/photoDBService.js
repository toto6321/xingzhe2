const db = require('../../db')

const table = 'photo'

const get_many_by_user_id = async id => {
  return db(table)
    .select('id', 'name', 'url', 'image_created_at', 'coordinate_type', 'latitude', 'longitude', 'created_at', 'updated_at')
    .where('owner_id', id)
    .andWhere('deleted', false)
}

const insert_many = async photos => {
  return db(table)
    .insert(photos)
}

const delete_many_by_ids = async ids => {
  return db(table)
    .update({ deleted: true })
    .whereIn('id', ids)
}

module.exports = {
  get_many_by_user_id,
  insert_many,
  delete_many_by_ids
}