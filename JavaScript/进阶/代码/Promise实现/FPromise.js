// callback参数传入的是一个函数,函数两个参数分别为resolve, reject
function FPromise (callback) {
    this.status = 'pending'
    this.data = null
    this.callbacks = []

    const resolve = result => {
        console.log(result)
        if (this.status === 'pendding') {
            this.status = 'fulfilled'
            this.data = result
            this.callbacks.forEach(item => {
                item.onResolved(this.data)
            })
        }
    }

    const reject = result => {
        if (this.status === 'pendding') {
            this.status = 'rejected'
            this.data = result
            this.callbacks.forEach(item => {
                item.onRejected(this.data)
            })
        }
    }
    // 执行callback回调函数
    try {
        callback(resolve, reject)
    } catch (error) {
        reject(error)
    }

}

FPromise.prototype.then = function (onResolved, onRejected) {
    if (typeof onResolved !== 'function') {
        onResolved = val => val
    }
    if (typeof onRejected !== 'function') {
        onRejected = err => {
            throw err
        }
    }
    return new Promise((resolve, reject) => {
        if (this.status === 'pending') { // 异步情况下用于存储resolve和reject的值
            this.callbacks.push({
                onResolved: () => {
                    const result = onResolved(this.data)
                    resolve(result)
                },
                onRejected: () => {
                    const err = onRejected(this.data)
                    reject(result)
                }
            })
        } else if (this.status === 'fulfilled') {
            onResolved(this.data)
        } else if (this.status === 'rejected') {
            onRejected(this.data)
        }
    })
}

console.log('start')
const promise = new FPromise((resolve, reject) => {
    console.log('hello,01')
    // setTimeout(() => {
    //     resolve('hello, resolve')
    // }, 1000)
    resolve('hello, resolve')
    console.log('hello,02')
}).then((val) => {
    console.log(val)
}, (err) => {
    console.log(err)
})
console.log('end')