/* eslint-disable camelcase */
const express = require('express')
const errors = require('http-errors')

const router = express.Router()
const User = require('./user.model')

router.get('/', async (req, res) => {
  const { rows = [], count } = await User.findAndCountAll()
    return res.status(200).json({
      total: count,
      items: rows
    })
})

module.exports = router
