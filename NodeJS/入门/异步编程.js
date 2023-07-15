/* 异步执行顺序
function f1(){
    setTimeout(()=>{console.log("i am f1");},1000);
}
function f2(){
    console.log("i am f2");
}

f1()
f2()
*/

/* 回调函数 
function f1(callback){
    console.log("i am f1");
    callback();
}
function f2(){
    console.log("i am f2");
}
f1(f2)
*/

/* 
f1()    // 耗时任务
f2()    // 需要在f1执行之后执行
f3()    // 正常执行
*/

/* 回调函数
function f1(callback){
    setTimeout(()=>{
        // 执行f1的代码
        console.log("执行f1");
        callback();
    },1000);
}
function f2() {
    // 执行代码f2
    console.log("execute f2");
}
function f3() {
    // execute
    console.log("execute f3");
}
f1(f2);
f3(); 
*/ 






