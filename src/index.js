const config = require('../config')
const app = require('./server')

const server = app.listen(config.server.port, async () => {
  console.log({
    message: `Party on port ${server.address().port}!!!`
  })
})
