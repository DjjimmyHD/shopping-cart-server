const connection = require('./knexfile.js')[process.env.NODE_ENV || 'development']
const knex = require('knex')(connection)

const getAllItems = () => knex('items').select().orderBy('id', 'desc')

module.exports = {
  getAllItems
}
