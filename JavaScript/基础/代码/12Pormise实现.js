// Promise.resolve使用
Promise.resolve('gege').then(val => {
    console.log(val)
})
Promise.resolve(() => { // resolve 函数
    return 'hello'
}).then(val => {
    console.log(val)
})
// Promise.reject使用
Promise.reject('get').then(val => {
    console.log('gg')
}).catch(err => {
    console.log('ee')
})

// Promise.all 使用
const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('成功1')
    }, 1000)
})
const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('成功2')
    }, 500)
})
Promise.all([promise1, promise2]).then(val => {
    console.log(val)
})

// Promise.race 使用
Promise.race([promise1, promise2]).then(val => {
    console.log(val)
})

// --------------实现--------------
Promise._resolve = function (val) {
    if (val instanceof Promise) {
        return val
    }
    return new Promise(resolve => resolve(val))
}

Promise._reject = function (error) {
    if (error instanceof Promise) {
        return val
    }
    return new Promise((resolve, reject) => reject(val))
}

Promise._all = function (promises) {
    if (!Array.isArray(promises)) {
        throw new Error("Params type error!")
    }
    return new Promise((resolve, reject) => {
        const res = []
        promises.forEach(promise => {
            promise.then(val => {
                res.push(val)
                if (res.length === promises.length) {
                    resolve(res)
                }
            }).catch(err => {
                reject(err)
            })
        })
    })
}

Promise._all([promise1, promise2]).then(val => {
    console.log('_all', val)
})
Promise.all([promise1, promise2]).then(val => {
    console.log('all', val)
})


Promise._race = function (promises) {
    if (!Array.isArray(promises)) {
        throw new Error('Params type error')
    }
    return new Promise((resolve, reject) => {
        promises.forEach(promise => {
            promise.then(val => {
                resolve(val)
            }).catch(err => {
                reject(err)
            })
        })
    })
}

Promise._race([promise1, promise2]).then(val => {
    console.log('_race', val)
})

const promise3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject('error')
    }, 1000)
})

Promise._allSettled = function (promises) {
    if (!Array.isArray(promises)) {
        throw new Error('Params type error')
    }
    return new Promise((resolve, reject) => {
        const res = []
        promises.forEach(promise => {
            promise.then(val => {
                res.push({
                    status: 'fulfilled',
                    val
                })
            }).catch(err => {
                res.push({
                    status: 'rejected',
                    reason: err
                })
            }).finally(() => {
                if (res.length === promises.length) {
                    resolve(res)
                }
            })
        })
    })
}
Promise._allSettled([promise1, promise2, promise3]).then(val => {
    console.log('_allSettled', val)
})
Promise.allSettled([promise1, promise2, promise3]).then(val => {
    console.log('allSettled', val)
})