
const fs = require('fs')

const configureRoutes = (req, res) => {

    console.log("SERVER RUNNING .....")
    const url = req.url
    const method = req.method


    if (req.url === "/") {
        res.write('<html>')
        const fileData = fs.readFileSync('message.txt', 'utf-8')
        res.write(`<body><h1>${fileData}</h1><form action ="/message" method="POST"><input name = "message" type="text"/> <button type ="submit">Send</button></form></body>`)
        res.write('</html>')
        return res.end()
    }

    if (url === "/message" && method === "POST") {

        const body = []

        req.on("data", (chunk) => {
            body.push(chunk)
        })
        return req.on('end', () => {
            const parseBody = Buffer.concat(body).toString()
            const message = parseBody.split("=")[1]
            fs.writeFile('message.txt', message, (err) => {
                if (err) {
                    console.log(err);
                }
                else {

                    res.statusCode = 302
                    res.setHeader('location', '/')
                    return res.end()
                }
            })

        })

    }


    res.write('<html>')
    res.write('<body><h1> Hello this is a Message  page </h1></body>')
    res.write('</html>')
    res.end()
}




module.exports = configureRoutes