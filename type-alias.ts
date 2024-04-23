// 类型别名：type-alias
// 只声明并没有实现所以运行会报错
let sum: (x: number, y: number) => number
const result = sum(1, 2)
// 类型别名
type PlusType = (x: number, y: number) => number
let sum2: PlusType
const result2 = sum2(2, 3)
type StrOrNumber = string | number
let result3: StrOrNumber = '123'
result3 = 123
// 报错result3 = true

// 字符串字面量：类型确定
const str: 'name' = 'name'
const number: 1 = 1
type Directions = 'Up' | 'Down' | 'Left' | 'Right'
let toWhere: Directions = 'Left' // 含有提示

// 联合类型 &
interface IName {
    name: string
}
type IPerson = IName & { age: number }
let person: IPerson = { name: '123', age: 123 }
