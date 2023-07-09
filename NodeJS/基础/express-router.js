const express = require('express')
const database = require('./express-database') // 模拟数据库
const router = express.Router()

// 登陆验证中间件
const loginMiddleware = (req, res, next) => {
    const { username, password } = req.body
    database.forEach(item => {
        if (item.username === username && item.password === password) {
            next()
        }
    })
    return res.status(401).json({
        message: '用户名或者密码错误!'
    })
}

// 登陆路由
router.post('/login', loginMiddleware, (req, res) => {
    const data = {
        message: 'hello app',
        date: Date.now()
    }
    res.end(JSON.stringify(data))
})

// 首页路由
router.get('/home', (req, res) => {
    res.end('首页')
})

// 关于路由
router.get('/about', (req, res) => {
    res.end('关于我们')
})

module.exports = router