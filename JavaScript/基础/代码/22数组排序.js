var cups = [
    { type: 1, price: 100, color: 'black', sales: 3000, name: '牛客logo马克杯' },
    { type: 2, price: 40, color: 'blue', sales: 1000, name: '无盖星空杯' },
    { type: 4, price: 60, color: 'green', sales: 200, name: '老式茶杯' },
    { type: 3, price: 50, color: 'green', sales: 600, name: '欧式印花杯' }
]
var ul = document.querySelector('ul')
var upbtn = document.querySelector('.up')
var downbtn = document.querySelector('.down')
// 补全代码

var update = function () {
    ul.innerHTML = ""
    cups.forEach((item) => {
        let li = document.createElement("li")
        li.innerText = item.name
        ul.appendChild(li)
    })
}
upbtn.onclick = function () {
    cups.sort((x, y) => x.sales - y.sales)
    update()
}
downbtn.onclick = function () {
    cups.sort((x, y) => y.sales - x.sales)
    update()
}