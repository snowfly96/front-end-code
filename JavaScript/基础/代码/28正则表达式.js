/**
 * 正则表达式常用语法
 * 1. 字符类[], 匹配其中任意一个字符，[abcde]
 * 2. 范围类-, 表示匹配其中的任意一个字符[a-z]
 * 3. 量词{}，表示匹配当前字符的次数a{3}
 * 4. 通配符.，表示任意一个字符
 * 5. 转义符号\，表示对特殊字符的转义 \/
 * 6. 分组()，表示其中作为一个整体进行匹配 (ab)
 * 7. ^，即表示排除字符，用在表达式的首位表示字符串的开头 ^ab
 * 8. $，表示结束符号 b$
 * 9. ?, 懒匹配
 */

/**
 * js与正则相关的函数
 * 1. 'str'.test(//) 返回boolean值
 * 2. 'str'.match(//) 匹配到返回一个数组（匹配的字符串、捕获组），没匹配到的话返回null
 * 3. 'str'.replace(//, 'xxx') 用xxx替代匹配到的字符
 * 4. 'str'.search(//) 返回0/1
 * 5. 'str'.split(//) 按照规则拆分
 * 
 * 6. //.exce('str') 匹配到返回一个数组（匹配的字符串、捕获组），没匹配到的话返回null
 */

// 常见的正则表达式
const phone = /^1[3-9]\d{9}/
const email = /^\w+@\w+\.[a-z]+\.[a-z]{2,3}$/


/**
在正则表达式中，通配符用于匹配文本中的字符或字符集合。以下是正则表达式中常用的通配符：

点号 .：
    点号匹配除换行符外的任意单个字符。
    例如，正则表达式 a.b 匹配 "aab"、"acb"、"a#b" 等。

星号 *：
    星号匹配前面的字符零次或多次。
    例如，正则表达式 a*b 匹配 "b"、"ab"、"aab"、"aaab" 等。

加号 +：
    加号匹配前面的字符至少一次或多次。
    例如，正则表达式 a+b 匹配 "ab"、"aab"、"aaab" 等，但不匹配 "b"。

问号 ?：
    问号匹配前面的字符零次或一次。
    例如，正则表达式 colou?r 匹配 "color" 和 "colour"。

大括号 {n}：
    大括号匹配前面的字符恰好 n 次。
    例如，正则表达式 a{3} 匹配 "aaa"，但不匹配 "aa" 或 "aaaa"。

大括号 {n,m}：
    大括号匹配前面的字符至少 n 次，至多 m 次。
    例如，正则表达式 a{2,4} 匹配 "aa"、"aaa" 和 "aaaa"，但不匹配 "a" 或 "aaaaa"。

方括号 []：
    方括号用于匹配括号内的任意一个字符。
    例如，正则表达式 [aeiou] 匹配任意一个小写元音字母。

反向方括号 [^]：
    反向方括号用于匹配除括号内字符之外的任意一个字符。
    例如，正则表达式 [^aeiou] 匹配任意一个非小写元音字母。
 */

/**
 * \w: [A-Za-z0-9]
 * \d: [0-9]
 * \s: 匹配任意空白字符，包括空格、制表符、换行符等
 */