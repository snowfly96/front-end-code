/*
1. this 是什么？
    * 任何函数本质上都是通过某个对象调用：明确指定和被动制定
    * 所有函数内部都有一个变量this
    * 它的值对应于调用它的对象
    * 不指定就是window调用
    * 箭头函数没有自己的this，其内部的this是定义它的上下文环境
*/
function Person (name, age) {
    console.log(this)
    this.name = name
    this.age = age
    this.getAge = function () {
        console.log(this)
        console.log(this.age)
    }
    this.getName = function () {
        console.log(this)
        console.log(this.name)
    }
}
Person("snow", 20) // window
var p = new Person("snow", 21) // p
p.getAge() // p

var obj = {}
p.getAge.call(obj, "hello") // obj

var test = p.getAge
test() // window

function fn1 () {
    console.log(this)
    function fn2 () {
        console.log(this)
    }
    fn2()
}
fn1() // windows