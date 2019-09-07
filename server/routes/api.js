const express = require('express')
const router = express.Router()

router.route('/contacts')
      .get( (req, res) => {
        res.json(['contacts'])
      })

module.exports = router