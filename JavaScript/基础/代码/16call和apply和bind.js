function Person (name, age) {
    this.name = name
    this.age = age
    this.getName = () => {
        return this.name
    }
    return this
}
const obj = {
    name: 'jake',
    age: 18
}

const person = new Person('tom', 20)
console.log(person.getName())


function test (name) {
    console.log(name)
    console.log(this.name)
}

Function.prototype._call = function (obj) { // 可以接受
    const context = obj || {}
    const args = Array.from(arguments).slice(1)
    context.fn = this
    const res = context.fn(...args)
    delete context.fn
    return res
}

test._call(obj, 'tom')

Function.prototype._apply = function (obj, arg) {
    // 判断arg是不是数组
    const context = obj || {}
    context.fn = this
    const res = context.fn(...arg)
    delete context.fn
    return res
}

test._apply(obj, ['tom'])


Function.prototype._bind = function (obj, ...args) {
    const context = obj || {}
    const args1 = Array.from(args).slice(1)
    context.fn = this
    return function (...args2) {
        const args3 = args1.concat(args2)
        const res = context.fn(...args3)
        delete context.fn
        return res
    }
}

test._bind(obj)('hello')

