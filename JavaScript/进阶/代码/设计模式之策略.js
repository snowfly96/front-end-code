// 策略模式：定义一组算法，封装起来，使他们可以互相替换
// 策略模式=策略+上下文对象

// 策略
const strategies = {
    add: (x, y) => x + y,
    sub: (x, y) => x - y,
    times: (x, y) => x * y,
    division: (x, y) => y ? x / y : NaN
}

// 上下文
// function Context (strategy) {
//     this.strategy = strategy
// }
// Context.prototype.executeStrategy = function (x, y) {
//     return this.strategy(x, y)
// }

class Context {
    constructor(strategy) {
        this.strategy = strategy
    }
    executeStrategy = (x, y) => this.strategy(x, y)
}

// 测试用例
const context = new Context() // 创建上下文实例
// 动态切换策略
context.strategy = strategies.add  // add
console.log(context.executeStrategy(2, 4))
context.strategy = strategies.sub // sub
console.log(context.executeStrategy(2, 4))
context.strategy = strategies.times
console.log(context.executeStrategy(2, 4))
context.strategy = strategies.division
console.log(context.executeStrategy(2, 4))