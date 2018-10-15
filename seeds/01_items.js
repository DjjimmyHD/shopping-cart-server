
exports.seed = function (knex, Promise) {
  return knex('items').del()
    .then(function () {
      return knex('items').insert([
        { id: 01, name: 'Mediocre Iron Watch', priceInCents: 399 },
        { id: 02, name: 'Heavy Duty Concrete Plate', priceInCents: 499 },
        { id: 03, name: 'Intelligent Paper Knife', priceInCents: 1999 },
        { id: 04, name: 'Small Aluminum Keyboard', priceInCents: 2500 },
        { id: 05, name: 'Practical Copper Plate', priceInCents: 1000 },
        { id: 06, name: 'Awesome Bronze Pants', priceInCents: 399 },
        { id: 07, name: 'Intelligent Leather Clock', priceInCents: 2999 },
        { id: 08, name: 'Ergonomic Bronze Lamp', priceInCents: 40000 },
        { id: 09, name: 'Awesome Leather Shoes', priceInCents: 3990 }
      ])
    })
}
