const http = require('http')
const port = 3002

const requestHandler = (request, response) => {
  console.log(request.url)
  response.end('Node 2 Server!')
}

const server = http.createServer(requestHandler)

server.listen(port, (err) => {
  if (err) {
    return console.log('something bad happened', err)
  }

  console.log(`server is listening on ${port}`)
})