const _permute = string => {
    // 补全代码
    let res = []
    function permute (string, ans) {
        if (string === "") {
            res.push(ans)
        }
        for (let i = 0; i < string.length; i++) {
            permute(string.replace(string[i], ""), ans + string[i])
        }
    }
    permute(string, "")
    return res
}