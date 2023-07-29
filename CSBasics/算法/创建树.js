// 1. 定义节点
function Node (value) {
    this.value = value
}

// 2. 查创建树
function createTree (arr, i) {
    if (i >= arr.length) {
        return null
    }
    const root = new Node(arr[i])
    root.left = createTree(arr, 2 * i + 1)
    root.right = createTree(arr, 2 * i + 2)
    return root
}

const testArr = [1, 2, 3, 4, 5, 6, 7, 8]

const tree = createTree(testArr, 0)
console.log(tree)

// 遍历树-递归
// 先序
const preArr = []
function preTraverse (root) {
    if (root === null) {
        return
    }
    preArr.push(root.value)
    preTraverse(root.left)
    preTraverse(root.right)
}
preTraverse(tree)
console.log(preArr)

// 中序
const midArr = []
function midTraverse (root) {
    if (root === null) {
        return
    }
    midTraverse(root.left)
    midArr.push(root.value)
    midTraverse(root.right)
}
midTraverse(tree)
console.log(midArr)

// 后序
const postArr = []
function postTraverse (root) {
    if (root === null) {
        return
    }
    postTraverse(root.left)
    postTraverse(root.right)
    postArr.push(root.value)
}
postTraverse(tree)
console.log(postArr)

// 遍历树-深度优先
// 先序遍历

// 遍历树-广度优先
let que = []

let cur = tree
que.push(cur)

while (que.length) {
    cur = que.shift()
    console.log(cur.value)
    if (cur.left) {
        que.push(cur.left)
    }
    if (cur.right) {
        que.push(cur.right)
    }
    // 多叉树采用for循环遍历
}