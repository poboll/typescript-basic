// 内置的一些类型：帮助编码的过程
const a: Array<number> = [1, 2, 3]
const date = new Date()
date.getTime()
const reg = /abc/
reg.test('abc')

// build-in object
Math.pow(2, 2) // Math所有属性方法是静态的

// DOM and BOM
let body = document.body
let allLis = document.querySelectorAll('li') // allLis变成了NodeList类型
allLis.keys()

document.addEventListener('click', (e) => {
    // MouseEvent鼠标点击
    e.preventDefault()
})

// Utility Types附赠的小礼物
// IPartial把传入的类型变为可选
interface IPerson {
    name: string
    age: number
}
let viking: IPerson = { name: 'viking', age: 20 }
type IPartial = Partial<IPerson>
let viking2: IPartial = { name: 'viking' }
// IOmit忽略传入类型的某个属性：lib.es5.d.ts
type IOmit = Omit<IPerson, 'name'>
let viking3: IOmit = { age: 20 }
