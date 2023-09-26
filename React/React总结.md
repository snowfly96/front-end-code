React用于构建前端用户界面的JavaScript框架,其设计思想有那么几个关键词:MVC框架、组件化、虚拟DOM等…

UI=F(state)

### 设计思想

1. MVC框架——(model-data,view-UI,control-React)
2. 函数式编程——纯组件(lambda演算)
3. 数据不变性——setState操作新对象
4. 单向数据流——callback实现双向



### 语法编写

jsx-js+xml，即all in js

+ 推荐jsx+inline
+ babel将jsx转化为js（React.createElement）



### 数据绑定

1. **单向数据流:**父组件通过props将参数传递给子组件,如果需要反向传递必须使用callback函数
2. 属性==props不允许直接在子组件中修改==,子组件自身的状态可以修改
3. setState是**异步**的(加入异步队列中批量处理,可以在setState第二个回调函数参数重查看更新后的值)
4. 数据传递:props、callback、provide/context、redux等



### 事件机制

#### 原生事件

**触发流程**

1. 事件捕获

   触发某个元素的事件,顶层document就会触发一个事件,随着DOM往子节点波及,直到到达真正触发事件的目标元素

2. 事件目标

   触发事件的真正元素

3. 事件冒泡

   从真正触发事件的目标元素,往顶层document进行传播

**事件委托**

将一个事件委托到另外一个元素,当子节点被点击之后,事件会往上冒泡,父节点捕获到事件之后,然后进行处理,减少动态内存消耗和动态事件绑定

#### React事件

react事件机制是基于原生机制完成的,包括事件注册、事件合成、事件冒泡和事件派发等

react上的事件都叫做合成事件,是用来模拟原生dom上的所有能力的事件对象(==提升性能、兼容性好、对开发者友好==)

**原理:** react事件并没有绑定到具体的dom节点上,而是绑定在document上,然后交给统一的事件处理程序进行触发,同时基于浏览器的事件冒泡都是在document上进行触发

**流程:**

1. jsx中绑定事件,没有==注册到真实的dom==上,而是==绑定到document上进行统一管理==
2. 真实的dom上的事件==被react单独处理替换成空函数==
3. react并不是开始就将所有事件都绑定到document上,而是==按需绑定==,那个dom元素事件被触发,就将该元素的事件绑定到document上

可以通过e.nativeEvent获取原生的事件对象

#### React合成事件池

是react的一种优化技术,==提高性能和减少内存消耗==**,合成事件池的核心思想**在与一些事件被访问之后,这些事件对象重置并放回到池中供后续使用,而不是立即销毁它们(减少垃圾回收所消耗的时间)

1. **事件重用:**事件执行完毕,时间对象返回到事件池中
2. **只读属性:**合成事件对象的属性是可读的,为了确保处理函数过程中不会意外的修改事件对象属性
3. **异步访问:**由于事件对象可能被异步访问,react事件池来防止事件对象在处理期间被修改
4. **减少内存:**合成事件减少了创建新事件的需求,从而减少了内存的消耗



### 生命周期

#### Mounting（挂载阶段）

关键生命周期函数componentDidMount，组件挂载到DOM后调用

1. constructor：组件实例化时调用，用于初始化状态和绑定方法
2. static getDerivedStateFromProps；在组件实例化和更新阶段调用，用于根据新的属性值更新更新状态
3. render：根据组件状态和属性生成虚拟DOM
4. componentDidMount：组件挂载到DOM后调用，可以执行一些异步操作、订阅事件等

#### Updating（更新阶段）

关键生命周期函数componentDidUpdate，组件更新时执行

1. static getDerivedStateFromProps: 在组件实例化和更新阶段调用，用于根据新的属性值更新更新状态
2. shouldComponentUpdate：组件更新时调用，决定是否重新渲染组件
3. render：根据组件状态和属性生成虚拟DOM
4. getSnapshotDidBeforeUpdate：组件更新之前调用，用于获取更新前的DOM信息
5. componentDidUpdate：组件更新之后调用，用于进行一些异步操作、网络请求等

#### Unmounting（卸载阶段）

1. componentWillUnmount：组件从DOM中卸载前调用，可以进行一些清理操作，比如取消订阅、清除定时器等

#### Error Handing（错误处理阶段）

