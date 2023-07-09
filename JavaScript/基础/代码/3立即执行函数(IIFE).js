// anonymous function
(function () {
    var a = 3 // 1. 隐藏实现，不会污染外部命名空间
    console.log("immediately-invoked function:" + a)
})()
var a = 4
console.log("外部:" + a);
(function () {
    var a = 1
    function test () {
        console.log(++a)
    }
    window.$ = function () { // 2. 向外暴露一个全局函数
        return {
            test: test
        }
    }
})()
$().test()