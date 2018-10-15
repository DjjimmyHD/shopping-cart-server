
exports.up = function (knex, Promise) {
  return knex.schema.createTable('items', (item) => {
    item.increments('id')
    item.string('name')
    item.integer('priceInCents')
  })
}

exports.down = function (knex, Promise) {
  return knex.schema.dropTableIfExists('items')
}
