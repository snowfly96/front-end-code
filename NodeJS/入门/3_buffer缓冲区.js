/*
buffer缓冲区与数组相似
buffer用来存储二进制的文件，比传统的数组的性能要好
 */

var str="hello snow fly";

// buffer的使用
var buf=Buffer.from(str);
console.log(buf);

// 创建一个10字节的buffer
var buf2=Buffer.alloc(10);

buf2[0]=88;
buf2[1]=0xaa;
console.log(buf2);