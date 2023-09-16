**绘图方式**

1. canvas是位图绘图技术，采用js脚本绘制像素，将图像绘制到画布上，一旦绘制完成，不容易修改或者编辑，放大会失真——==依赖分辨率==
2. svg是一种矢量图形绘图技术，使用xml格式来描述图形，可以在任何尺寸下进行缩放不失真（数学方式进行描述）——==不依赖分辨率==

**性能和复杂性**

1. canvas：处理大量像素或者复杂图形时性能比较高
2. svg：处理复杂图形代码更少，基于矢量的，处理大量的小图形或像素级别操作，性能不如canvas

**交互性**

1. canvas：交互性比较低，需要手动处理交互操作，如鼠标点击事件
2. svg：对交互性比较友好，可以给svg元素添加事件处理函数，，例如点击悬停操作

**文本渲染**

1. canvas：文本渲染比较麻烦，需要==手动控制文本的位置和样式==
2. svg：渲染文本更加容易，可以==直接在svg中添加文本元素==

**兼容性问题**

1. canvas：在现在浏览器中有比较好的兼容性，但是对于旧的浏览器可能不够稳定
2. svg：在大多数现在浏览器中都有比较好的兼容性，包括旧的浏览器

**事件模型**

1. svg的每个子svg的元素都是文档对象,可以直接添加事件监听器

   ```html
   <!DOCTYPE html>
   <html>
   <head>
     <title>SVG Click Event</title>
   </head>
   <body>
     <svg width="200" height="200" xmlns="http://www.w3.org/2000/svg">
       <circle id="myCircle" cx="50" cy="50" r="20" fill="blue" />
     </svg>
   
     <script>
       const circle = document.getElementById('myCircle');
       // 直接对svg内部的circle元素进行事件绑定和监听
       circle.addEventListener('click', function() {
         if (circle.getAttribute('fill') === 'blue') {
           circle.setAttribute('fill', 'red');
         } else {
           circle.setAttribute('fill', 'blue');
         }
       });
     </script>
   </body>
   </html>
   
   ```

2. canvas是一个绘图区域,canvas画布下绘制的图形没有自己的事件模型,要在canvas上处理事件,通常依赖页面的全局事件模型,比如鼠标事件和键盘事件,并使用坐标检测来判断事件是否发生在canvas上的特定区域

   ```html
   <!DOCTYPE html>
   <html>
   <head>
     <title>Canvas Click Event</title>
   </head>
   <body>
     <canvas id="myCanvas" width="400" height="400" style="border:1px solid black;"></canvas>
   
     <script>
       const canvas = document.getElementById('myCanvas');
       const ctx = canvas.getContext('2d');
       
       // 绘制一个矩形
       ctx.fillStyle = 'blue';
       ctx.fillRect(100, 100, 100, 100);
   		
       // 只能通过全局的canvas来进行监听,判断是否矩形被点击了
       canvas.addEventListener('click', function(event) {
         // 获取鼠标点击位置的坐标
         const x = event.clientX - canvas.getBoundingClientRect().left;
         const y = event.clientY - canvas.getBoundingClientRect().top;
         
         // 检测点击事件是否发生在矩形内部
         if (x >= 100 && x <= 200 && y >= 100 && y <= 200) {
           alert('您点击了矩形！');
         }
       });
     </script>
   </body>
   </html>
   ```

#### 特点

**svg**

1. 不依赖分辨率
2. 支持事件处理
3. 适合大型渲染区域的应用程序(谷歌地图)
4. 复杂度高会减慢渲染速度
5. 不适合游戏应用

**canvas**

1. 依赖分辨率
2. 不支持事件处理
3. 若文本渲染能力
4. 适合图像密集的游戏,对象被频繁重绘