1. static getDerivedStateFromError：在子组件抛出错误时调用，用于更新组件状态
2. componetDidCatch: 在子组件抛出错误后调用，用于记录错误信息、发送错误报告等



### 状态管理

#### 自身维护状态

1. 对于类组件,通过this.state来对组件内部的状态就行维护,this.setState修改组件的状态
2. 对于函数组件,通过钩子函数useState将react统一维护的状态钩入函数内部

#### 组件间共享状态

1. 通过createContext()在组件组件中创建共享状态
2. 在子组件中使用useContext()使用祖先组件创建的状态

#### 状态管理工具-redux/rematch

**应用场景**

1. 在遇到react组件没法通信的问题,再使用redux
2. 多交互、多数据源的情况
3. 某个组件的状态需要共享
4. 某个组件可以更改全局状态
5. 组件之间有频繁的通信

**设计思想**

1. web是一个状态机,视图与状态是对应的
2. 所有状态都保存在一个对象里面

**基本原理**

**action**-用于描述组件发生什么动作的对象

**dispatch**-用户派发修改UI的action的函数

**reducer**-store用于将state更新到UI上的函数

**store**-这个那个程序的状态/对象树保存在store



### 路由管理

#### 路由需求

1. 当浏览器地址发生变化，切换页面或更新视图
2. 点击浏览器前进和后退，网页内容发生变化
3. 刷新浏览器，页面加载当前的地址对应的内容

#### 预备知识

##### 历史状态管理

历史记录管理是web开发程序中非常难的环节，用户每次点击都会触发刷新的时代已经过去，最开始用于解决这个问题就是利用onhashchange事件监听==location.hash==的变化，后面为了方便状态管理，html5添加了**history**对象

##### location对象

location对象是DOM中最有用的对象之一，提供当前窗口中加载文档的信息，以及通常的导航功能，保存了url中各类信息和离散片段

假设当前URL：http://foouser:barpassword@www.wrox.com:80/WileyCDA/?q=javascript#contents，对应的location属性如下

<img src="/Users/snowfly96/Documents/GitHub/front-end-code/React/assets/image-20230903103707557.png" alt="image-20230903103707557" style="zoom:50%;" />

**url解析**

1. getQueryStringArgs 利用正则或者search获取参数
2. new URLSearchparams(qs) 对象获取参数

**操作location属性**

