const http = require('http')

const server = http.createServer((req, res) => {
    const url = new URL(req.url, `http://${req.headers.host}`)
    const callbackName = url.searchParams.get('callback')
    const data = { name: req.url, age: 30 }

    res.setHeader('Content-Type', 'application/javascript')
    res.end(`${callbackName}(${JSON.stringify(data)})`)
})

server.listen(8080, () => {
    console.log('Server listening on port 8080')
})
