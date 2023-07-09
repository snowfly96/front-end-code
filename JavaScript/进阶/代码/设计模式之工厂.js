/*  设计模式（Design Pattern）是一种被广泛接受的代码设计经验的总结和归纳
    工厂模式是一种常用的对象创建设计模式，通过定义一个工厂接口来创建产品对象，而不是直接new产品对象
*/
// 工厂接口
class CarFactory {
    createCar () { }
}
// 具体宝马工厂
class BMWFactory extends Carfactory {
    createCar () {
        return new BWM()
    }
}
// 具体奔驰工厂
class BenZFactory extends CarFactory {
    createCar () {
        return new BenZ()
    }
}
// 车类
class Car {
    price () { }
}
// 宝马类
class BWM extends Car {
    price () {
        console.log("100万人民币!")
    }
}
// 奔驰类
class BenZ extends Car {
    price () {
        console.log("80万人民币!")
    }
}
// 创建一个宝马工厂用于生成宝马
const bwmFactory = new BMWFactory()
const bwmCar = bwmFactory.createCar()
console.log(bwmCar.price())