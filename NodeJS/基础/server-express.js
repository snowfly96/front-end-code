const express = require('express')
const router = require('./express-router')
const cors = require('cors') // 解决跨域
const bodyParser = require('body-parser') // 解析body，express默认无法解析

const app = express()
app.use(cors())
app.use(bodyParser.json())

app.use('/', router)

app.listen(3001, (req, res) => {
    console.log("正在监听3001端口...")
})
