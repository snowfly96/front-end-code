/*  定义属性
    const person = {
        name: 'snow',
    }
    Object.defineProperty(person, 'age', {
        value: 18,
        enumerable: true,
        writable: true,
        configurable: true,
    })
    console.log(person)
    */

// 数据set和age
// const person = {
//     name: 'snow'
// }
// let age = 20

// 数据劫持
// Object.defineProperty(person, 'age', {
//     get () {
//         console.log("获取age数据")
//         return age
//     },
//     set (value) {
//         age = value
//     }
// })
// console.log(person)

// 数据代理
// prObj对age的修改反映在person上
// const person = {
//     name: 'snow',
//     age: 18,
// }
// const prObj = {}

// Object.defineProperty(prObj, 'age', {
//     get () {
//         return person.age
//     },
//     set (value) {
//         console.log("person的数据被修改了")
//         person.age = value
//     }
// })

// 数据代理
let person = {
    name: 'snow',
    age: 23
}

// 数据代理     
// targetObj = new Proxy(person, {
//     get (target, key) { // target是person
//         console.log(target === person)
//         return Reflect.get(target, key)
//         // return target[key]
//         // return person.key
//     },
//     set (target, key, value) {
//         target[key] = value
//     }
// })

// console.log(targetObj.name)
// targetObj.age = 25
// console.log(person.age)