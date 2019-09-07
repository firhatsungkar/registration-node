const port = process.env.PORT || 4000
const express = require('express')
const compression = require('compression')
const routes = require('./routes')

const app = express()

app.use(compression())

app.use(express.static('./build'))
app.use('/', routes)

app.listen(port, () => {
  console.log(`Listening on port: ${port}`)
})