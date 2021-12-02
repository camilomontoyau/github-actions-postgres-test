const express = require('express')
const errors = require('http-errors')
const router = express.Router()

const userRoutes = require('./users')

router.use('/users', userRoutes)

module.exports = router