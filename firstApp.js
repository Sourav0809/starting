const http = require('http')

const server = http.createServer((req, res) => {
    console.log(res)

    if (req.url === "/home") {
        res.write('<html>')
        res.write('<body><h1> Hello this is a home page </h1></body>')
        res.write('</html>')
        return res.end()
    }
    else if (req.url === "/about") {
        res.write('<html>')
        res.write('<body><h1> Welcome to ABout Page  </h1></body>')
        res.write('</html>')
        return res.end()
    }
    else if (req.url === "/node") {
        res.write('<html>')
        res.write('<body><h1> Welcome to node js project  </h1></body>')
        res.write('</html>')
        return res.end()
    }
    else {
        res.write('<html>')
        res.write('<body><h1> Welcome to Home Page   </h1></body>')
        res.write('</html>')
        return res.end()
    }


})

server.listen(4000)