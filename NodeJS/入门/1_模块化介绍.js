// moduleTest()
var math=require('../snowmath.js.js');
console.log(__filename);
console.log(__dirname);

// 自定义的模块
// console.log(math.add(2,3));
// console.log(math.mul(2,3));
console.log(math.name);

// 内置模块
var fs=require('fs')
// console.log(fs);

// 函数内部声明一个全局变量去掉var
a=10
console.log(global.a);
console.log(arguments); // arguments.callee
console.log(arguments.callee); // 匿名函数
// node在执行的时候会将当前模块包裹在一个函数里，函数内部的变量都是局部变量，
/*
function (exports, require, module, __filename, __dirname) {
    exports是module的一个属性
}
*/
console.log(arguments.callee+""); 

// exports 和module.exports 是同一个对象，但是exports是module.exports的一个属性
// 但是要注意深拷贝和浅拷贝， exports只能向外暴露一个变量
