// Function函数
// 在JS中，函数是一等公民
// 可选参数后不能再添加固定参数
function add(x: number, y: number, z?: number): number {
    if(typeof z == 'number') {
        return x + y + z
    }else {
        return x + y
    }
}

let result = add(1, 2)

// 函数本身也是有类型的
const add1 = (x: number, y: number, z?: number): number => {
    if(typeof z == 'number') {
        return x + y + z
    }else {
        return x + y
    }
}

// 这里的=>不是箭头函数，是声明函数类型返回值的方法
// ts:后与代码逻辑无关而是在声明类型
let add2: (x: number, y: number, z?: number) => number = add1

interface ISum {
    (x: number, y: number, z?: number): number
}
let add3: ISum = add // 也可以完全匹配

// 并没有声明为什么add自动获得了一个类型？：代码推断