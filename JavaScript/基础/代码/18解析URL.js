let url = "https://www.google.com/search?q=hello&newwindow=1&rlz=1C5CHFA_enUS988US988&sxsrf=AJOqlzVB"
let parseUrl = (url) => {
    let mJson = {}
    let arr = url.substr(url.indexOf('?') + 1).split('&')
    arr.forEach(elem => {
        let temp = elem.split('=')
        mJson[temp[0]] = temp[1]
    })
    return mJson
}

const _parseURL = (url) => {
    const paraStr = /.+\?(.+)$/.exec(url)[1]
    const paraArr = paraStr.split('&')
    let urlObj = {}
    paraArr.forEach(item => {
        let [key, val] = elem.split('=')
        val = decodeURIComponent(val)
        if (!urlObj.hasOwnProperty(key)) {
            urlObj[key] = val
        }
    })
    return urlObj
}
console.log(parseUrl(url));


