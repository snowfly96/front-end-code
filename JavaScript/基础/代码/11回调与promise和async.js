const task1 = () => {
    setTimeout(() => {
        console.log(1000)
        setTimeout(() => {
            console.log(2000)
            setTimeout(() => {
                console.log(3000)
            }, 1000)
        }, 1000)
    }, 1000)
}
// task1()

const task2 = () => {
    new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(1000)
            resolve()
        }, 1000)
    }).then(val => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                console.log(2000)
                resolve()
            }, 1000)
        })
    }).then(val => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                console.log(2000)
                resolve()
            }, 1000)
        })
    })
}

// task2()

const task3 = async () => {
    await new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(1000)
            resolve()
        }, 1000)
    })
    await new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(2000)
            resolve()
        }, 1000)
    })
    await new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(3000)
            resolve()
        }, 1000)
    })
}

// task3()


new Promise((resolve, reject) => {
    resolve('first')
}).then(val => {
    console.log('1', val)
    new Promise((resolve, reject) => {
        console.log('dsds')
        setTimeout(() => {
            resolve('ds')
        }, 100)
    }).then(value => {
        console.log('end')
    })
    return 2
}).then(val => {
    console.log('2', val)
})