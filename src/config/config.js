const dotenv = require('dotenv')
dotenv.config()

const config = {
  PORT: process.env.PORT || 8080,
  URLDB: process.env.URLDB || 'mongodb://localhost/nodedocker'
}
module.exports = config
