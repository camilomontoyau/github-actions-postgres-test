/* eslint-disable camelcase */
const express = require('express')
const errors = require('http-errors')

const router = express.Router()
const { User } = require('../../models')

router.get('/', async (req, res) => {
  try {
    const { rows = [], count } = await User.findAndCountAll()
    return res.status(200).json({
      total: count,
      items: rows
    })  
  } catch (error) {
    console.log(error)
  }
})

module.exports = router
