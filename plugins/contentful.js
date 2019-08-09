require('dotenv').config()
const contentful = require('contentful')
const client = contentful.createClient({
  accessToken: process.env.CFT_ACCESS_TOKEN,
  space: process.env.CFT_SPACE_ID,
  environment: process.env.CFT_ENVIRONMENT
})

module.exports = client
