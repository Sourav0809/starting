const http = require('http')
const routes = require('./routes.js')

console.log("hello")
const server = http.createServer((req, res) => {
    routes(req, res)
})

// server.listen(3000)