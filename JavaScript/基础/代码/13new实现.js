function Person (name, age) {
    this.name = name
    this.age = age
    return this
}

const person1 = new Person('tom', 20)
console.log(person1)

function _new (ClassName, ...args) {
    const obj = {}
    obj.__proto__ = ClassName.prototype
    const res = ClassName.call(obj, ...args)
    return res ? res : obj
}

const person2 = _new(Person, 'tom', 20)
console.log(person2)