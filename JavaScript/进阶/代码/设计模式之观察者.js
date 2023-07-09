class Subject {
    constructor() {
        this.message = 'snow'
        this.observers = []
    }
    addObservers (observer) {
        this.observers.push(observer)
    }
    removeObservers (key) {
        this.observers.forEach((item, index) => {
            if (item.key === key) {
                this.observers.splice(index, 1)
            }
        })
    }
    setMessage (message) {
        this.message = message
        this.notify()
    }
    getMessage () {
        return this.message
    }
    notify () {
        this.observers.forEach(observer => {
            observer.update(this.message)
        })
    }
}

class Observer {
    constructor(key) {
        this.key = key
    }
    update (message) {
        console.log(`hello, ${this.key}, new message is ${message}.`)
    }
}

const sub = new Subject()
const obs1 = new Observer('snow')
sub.addObservers(obs1)
const obs2 = new Observer('fly')
sub.addObservers(obs2)
const obs3 = new Observer('zr')
sub.addObservers(obs3)
const obs4 = new Observer('tom')
sub.addObservers(obs4)
const obs5 = new Observer('jack')
sub.addObservers(obs5)

sub.removeObservers('tom') // 删除tom
sub.setMessage('$app$')

// React案例
// UI->dispatch(action)->store->reducer(state)->UI
class Store {
    constructor(reducer, initState) {
        this.state = initState // 初始状态
        this.reducer = reducer // 状态修改函数
        this.observers = [] // 观察者集合
    }
    // 获取最新状态
    getState () {
        return this.state
    }
    // 观察者订阅
    subscribe (observer) {
        this.observers.push(observer)
    }
    // 更新状态
    dispatch (action) {
        this.state = this.reducer(this.state, action)
        // 通知所有订阅者更新状态
        this.observers.forEach(item => {
            item.update(this.state)
        })
    }
}

const initState = 0
const reducer = (state, action) => {
    switch (action) {
        case 'INC':
            return state + 1
        case 'DES':
            return state - 1
        default:
            return state
    }
}

const store = new Store(reducer, initState)
const sub1 = new Observer('snow')
const sub2 = new Observer('fly')
store.subscribe(sub1)
store.subscribe(sub2)

store.dispatch('INC')
store.dispatch('INC')
store.dispatch('DES')

