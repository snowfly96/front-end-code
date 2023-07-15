const Logger = (function () {
    let instance = null
    return {
        name: 'single logger',
        getLogger () {
            if (!instance) {
                instance = new Object()
            }
            return instance
        }
    }
})()

const log1 = Logger.getLogger()
const log2 = Logger.getLogger()

console.log(log1 === log2) // true


class Log {
    constructor() {
        if (!Log.instance) {
            this.name = 'logger'
            Log.instance = this
        } cha
        return Log.instance
    }
}

const instance1 = new Log()
const instance2 = new Log()

console.log(instance1 === instance2) // true