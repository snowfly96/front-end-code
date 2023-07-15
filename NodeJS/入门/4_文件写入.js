// 通过node操作系统的文件，对文件进行增删查改

// 同步操作：同步操作会执行主程序的执行
// 异步操作：不会影响程序的执行
var fs=require('fs')

// 同步操作
// 文件的写入
var fd=fs.openSync('hello.txt','w'); // 返回描述符作为结果

console.log(fd);

fs.writeSync(fd,"add content");

fs.closeSync(fd);

// 异步操作
// 文件写入

/*
fs.open("hello.txt","w",function(err,fd){
    if(!err){
        fs.write(fd,"异步添加",function(err){
            if(!err){
                console.log("成功写入");
            }
            fs.close(fd,function(){
                if(!err){
                    console.log("关闭文件");
                }
            });
        });
    }else{
        console.log(err);
    }
});
*/

// 简单文件写入

fs.writeFile("hello.txt","这是简单文件写入",{flag:"a"},function(err){
    if(!err){
        console.log("simple file");
    }
})