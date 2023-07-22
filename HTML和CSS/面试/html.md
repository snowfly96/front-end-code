#### 块级元素和行级元素？

1. 块级元素独占一行，宽度填充满父级元素宽度；可以设置宽高属性（即使设置宽度属性也是独占一行），可设置margin和padding
2. 行内元素不占一行，宽度随内容而定；设置宽高属性无效，padding和margin的上下属性无效（如padding-top无效，padding-left有效）

#### !DOCTYPE作用？

告知浏览器将使用哪个版本的html，<!DOCTYPE html>使用最新版本的html解析页面

#### 文档对象模型？

DOM模型是对html文档的抽象，将html结构抽象为一棵逻辑树，树中每个节点表示文档中一个元素

DOM模型给js提供操作文档的编程接口

#### script中的async和defer

浏览器加载html的时候会遇到script标签，浏览器必须等待script加载完毕之后再进行加载，会出现阻塞页面的问题

defer和async采用异步的方式，告诉浏览器立即加载，但是不阻塞后续页面的加载

defer是会保持相对顺序的，async不会保持相对顺序，哪个先加载完毕哪个先运行