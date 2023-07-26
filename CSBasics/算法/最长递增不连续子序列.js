const inputArray = [10, 22, 9, 33, 21, 50, 41, 60, 80]

const longestIncreasingSubSequence = (arr) => {
    const dp = new Array(arr.length).fill(1)
    for (let i = 1; i < arr.length; i++) {
        for (let j = 0; j < i; j++) {
            if (arr[j] < arr[i]) {
                dp[i] = Math.max(dp[i], dp[j] + 1)
            }
        }
    }
    return Math.max(...dp)
}

console.log(longestIncreasingSubSequence(inputArray))