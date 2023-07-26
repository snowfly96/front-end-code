const longestSubSequence = (str1, str2) => {
    const len1 = str1.length, len2 = str2.length
    const row = new Array(len2).fill(0)
    const dp = new Array(len1).fill(row)

    // if str1[i]!=str2[j]: dp[i,j]=max(dp[i-1, j], dp[i, j-1])
    // if str1[i]==str2[j]: dp[i,j]=dp[i-1, j-1]+1
    for (let i = 0; i < len1; i++) {
        if (str2[0] == str1[i]) {
            dp[i][0] = 1
            break
        }
    }
    for (let j = 0; j < len2; j++) {
        if (str1[0] == str2[j]) {
            dp[0][j] = 1
            break
        }
    }
    for (let i = 1; i < len1; i++) {
        for (let j = 1; j < len2; j++) {
            if (str1[i] === str2[j]) {
                dp[i][j] = dp[i - 1][j - 1] + 1
            } else {
                dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1])
                // 如果考虑连续，直接dp[i][j]=0；并且在上述记录最长的子串
            }
        }
    }
    return dp[len1 - 1][len2 - 1]
}

console.log(longestSubSequence("abcdefg", "acdfg"))