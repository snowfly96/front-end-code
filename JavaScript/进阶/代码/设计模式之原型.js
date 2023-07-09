let protoytpe = {
    attr1: "value1",
    attr2: "value2",
    clone: function () {
        return Object.create(this)
    }
}
let object1 = protoytpe.clone()
let object2 = protoytpe.clone()
console.log(object1.attr1)
console.log(object2.attr1)

// 区分Object.create()/{}/new Object()创建新的对象
// 1. Object.create(obj) 创建的对象的__proto__指向obj,如果obj是空，那么新的对象就是一个{}，其__proto__指向null
// 2. {} 字面量直接创建得到对象是{}，但是其原型__proto__指向Object.prototype
// 3. new Object() 构造函数，其原型__proto__指向Object.prototype
const obj1 = {}
const obj2 = new Object()
console.dir(obj1.__proto__)
console.log(obj1.__proto__.__proto__) // null
console.log(obj1.__proto__ === obj2.__proto__) // true