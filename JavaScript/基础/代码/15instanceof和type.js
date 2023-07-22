// instanceof 如果target的原型在instance的原型链上就返回true
const _instance = (instance, target) => {
    let pointer = instance
    while (pointer) {
        if (pointer == target.prototype) {
            return true
        } else {
            pointer = pointer.__proto__
        }
    }
    return false
}

const a = 'f'
console.log(_instance(a, String))
console.log(_instance(a, Number))
console.log(typeof a)