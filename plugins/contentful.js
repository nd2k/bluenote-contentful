require('dotenv').config()
const contentful = require('contentful')
const client = contentful.createClient({
  space: process.env.CFT_SPACE_ID,
  accessToken: process.env.CFT_ACCESS_TOKEN
})

module.exports = client
