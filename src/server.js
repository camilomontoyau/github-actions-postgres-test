const express = require('express')
const errors = require('http-errors')
const cors = require('cors')
const config = require('./config')

const { json, urlencoded } = express



// import routes
const routes = require('./routes')

const app = express()

app.use(cors())
app.use(urlencoded({ extended: false }))
app.use(json())

app.use(`/api`, routes)

module.exports = app
