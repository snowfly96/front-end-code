// https://www.bilibili.com/video/BV14s411E7qf?p=42&vd_source=084728306193898208d80f40ece2975b
// 数据类型
// 基本数据类型：String、Number、boolean、undefined、null、Symbol
// 对象（引用）类型：Object、Function、Array
// 判断：
//     instanceof： “hello” instanceof String 返回的布尔值
//     typeof：typeof xxx 返回一个字符串 
//             不能判断null和object，object和array类型
// 函数的执行和调用直接加括号
var b1 = {
    b2: [1, "ab", console.log],
    b3: function () {
        console.log("hello")
    }
}
console.log(b1 instanceof Object, b1 instanceof Array)
console.log(b1.b2 instanceof Object, b1.b2 instanceof Array)
console.log(b1.b3 instanceof Object, b1.b3 instanceof Function)

console.log(typeof b1.b3 === "function")
console.log(typeof b1.b2[2] === "function")
console.log(typeof b1.b2)