1. location.assign(‘http://www.xxx.com’)
2. window.location=‘http://www.xxx.com’
3. location.href=‘http://www.xxx.com’ （最常用）

除了直接修改href之外，其他的hash、search、hostname、pathname也可以直接修改

==除了hash之外，只要修改location中的一个属性，就会导致页面的重新加载==

直接修改url之后，历史记录就会增加相应的记录，使用replace方法重新加载不会增加历史记录，直接替代

最后一个修改地址的方法是reload()，它能够重新加载当前显示的页面

```js
location.reload() //重新加载，可能是从缓存中进行加载
location.reload(true)// 重新加载，从服务器中进行加载
```

##### history对象

==history的修改不刷新页面==

history对象表示当前窗口首次使用以来的导航历史记录，出于安全考虑，这个对象不会暴露用户访问过的url，但是可以通过它不知道url的情况前进或后退

常用API:

1. history.go(1)
2. history.back()
3. history.forward()
4. history.pushState() 添加新的历史记录
5. history.replaceState() 替代当前的历史记录，不会增加历史记录
6. length: 记录历史记录中有多少条目
7. state：当前状态对象

history的pushState方法执行之后，状态信息被推到历史记录中。浏览器地址栏也会改变反映新的url/location.href值也更新为新的，但是页面不会刷新，不会向服务器发送请求

#### HashRouter与BrowserRouter

##### HashRouter

原理是使用window.location.hash属性和window.onhashchange事件,监听浏览器hash值的变化,然后执行js进行网页切换

1. hash散列值不会随着请求发送到服务端,因此改变hash,不会加载界面
2. 监听onhashchange事件,hash改变时,可以通过window.location.hash来获取hash值
3. 将hash值的变化修改浏览器地址栏中

hashrouter使用的url哈希值，刷新之后state参数丢失

##### BrowserRouter

表示当前窗口的浏览历史,页面改变不会刷新界面

browserRouter调用的hisotory，低版本兼容，state报错在history对象中

[掘金参考](https://juejin.cn/post/7030973301698592804)



### 虚拟DOM

react的虚拟DOM核心在diff算法(对真实dom的模拟和抽象,便于diff对边更新前后的变化,提升性能)

1. 节点复用(核心)——调整节点的位置远比删除节点啊再创建的事件节省得多
2. 高效的diff算法——快速找到新旧DOM树的差异

#### Diff算法

**React 16之前**

采用深度优先递归遍历的方法对比新旧虚拟DOM树,遍历找出所有差异性节点,然后进行统一更新

传统的对比方法算法复杂度$O(n^3)$,对树A的每个节点,遍历树B的所有节点,该过程O(n),如果找到需要修改、插入或者删除的O(n),对A树所有节点进行遍历对比

**为什么不采用广度优先搜索?**

1. 采用广度优先搜索会导致react组件的生命周期紊乱
2. react的生命周期顺序是:父组件componentWillMount——子组件componentWillMount——子组件componentDidMount——父组件componentDidMount,采用深度优先能够完美复现react 15的生命周期顺序
3. 例如,一个虚拟dom需要渲染暂停,一般得把最底层的虚拟dom暂停了之后再暂停,没有理由先渲染兄弟组件

**diff 三级对比策略**

最基本步骤:简单对比出新旧DOM树哪些需要修改、删除和增加,然后统一执行相应的修改、删除和增加

1. tree diff层级对比

   + 通过updateDepth对整个虚拟DOM进行层级控制
   + 两个树只对统一各层级节点进行比较,如果节点不存在,则该节点及其子节点完全被删除,不再进行比较

2. component diff

   + 同类型的两个节点,按照层级层级策略对比虚拟DOM即可

   + 同类型的两个组件,组件A变成组件B,可能虚拟DOM没有变化,通过shouldComponentUpdate来判断是否需要重新计算
   + 对同类型的组件,将一个要改变的组件判断为dirty component,替换该组件所有节点

3. element diff

   + 对于同一层级的一组子节点,通过唯一个可以进行区分
   + 提供三种节点操作:删除、插入和移动

**react 16之后**

为了不让递归遍历寻找所有的更新节点太大而占有浏览器资源，升级为fiber结构，将时间分片，增量进行更新

react15之前的diff算法是同步的，会占用主线程资源，在遍历大型的dom树的时候容易阻塞主线程，导致卡顿，fiber则将diff对比渲染过程分为多个时间片，每个时间片都可以被打断来执行优先级更加高的任务，快速的响应用户的输入和交互等

每个fiber节点都包含了组件的状态、属性、子节点等信息，同时还包含了指向父节点、子节点、兄弟节点的指针（保存状态才能被打断，浏览器内核空闲的时候在拿出来执行）



### 服务器渲染

Next.js是一个基于react的轻量级框架，可以帮助开发这快速搭建SSR（服务端渲染）客户端应用，框架能力

1. 服务器渲染
2. ==自动代码分割==
3. ==预取和预加载==
4. 客户端渲染
5. 静态文件生成

**服务端渲染**

当一个用户请求一个页面的时，next会在服务端渲染页面，将渲染的内容返回给客户端

1. 提高页面的加载速度
2. 提高SEO（搜索引擎优化效果）
3. 自带数据同步（服务端和客户端数据同步）
4. 灵活配置和丰富的插件

**自动代码分割**

next会自动将页面组件和依赖的模块分割成多个小块，从而提高页面的加载速度和性能

**预取和预加载**

next自动预取和预加载页面，从而提高页面的加载速度和用户体验

**客户端渲染**

当用户与页面进行交互时候，next会在客户端渲染页面，并且使用虚拟DOM来更新页面

**静态文件服务**

可以讲静态文件缓存在客户端，提高页面的性能和加载速度

在public文件里创建静态文件，在组件中使用图片

getServerSideProps

getStaticProps&getStaticPaths

**路由**

pages是next中重要的概念，直接通过文件目录和js文件来生成

```jsx
<Link href="/about"><a></a></Link> // 进行路由跳转,必须添加a标签
<Button onClick={()=>router.push('/about')}></Button> // router进行跳转
```

next路由跳转通过query(高阶组件withRouter包裹组件,进行传递)传递参数,跳转到页面通过props.query获取一个页面上传递过来的数据

**路由钩子函数**

Router.events.on 监听路由变化

1. routerChangeStart
2. …总共六个钩子函数

**获取数据**

推荐使用axios获取,getInitialProps(context):

1. 在服务端渲染和客户端导航时都会执行的异步函数,用于获取组件所需要的初始数据.该函数接受一个context参数,包含路由信息、请求信息等上下文信息.
1. 在服务端渲染时,该组件会在渲染组件之前执行,将获取到的数据作为props传递给组件,在客户端挂载之前执行,将获取得到数据作为props传递给组件

**备注**

**服务端编译的时候会执行:**constructor和render函数用于生成html,不会执行componentDidMount(在组件被挂载到DOM树上才会被执行)

**客户端编译的时候会执行:**客户端将html解析并渲染到DOM树上,组件被挂载到DOM会执行constructor、render、componentDidMount



### 性能优化

#### 原则

1. 控制渲染更新的波及范围（==更新该更新的，不该更新的不更新==）
   + million.js：静态分析和脏检查
   + React.memo/pureComponent/shouldComponentUpdate：对比前后的props，确定是否进行更新
2. 控制更新的优先级（==优先更新重要的，其次更新不重要的==）
   + 用户输入>垃圾回收
3. 大任务分片（==防止阻塞主线程，可以中断让出线程资源，通过调度器进行调度==）
   + fiber：return和silibing指针（generator无法恢复状态，async/await具有传染性）
4. 异步调度（==空闲时执行==）
   + setState、useEffect：放入任务队列
   + requestIdleCallback：空闲执行优先级低的任务

#### 控制渲染更新波及范围

**million.js**

国外高中生实现的mollion.js打破React性能极限

融入块虚拟DOM，将应用程序动态部分的内容提取出来并进行跟踪，当状态发生变化的时候，只对状态变化的部分进行diff操作

1. 静态分析：对虚拟DOM进行性能分析，将树中动态的部分提取出来
2. 脏检查： 对比状态（数据比DOM树小得多），如果状态变化了，再进行更新

适用场景：静态内容多，动态内容少

**React.memo/pureComponent/shouldComponentUpdate**

三种方式都是防止不必要的子组件更新渲染

1. React.memo

   是react中的高阶组件，它与React.pureComponent非常相似，但它适用于函数组件，不适用于类组件

   默认情况下，只是对复杂数据做浅层的比较，如果想要控制对比过程，可以传入第二个参数自定义对比规则

2. pureComponent

   在对比之前的props和新的props是浅比较，内存地址没有变那么就不会更新

   react和redux中也一直强调，state是不可变的，不能直接修改当前的状态，要返回一个新的修改后状态对象

3. shouldComponentUpdate

   第一个参数是新传入的nextProps，通过与旧的this.props进行对比，确定组件是否需要更新

   第二个参数是新的state，如果两次state没有发生变化就不更新渲染

#### 控制更新的优先级

react的任务优先级通过调度器实现，调度器会根据任务优先级来确认任务的执行顺序

1. immediate：最高优先级，处理紧急任务，例如用户输入、动画等
2. userBlocking：次高优先级，处理用户交互相关的任务，例如点击、滚动等
3. normal：普通优先级，处理一般的任务，例如数据更新、网络请求等
4. low：低优先级，处理不紧急的任务，例如预加载、后台计算等
5. Idle：最低优先级，处理空闲时执行的任务，例如垃圾回收、缓存清理等

#### 大任务分片

1. 大任务分片，避免阻塞主线程
2. 将小任务加入队列，空闲时间执行

#### 异步调度

react根据任务优先级和调度策略对任务进行调度

1. setState：会在组件更新状态的时候，将更新任务加入任务队列中，在下次空闲中执行；如果有多个setState，将会合并成一个任务
2. useEffect：与setState一样，会被加入任务队列中，在下次空闲状态中执行，多个useEffect会合并成一个
3. requestIdleCallback：通过该函数注册空闲时任务，react可以将空闲的任务加入队列中，空闲任务优先级比较低，适合执行一些不紧急的任务，例如垃圾回收，缓存清理等
4. setTimeout和setInterval函数：通过setTimeout和setInterval函数注册定时任务，react会将定时任务加入到队列中，并在指定时间内后执行，定时任务优先级比较低适合执行一些周期性的任务，例如轮播图、动画效果等

#### 升级fiber架构

为了不让递归遍历寻找所有的更新节点太大而占有浏览器资源，升级fiber结构，时间分片，增量进行更新

react15之前的diff算法是同步的，会占用主线程资源，在遍历大型的dom树的时候容易阻塞主线程，导致卡顿，fiber则将diff对比渲染过程分为多个时间片，每个时间片都可以被打断来执行优先级更加高的任务，快速的响应用户的输入和交互等

每个fiber节点都包含了组件的状态、属性、子节点等信息，同时还包含了指向父节点、子节点、兄弟节点的指针（保存状态才能被打断，浏览器内核空闲的时候在拿出来执行）

#### Diff算法

基本思想：逐层比较、统一更新



### 组合混入

**HOC高阶组件**,是一个函数,它接受一个**组件作为参数**,并返回一个新的组件.它用于封装、增强或修改现有组件的功能.

```jsx
// 高阶组件示例
function withLogger(WrappedComponent) {
  return class extends React.Component {
    componentDidMount() {
      console.log(`Component ${WrappedComponent.name} has mounted.`);
    }
    render() {
      return <WrappedComponent {...this.props} />;
    }
  };
}

// 使用高阶组件
const EnhancedComponent = withLogger(MyComponent);
```



### 钩子函数

用于拓展函数组件功能,当函数组件需要外部功能或者执行副作用时,将利用钩子函数将外部代码钩进来,达到用函数组件实现类组件的功能

1. **useState:** 将react统一维护的状态从函数组件外部钩进来,作为自身的状态
2. **useEffect:** 可以在函数组件中执行副作用(用来模拟类组件中声明周期函数)
   + 返回值是一个函数,用于做一些清理工作
   + 第二个参数表示依赖,不输入则会每次组件渲染都会执行,输入[],则第一次执行,输入[params]依赖项则依赖变化执行
3. **useLayoutEffect:** useEffect在组件更新挂载完成->浏览器dom绘制完成->执行useEffect, useLayout在组件挂载完成就执行,然后浏览器再执行绘制dom
4. **useContext:** 用于访问react上下文,允许组件在上下文中共享数据
5. **useMemo:** 用于性能优化,缓存计算结构,避免不必要的重新计算或者重新渲染
6. **useCallback:** 用于性能优化,缓存函数,避免不必要的计算和重新渲染
   1. **useRef:** 组件更新后仍然保存的是同一个引用,区别于createRef()




### 单页面应用优缺点

#### 优点

1. **流畅的用户体验：**使用前端路由进行页面导航，可以无感刷新页面，实现快速页面切换
2. **快速加载：**SPA只在首次初始化加载页面（较慢），之后只是加载数据或者组件，后续页面切换加载数据很快
3. **模块化开发：**组件化模块化开发，有利于团队协作、代码重用和维护
4. **离线访问：**通常SPA只加载一次，并且可以缓存资源，更加容易实现离线访问

#### 缺点

1. **首屏加载时间比较长：**SPA需要一次性加载所有的js、css和其他资源文件，加载的时间比较长，在老设备和网络不好的地方性能不好
2. **浏览器兼容性：**某些旧的浏览器可能不支持一些SPA所使用的web技术（es6），因此需要polyfill补丁和兼容性处理
3. **SEO优化难度：**SPA在客户端生成内容，而不是服务端生成，所以对于搜索引擎优化比较复杂
4. **浏览器历史管理：**需要使用history进行历史记录管理等等



### 多页面优缺点

#### 优点

1. **SEO友好：**每个页面都有自己URL内容
2. **性能控制：**每个页面单独加载的，所以可以更加精确的控制每个页面的性能和加载时间
3. **降低前端的复杂性：**没有复杂的路由管理和历史记录管理，复杂性降低

#### 缺点

1. **页面切换反应慢：**每个页面都需要单独加载，所以在网络不好的情况下，页面切换体验不好
2. **较高的维护成本：**每个页面都需要独立的html模版
3. **不方便状态的统一管理：**页面独立，各个页面之间的状态不容易共享
