// 数组将同一类型的数据聚合到一起
// 元组（函数式编程）一定程度上限定了数据类型
let arrOfNumbers: number[] = [1, 2, 3]
arrOfNumbers.push(3)

function test() {
    console.log(arguments)
    let htmlCollection: HTMLCollection

    let user: [string, number] = ['viking', 20]
    // 使用方法来添加越界元素（联合类型）
    user.push('123')
}