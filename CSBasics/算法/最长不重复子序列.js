const longestUnique = (str) => {
    const charMap = {}
    let start = 0
    let res = 0
    for (let i = 0; i < str.length; i++) {
        if (charMap[str[i]] >= start) {
            start = charMap[str[i]] + 1
        }
        charMap[str[i]] = i
        res = (i - start + 1) > res ? (i - start + 1) : res
    }
    console.log(res)
}

longestUnique('asfddgdessasds')