const http = require('http')

const server = http.createServer((req, res) => {
    console.log(res)
    console.log('Hello Sourav')
})

server.listen(4000) 