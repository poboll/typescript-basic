// type inference：TS会在没有明确指定类型时自动类型推断
let str = 'str'
// 不能将类型number分配给类型string
// str = 123

// union types
let numberOrString: number | string
numberOrString = 'abc'
numberOrString = 123

function getLength1(input: string | number): number {
    // type asserts类型断言
    const str = input as string
    if(str.length) {
        return str.length;
    }else {
        const number = input as number
        // 断言到一个联合类型中不存在的类型会出错
        return number.toString().length
    }
}

// type guard守护，使用条件语句自动缩小范围
function getLength2(input: string | number): number {
    if(typeof input == 'string') { // 条件分支自动缩小类型
        return input.length
    }else {
        return input.toString().length
    }
}