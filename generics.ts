// 泛型
function echo<T>(arg: T): T {
    return arg
}

// 传入和传出并不相同
// const result: string = echo(123)
// 想要在使用时指定类型，可以看成占位符
const str: string = 'str'
const result = echo(str)
// 等同于const result: string = echo(true)

function swap<T, U>(tuple: [T, U]):[U, T] {
    return [tuple[1], tuple[0]]
}
const result2 = swap(['string', 123])

function echoWithArr<T>(arg: T[]): T[] {
    // 由于事先不知道类型所以无法调用其方法
    console.log(arg.length)
    // 并不完美
    // echoWithArr<T>(arg: T[]): T[]
    // const arrs = echoWithArr([1, 2, 3])
    return arg
}

// 约束：只允许函数传入length属性的变量
const arrs = echoWithArr([1, 2, 3])

interface IWithLength {
    length: number
}

// extends属性约束传入的泛型
function echoWithLength<T extends IWithLength>(arg: T): T {
    console.log(arg.length)
    return arg
}

const str2 = echoWithLength('str')
const obj = echoWithLength({ length: 10, width: 10})
const arr2 = echoWithLength([1, 2, 3])
// 错误案例，number没有length属性：echoWithLength(13)

// 类中的应用
class Queue1 {
    // 队列先进先出
    private data = [];
    push(item) {
        return this.data.push(item)
    }
    pop() {
        return this.data.shift()
    }
}
const queue1 = new Queue1()
queue1.push(1)
queue1.push('str')
// 允许向队列推入任意类型的
// 只有数字类型才会有Fixed方法
// 检查弹出的元素类型，如果是数字，则调用 toFixed() 方法
const item = queue1.pop();
if (typeof item === 'number') {
    console.log(item.toFixed());
} else {
    console.log(item);
}
const item2 = queue1.pop();
if (typeof item2 === 'number') {
    console.log(item2.toFixed());
} else {
    console.log(item2);
}
/** 只有数字类型才有toFixed()方法
    3
    3
    10
    3
    1
    str
 */
// 想要推入和推出队列相同的类型：泛型
class Queue2<T> {
    private data = [];
    push(item: T) {
        return this.data.push(item)
    }
    pop(): T {
        return this.data.shift()
    }
}
const queue2 = new Queue2<number>() // 完美解决
queue2.push(1)
console.log(queue2.pop().toFixed())
interface KeyPair<T, U> {
    key: T
    value: U
}
let kp1: KeyPair<number, string> = { key: 1, value: "string"}
let kp2: KeyPair<string, number> = { key: 'str', value: 2 }
// 1.贴标签
let arr: number[] = [1, 2, 3]
let arrTwo: Array<number> = [1, 2, 3]
// 2.灵活的确定类型
// 3.函数类型推断不会进入函数体内不会明确进行类型绑定