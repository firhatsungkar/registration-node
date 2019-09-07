const express = require('express')
const router = express.Router()

router.get('/*', (_, res) => res.sendFile('./build/index.html') )

module.exports = router