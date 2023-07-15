// flat实现
const _flat = () => {
    const res = []
    const flat = (arr) => {
        arr.forEach(item => {
            if (Array.isArray(item)) {
                flat(item)
            } else {
                res.push(item)
            }
        })
        return res
    }
    return flat
}

const myFlat = _flat()
console.log('flat', myFlat([1, 3, 4, [4, 5, 4]]))

// forEach实现
Array.prototype.mForEach = function (callback) {
    for (let i = 0; i < this.length; i++) {
        callback(this[i], i, this)
    }
}

const testArr1 = [1, 4, 5, 6]
const resArr1 = []
testArr1.mForEach((item, index) => {
    resArr1.push(item * item + index)
})

console.log('forEach', resArr1)

// map实现
Array.prototype.mMap = function (callback) {
    const res = []
    for (let i = 0; i < this.length; i++) {
        res.push(callback(this[i], i, this))
    }
    return res
}
const testArr2 = [1, 4, 5, 6]

console.log('map', testArr2.map(item => 2 * item))

// reduce实现
Array.prototype.mReduce = function (callback, init) {
    init = init === undefined ? this[0] : init
    for (let i = 0; i < this.length; i++) {
        if (init === undefined) {
            init = callback(this[i], this[i + 1], i + 1, this)
            i++
        } else {
            init = callback(init, this[i], i, this)
        }
    }
    return init
}

const testArr3 = [1, 4, 5, 6]
const res3 = testArr3.mReduce((pre, cur) => {
    return pre + cur
}, 6)
console.log(res3)

// 去重复
console.log([...new Set([1, 2, 3, 4, 2, 1, 3])])

// slice/splice/shift/unshift
console.log([2, 4, 4, 5].shift())
console.log([2, 4, 4, 5].unshift(-1))
console.log([2, 4, 4, 5].slice(0, 3))
const testArr4 = [2, 4, 4, 5]
console.log(testArr4.splice(0, 0, -4))
console.log(testArr4)

// indexOf/lastIndexOf
console.log(testArr4.indexOf(4))
console.log(testArr4.lastIndexOf(4));

