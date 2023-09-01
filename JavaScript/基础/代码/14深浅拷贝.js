const arr = [1, 2, 3, [4, 5, 6], [22, 33]]
const person = {
    name: 'tom',
    age: 32,
    children: {
        name: 'jake',
        age: 5,
        other: [2, 4, 5]
    },
    other: [1, 2, 3]
}
Object.prototype.country = 'china'
console.log(person.__proto__)
for (let key in person) { // 遍历所有可枚举属性， 属性enumerable是否为true表示可枚举
    console.log('可枚举', key)
    if (person.hasOwnProperty(key)) {
        console.log('自身', key)
    }
}
// 浅拷贝值复制第一层属性，深层的仍然公用
const shallowCopy = (obj) => {
    if (typeof obj !== 'object') return
    const newObj = obj instanceof Array ? [] : {}
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            newObj[key] = obj[key]
        }
    }
    return newObj
}

// 对象浅拷贝
console.log(shallowCopy(person))
console.log(Object.assign({}, person))
// 数组浅拷贝
console.log(shallowCopy(arr))
console.log([...arr])
console.log(arr.slice())
console.log(arr.concat())



const deepCopy = (obj) => {
    if (typeof obj !== 'object') return
    function inner (obj, tempObj) {
        for (let key in obj) {
            if (obj.hasOwnProperty(key)) {
                if (typeof obj[key] === 'object') {
                    tempObj[key] = obj[key] instanceof Array ? [] : {}
                    inner(obj[key], tempObj[key])
                } else {
                    tempObj[key] = obj[key]
                }
            }
        }
        return tempObj
    }
    return inner(obj, obj instanceof Array ? [] : {})
}

const _deepCopy = (obj) => {
    const tempObj = obj instanceof Array ? [] : {}
    if (obj instanceof Array) {
        for (let key of obj) {
            if (key instanceof Array) {
                tempObj.push(_deepCopy(key))
            } else {
                tempObj.push(key)
            }
        }
    } else {
        for (let key in obj) {
            if (obj.hasOwnProperty(key)) {
                if (typeof obj[key] === 'object') {
                    tempObj[key] = _deepCopy(obj[key])
                } else {
                    tempObj[key] = obj[key]
                }
            }
        }
    }
    return tempObj
}

// 对象深拷贝
const newPerons1 = JSON.parse(JSON.stringify(person))
console.log(newPerons1)

const newPerson2 = deepCopy(person)
console.log(newPerson2)

const newPerson3 = _deepCopy(person)
console.log(newPerson3)