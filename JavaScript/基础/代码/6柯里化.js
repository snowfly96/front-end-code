// 将一个使用多个参数的函数转变成使用多步一个参数的函数的技术

const add = (x, y, z) => {
    return x + y + z
}

// 柯里化
const addCurry = (x) => {
    return (y) => {
        return (z) => {
            return x + y + z
        }
    }
}

// test
console.log(add(1, 2, 3))
console.log(addCurry(1)(2)(3))


// 实现
function _curry () {
    const args = []

    const inner = (...args2) => {
        args2.forEach(item => {
            args.push(item)
        })
        return inner
    }
    inner.toString = function () {
        return args.reduce((pre, cur) => pre + cur)
    }
    return inner
}
const _add = _curry()
console.log(_add(2, 3)(5).toString()) // 默认显示函数对象，需要加toString转化成String类型