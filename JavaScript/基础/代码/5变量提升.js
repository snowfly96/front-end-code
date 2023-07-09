/* 
       1. 变量声明提升
           * 通过var定义（声明）的变量，在定义之前都能被访问到
           * 提升是属于声明提升，值为undefined
       2. 函数声明提升
           * 通过function声明的函数，在之前就可以直接调用
           * 值：定义的函数对象
    */
// 变量提升,let没有变量提升会出现暂时性死亡的问题
var a = 4
function fn () {
    console.log(a) // undefined 
    var a = 4
}
fn()
console.log(b)
var b = 2
// 函数提升
fn2()
function fn2 () {
    console.log("fn2()")
}

// 函数变量提升
console.log(fn3) // undefined
var fn3 = function () {
    console.log("fn3()")
}