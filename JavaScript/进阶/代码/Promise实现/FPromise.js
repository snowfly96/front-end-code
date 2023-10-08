// callback参数传入的是一个函数,函数两个参数分别为resolve, reject
function FPromise (callback) {
    this.status = 'pending'
    this.data = null
    this.callbacks = []

    const resolve = result => {
        if (this.status === 'pending') {
            this.status = 'fulfilled'
            this.data = result
            setTimeout(() => {
                this.callbacks.forEach(item => {
                    item.onResolved(this.data)
                })
            })
        }
    }

    const reject = result => {
        if (this.status === 'pending') {
            this.status = 'rejected'
            this.data = result
            setTimeout(() => {
                this.callbacks.forEach(item => {
                    item.onRejected(this.data)
                })
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
                    reject(err)
                }
            })
        } else if (this.status === 'fulfilled') {
            setTimeout(() => {
                onResolved(this.data)
            })
        } else if (this.status === 'rejected') {
            setTimeout(() => {
                onRejected(this.data)
            })
        }
    })
}

console.log('start')
const promise = new Promise((resolve, reject) => {
    console.log('hello,01')
    // setTimeout(() => { // pending状态下需要对resolve/reject状态进行保存
    //     resolve('hello, resolve')
    // }, 1000)
    resolve('hello, resolve') // then 回调函数是异步的
    console.log('hello,02')
}).then((val) => {
    console.log(val)
}, (err) => {
    console.log(err)
})
console.log('end')