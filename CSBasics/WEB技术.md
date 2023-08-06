### JS Bridge

什么是js bridge？

在混合开发模式下，H5页面经常需要使用native的功能，比如打开二维码进行扫描、调用原生页面、获取用户的信息等，同时也需要使用native给web推送信息、发送状态进行更新

js是运行在webview或者jscore中，属于与外界隔离环境，所以需要桥js bridge实现native端和web端扽双向通信

web端可以调用native的Java接口，同样native也可以通过js调用web端的javascript接口，实现双向的通信

![image-20230803225723848](/Users/snowfly96/Documents/GitHub/front-end-code/CSBasics/assets/image-20230803225723848.png)

**webview**

移动端提供给javascript的运行环境，使系统渲染web网页的一个控件



js bridge的实现原理，web和native可以类比与client/server模式，web调用原生的接口就如同client向server端发送，js bridge类似http的角色

1. 将native原生接口封装成javascript接口
2. javascript接口封装成原生接口

https://mp.weixin.qq.com/s/0IIndO6AoJGrFbP0CTXHnw