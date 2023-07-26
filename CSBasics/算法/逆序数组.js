const reverseArr = (arr) => {
    let left = 0
    let right = arr.length - 1
    while (left < right) {
        const temp = arr[left]
        arr[left] = arr[right]
        arr[right] = temp
        ++left
        --right
    }
    return arr
}

console.log(reverseArr([2, 4, 5, 1, 3, 9]))