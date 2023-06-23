 

### 安装依赖

 **创建项目** 

创建项目初始化packge.json文件

```bash
mkdir snowfly96-webpack-react
cd snowfly96-webpack-react
npm init
```

**安装依赖**

安装项目开发中所需要的react/react-dom等依赖

安装项目开发中打包工具、babel、html模版插件和各种loader等

```bash
npm i react react-dom 
npm i webpack webpack-cli webpack-dev-server -D
npm i html-webpack-plugin style-loader css-loader babel-core babel-loader babel-preset-env babel-preset-react -D
```

### 开发项目

#### 目录结构

```bash
.
├── package-lock.json
├── package.json
├── .babelrc
├── public
│   └── index.html
├── src
│   ├── App.js
│   ├── index.css
│   ├── index.js
│   └── pages
│       ├── About
│       │   └── index.js
│       └── Home
│           └── index.js
└── webpack.config.js
```

#### 创建src目录

用于存放源代码文件

**index.js文件**

```javascript
import React from 'react'
import ReactDOM from "react-dom/client"
import App from "./App"
import './index.css'

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(<App />)
```

**app.js文件**

```js
import React from 'react'
/**
 * 每个函数组件文件开头需要引入react，jsx代码
 * 编译成js的时候返回变成React.createElement("div", null, "...")
 */
import Home from "./pages/Home"
import About from "./pages/About"

const App = () => (
    <div>
        <Home />
        <About />
    </div>
)
export default App
```

**index.css文件**

```css
h1 {
  color: red;
}
```

**pages目录**

Home/index.js

```js
import React from 'react'
import { getMin } from 'snowfly96-webpack-demo'

const Home = () => {
    return (
        <div>
            <h1>主页：项目测试</h1>
            <p>最小值：{getMin([2, 34, 4, -3])}</p>
        </div>
    )
}
export default Home
```

About/index.js

```js
import React from "react"

const About = () => (
    <div>
        <h2>关于我们</h2>
    </div>
)
export default About
```

#### 创建public目录

用于存放模版文件等文件

```html
<!DOCTYPE html>
<html lang="en">

  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
  </head>

  <body>
    <noscript>You browser is not supported Javascript!</noscript>
    <div id="root"></div>
  </body>

</html>
```

### 配置环境

#### package.json文件配置

package.json中script配置添加start

```json
  "scripts": {
    "start": "webpack-dev-server --mode development",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
```

#### webpack.config.js文件配置

```js
const path = require('path')
// htmlwebpackplugi 是webpack插件，用于自动生成的html文件，并将打包后的脚本和样式文件自动注入生成的html文件中
const HtmlWebpackPlugin = require('html-webpack-plugin')
const htmlWebpackPlugin = new HtmlWebpackPlugin({
  // 指定html模版文件的路径
  template: path.join(__dirname, 'public/index.html'),
  // 指定生成的html文件名称（开发环境下在根目录下,http:127.0.0.1:3001可以直接访问到）
  filename: './index.html'
})

module.exports = {
  entry: path.join(__dirname, "src/index.js"),
  // 文件出口，在production环境下打包到dist目录
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    // 允许对不同类型的文件编写不同处理方式
    rules: [{
      test: /\.(js|jsx)$/, // 对js/jsx进行处理
      use: "babel-loader", // 使用babel-loader进行处理
      exclude: /node_modules/ // 不对node_modules文件夹内容进行处理
    }, {
      test: /\.css$/,
      use: ["style-loader", "css-loader"]
    }]
  },
  plugins: [htmlWebpackPlugin],
  // 用于配置模块解析的方式和规则
  resolve: {
    // extensions 引入模块可以省略后缀名，alias可以指定别名，例如@代替src
    extensions: [".js", ".jsx"]
  },
  devServer: {
    port: 3001
  }
}
```

#### .babelrc

```json
{
    "presets": [
        "env",
        "react"
    ]
}
```

### 开发测试

#### 开发环境运行

`npm start `

访问`http:127.0.0.1:3001`

### 后续（生产环境/打包发布...）

#### 打包

package.json中添加

`"build": "webpack --mode production"`

#### 测试

`npm install -g http-server`

利用http-server在dist目录下开启一个本地服务器，默认8080端口

http://127.0.0.1:8080



### 参考

https://medium.com/dailyjs/building-a-react-component-with-webpack-publish-to-npm-deploy-to-github-guide-6927f60b3220