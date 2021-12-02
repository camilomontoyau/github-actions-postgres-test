const env = process.env.NODE_ENV || 'test';
const config = require('../config')[env]
const app = require('./server')

const server = app.listen(config.server.port, async () => {
  console.log({
    message: `Party on port ${server.address().port}!!!`
  })
})
