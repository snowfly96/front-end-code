/*
引用变量赋值：通过另外一个引用变量修改内部对象的值
两个引用变量其中一个指向了不同的对象之后，另一个依旧指向原来的对象
*/
var obj1 = { name: "tom" }
var obj2 = obj1
obj1.name = "snow"
console.log(obj1.name)
function fn (obj) {
    obj.name = "hello"
}
fn(obj1)
console.log(obj2.name)

var a = { age: 12 }
var b = a
a = { name: "B", age: 13 }
console.log(b.age, a.name, a.age) // 12, B, 13

function fn2 (obj) { // obj和a指向{ name:"B", age:13 }
    obj = { ae: 15 } // obj与{ name:"B", age:13 }断开，重新指向{ age:15 }，不修改a
}
fn2(a)
console.log(a.age)// 13