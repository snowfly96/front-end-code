### React和Vue对比

#### 设计思想

**React**

1. MVC框架（model-data，view-UI，control-React）
2. 函数式编程——纯组件（lambda演算）
3. 数据不可变——setState操作新对象
4. 单向数据流——callback实现双向

**Vue**

1. MVVM框架（model-data，view model-view，view-UI）
2. 渐进式框架——自底向上搭积木，要什么拿什么
3. 基于可变数据——getter/setter监听数据变化
4. 支持双向数据流——v-model指派到文本框元素
   + vue2采用Object.defineProperty实现
   + vue3采用Proxy实现

#### 语法编写

**React**

1. jsx-js+xml，即all in js
   + 推荐jsx+inline
   + babel将jsx转化为js（React.createElement）

**Vue**

1. template形式&mustache风格
   + 保留html、csss分离习惯
   + 提供scope/setup

#### 数据绑定

**React**

1. 单向数据流
2. 属性不允许在子组件中修改，状态可以修改
3. setState式异步的（加入异步队列批量处理，可以在setState第二个回调函数参数查看更新后的值）
3. 数据传递：props、callback、provide/context，redux等

**Vue**

1. 数据劫持和发布订阅者模式
   + Object.defineProperty为数据添加gettter和setter
2. 数据变化视图变化、视图变化数据变化
3. 数据修改式异步的，在某个时刻异步更新DOM（$nextTick接受一个回调函数，DOM更新结束回调可以看到更新后的值）
3. 数据传递：props、callbak，provide/inject，eventBus、vuex等

#### 生命周期

**React**

1. componentDidMounted
2. componetDidUpdate
3. componentWillUnmount

**Vue**

1. created
2. mounted哈啊哈
3. destory

#### 状态管理

**React**

1. redux/rematch
2. mobx

**Vue**

1. vuex

#### 虚拟DOM

**React**

1. diff算法
   + react16之前，深度优先递归遍历
   + react16之后，fiber（reconciliation协调赵处需要更新的节点/commit提交到真实的DOM上）

**Vue**

1. diff算法
   + 双端对比（同级比较）

#### 性能优化

**React**

1. pureComponent/shouldComponentUpdate/React.memo
   + shouldComponentUpdate对比之前的props或state和更新之后的nextProps或者nextState
   + pureComponent进行浅比较
   + React.memo/useMemo类似同步的useEffect
2. 列表中添加key
3. fiber
4. million等

**Vue**

1. v-if替代v-show：介绍DOM节点数量
2. computed和watch：缓存计算结果，computed——一对多，watch——对多一
3. v-for中添加key
4. 使用异步组件——按需加载，使用import或者Vue.component()
5. 避免频繁使用过滤器，可以考虑放在computed中
6. keep-alive缓存组件（避免重复的创建和销毁）
7. Object.frezee()方法对不需要进行响应式的数据进行冻结

#### 服务端渲染

**React**

1. Next.js

**Vue**

1. Nuxt.js

#### 组合混入

**React**

1. HOC 高阶组件

**Vue**

1. mixins 注入
