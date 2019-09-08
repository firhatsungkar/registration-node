const express = require('express')
const router = express.Router()

const apiRoute = require('./api')
const webRoute = require('./web')

router.use('/api/v1', apiRoute)

module.exports = router