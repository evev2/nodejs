const http = require ('http')
const fs = require('fs')

let server = http.createServer((req,res) => {
    res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'})

    const stream = fs.createReadStream('./templates/index.html')
    stream.pipe(res)
})

const PORT = 8080
const HOST = '127.0.0.1'

server.listen(PORT, HOST, () => {
    console.log(`Сервер запущен: http://${HOST}:${PORT}`)
})