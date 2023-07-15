// 简单文件读取

var fs=require("fs");

fs.readFile("hello.txt",function(err,data){
    if(!err){
        console.log(data.toString());
    }
});

// 流式文件读取
var rs=fs.createReadStream("hello.txt");

rs.once("open",function(){
    console.log("文件流打开了～");
})
rs.once("close",function(){
    console.log("文件流关闭了");
});

rs.on("data",function(data){
    console.log(data.length);
})