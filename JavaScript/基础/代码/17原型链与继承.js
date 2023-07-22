console.log(Date.prototype, typeof Date.prototype) // 原型上面的方法是给实例对象进行使用的
function Person (name, age) {
    this.name = name
    this.age = age

}
Person.prototype.test = function () {
    console.log("给原型对象中动态添加方法")
}
// 李立超老师：
// https://www.bilibili.com/video/BV1YW411T7GX/?spm_id_from=333.788.recommend_more_video.1&vd_source=084728306193898208d80f40ece2975b
// https://www.bilibili.com/video/BV14s411E7qf?p=20&vd_source=084728306193898208d80f40ece2975b
// 原型对象相当于一个公共的区域，构造函数和实例都能访问
/* 函数的prototype：函数作为构造函数时才有用
    * 每个函数都有一个prototype属性，它默认指向一个object空对象（原型对象）
    * 原型对象有一个属性constructor（构造方法），他指向函数对象
    * 函数对象的prototype指向函数的原型对象，原型对象中的的构造函数反过来指向函数对象
*/
console.log(Person)
console.log(Person.prototype)
console.log(Person.constructor === Person)
console.log(Person.prototype.constructor === Person);

/* 对象__proto__
    * 每个实例对象都有一个__proto__属性，指向其构造函数的prototype
    * 当访问一个对象的属性或方法时现在自身找，没有再往原型对象找，一层层往上找，知道找到最后一个null原型，构成原型链的根节点
    * 查看某个对象有某个方法（会在原型链上找），“name” in obj
    * 只查看自身是否存在某个方法：obj.hasOwnProperty()
*/

// 没有在外面单独给构造函数的prototype属性上添加函数方法prototype只有默认的contructor属性
(function () {
    function Test (name) {
        this.name = name
        this.getName = function () {
            return this.name
        }
    }
    Test.prototype.getAge = function () {
        return 20
    }
    const test = new Test("snow")
    console.log(test)
    console.log(test.__proto__)
})();

// 一. 原型链继承
// 1. 原型链中所有的引用属性将被所有的实例共享
// 2. 子类实例化时候不能够给构造函数传递参数
(function () {
    function Animal () {
        this.colors = ['black', 'white']
    }
    Animal.prototype.getColor = function () {
        return this.colors
    }

    function Dog () { }

    Dog.prototype = new Animal() // 创建了一个新的实例 Dog.prototype指向新的实例，实例的__proto__指向Animal.prototype
    // 不等价于
    // Dog.prototype.__proto__ = Animal.prototype 
    let dog1 = new Dog()
    let dog2 = new Dog()
    dog1.colors.push("red")
    console.log(dog2.getColor()) // ['black','white','red']
})();

// 二. 构造函数继承
// 每次创建子类都会创建一遍方法
// 只能继承父类的实例属性，没法继承父类的原型上的属性
(function () {
    function Animal (name) {
        this.name = name
        this.getName = function () {
            return this.name
        }
    }
    function Dog (name) {
        Animal.call(this, name) // 利用父类的构造函数来增强子类实例，复制父类的实例给子类
    }
    const dog = new Dog("tom") // 只是调用animal的构造函数，将name和getName方法挂在自身上
    console.log(dog)
})();

// 三. 组合继承
(function () {
    function Animal (name) {
        this.name = name
        this.colors = ['black', 'white']
    }
    Animal.prototype.getName = function () {
        return this.name
    }
    function Dog (name, age) {
        Animal.call(this, name) // 构造函数继承
        this.age = age
    }

    Dog.prototype = new Animal()
    Dog.prototype.constructor = Dog
    let dog1 = new Dog('奶昔', 2)
    dog1.colors.push('brown')
    let dog2 = new Dog('哈赤', 1)
    console.log(dog2)
})();

// 四. 原型式继承
// 1. 原型链继承多个实例的引用类型属性指向相同，存在篡改的可能。
// 2. 无法传递参数
(function () {
    function object (obj) {
        function F () { }
        F.prototype = obj
        return new F()
    }
    const obj = {
        name: "snow",
        getName: function () {
            console.log(this.name)
        }
    }
    const _obj = object(obj)
    console.log(_obj)
})();

// 寄生式继承
(function () {
    function create (obj) {
        function F () { }
        F.prototype = obj
        return new F()
    }
    function inherit (child, parent) {
        let prototype = create(parent.prototype)
        prototype.constructor = child
        child.prototype = prototype
    }
})();

// 类实现继承
(function () {
    class Animal {
        constructor() {
            this.name = name
        }
        getName () {
            return this.name
        }
    }
    class Dog extends Animal {
        constructor(name, age) {
            super(name)
            this.age = age
        }
    }
})()