const express = require('express')
const router = express.Router()
const models = require('../models')
const ContactModel = models.Contact

function getTimestamp(dateOfBirth) {
  const [ day, month, year ] = String(dateOfBirth).split('/')
  let dateOfBirthTimestamp = null
  if (dateOfBirth) {
    dateOfBirthTimestamp = (new Date(year, month, day)).getTime() / 1000
  }
  return dateOfBirthTimestamp
}

router.use(express.json())

router.route('/contacts')
      .get( (_, res) => {
        ContactModel.findAll()
          .then((contact) => {
            res.status(200).json(contact)
          })
          .catch(error => {
            res.status(500).json({ errors: [error] })
          })
      })
      .post( (req, res) => {

        const {
          firstName,
          lastName,
          email,
          dateOfBirth,
          gender,
          mobileNumber,
        } = req.body

        ContactModel.create({
          firstName,
          lastName,
          email,
          dateOfBirth: getTimestamp(dateOfBirth),
          gender,
          mobileNumber,
        })
          .then(newContact => {
            res.status(201).json({data: newContact})
          })
          .catch(error => {
            res.status(500).json({errors: error.errors })
          })
      })

module.exports = router