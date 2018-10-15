const express = require('express')
const app = express()
const port = process.env.PORT || 3333
const query = require('./queries')
const cors = require('cors')
const bodyParser = require('body-parser')

app.use(bodyParser.json())
app.use(cors())

app.get('/', (req, res, next) => {
  return query.getAllItems().then(items => res.json({items}))
})

app.listen(port, () => {
  console.log(`i got you covered on ${port}`)
})
