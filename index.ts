const express = require('express')
const app = express()
const fs = require('fs')
require('dotenv').config()
const port = process.env.PORT

app.get('/', (req, res) => {
  fs.readFile('index.html', (e, html) => {
    if (e) {
      console.log(e)
      return
    }
    res.send(html)
  })
})

app.listen(port, () => {
  console.log(`Listening on port ${port}...`)
})
