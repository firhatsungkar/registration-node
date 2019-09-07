const port = process.env.PORT || 4000
const express = require('express')
const compression = require('compression')

const app = express()

app.use(compression())

app.use(express.static('./build'))

app.get('/api/v1/contact/', (req,res) => {
  res.json({
    data: 'member'
  })
})
app.get('/*', (req, res) => res.sendFile('./build/index.html'))

app.listen(port, () => {
  console.log(`Listening on port: ${port}`)
})