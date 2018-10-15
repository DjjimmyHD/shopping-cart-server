
module.exports = {

  development: {
    client: 'pg',
    connection: 'postgresql:///shopping_cart_items'
  },
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  }

}
