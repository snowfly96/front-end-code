const http = require('http')

const server = http.createServer((req, res) => {
    res.statusCode = 200
    res.setHeader('Content-type', 'application/json')
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, DELETE, PUT')
    res.setHeader('Access-Control-Allow-Headers', 'Content-type')
    const data = {
        message: 'hello app!',
        date: Date.now()
    }
    res.end(JSON.stringify(data))
})

server.listen(3001, () => {
    console.log("监听3001端口")
})
