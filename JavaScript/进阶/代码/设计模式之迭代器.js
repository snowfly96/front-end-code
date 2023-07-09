class Aggregate {
    constructor() {
        this.data = []
    }
    add (elem) {
        this.data.push(elem)
    }
    [Symbol.iterator] () {
        let index = 0
        const data = this.data
        return {
            next: function () {
                if (index < data.length) {
                    return { value: data[index++], done: false }
                } else {
                    return { done: true }
                }
            }
        }
    }
}
const arr = new Aggregate()
arr.add(1)
arr.add(2)
arr.add(3)
const iter = arr[Symbol.iterator]()
console.log(iter.next())

// 需要实现[Symbol.iterator]方法才能使用for of 方法进行迭代对象，且for of方法定义迭代的方式
for (const a of arr) {
    console.log(a)
}