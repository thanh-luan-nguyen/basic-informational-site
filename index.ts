const http = require('http')
const fs = require('fs')
require('dotenv').config()

const port = process.env.PORT

function getFilePath(reqURL) {
  let filePath
  switch (reqURL) {
    case '/':
      filePath = 'index.html'
      break
    case '/about':
      filePath = 'about.html'
      break
    case '/contact':
      filePath = 'contact.html'
      break
    default:
      filePath = '404.html'
  }
  return filePath
}

const server = http.createServer((req, res) => {
  const filePath = getFilePath(req.url)
  res.statusCode = 200
  res.setHeader('Content-Type', 'text/html')
  fs.readFile(filePath, (e, html) => {
    if (e) {
      console.log(e)
      return
    }
    res.write(html)
  })
})

server.listen(port, () => {
  console.log(`Server running at port ${port}...`)
})
