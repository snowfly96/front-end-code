class Person {
    constructor(name) {
        this.name = name
    }

    getName () {
        console.log(this.name)
        return this.name
    }
}

class Student extends Person {
    // 写了constructor就必须些super
    constructor(name, age) {
        // 必须调用super, 为了初始化父类中参数
        super(name) // 相当于函数中组件继承的Person.prototype.constructor.call(this, name)
        // console.log(Person.prototype.constructor.toString())
        this.age = age
    }

    getAge () {
        console.log(this.age)
        return this.age
    }
}

class Teacher extends Person {
    // 子类中省略了constructor
    // 仍会继承父类的constructor，并正确初始化name属性
    // 不需要显式指定constructor，除非需要添加子类自己的逻辑
    printHello () {
        console.log('hello')
    }
}



// class Student extends Person {
//     constructor(name, age) {
//         // 调用父类构造函数，即使不传递参数也需要保留super()
//         super();

//         // 初始化子类的属性
//         this.name = name;
//         this.age = age;
//     }

//     getAge() {
//         console.log(this.age);
//         return this.age;
//     }
// }


const student = new Student('snow', 12)
student.getAge()

const teacher = new Teacher('fly', 24)
teacher.printHello()
teacher.getName() // fly