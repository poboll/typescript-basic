// Object定义数据类型
// Interface 对对象的形状（shape）进行描述
// Duck Typing（鸭子类型）TS不会被转换只会对类型做检查
interface Person {
    readonly id: number;
    name: string;
    age?: number;
}

let viking: Person = {
    id: 1, // 只读属性
    // 多或少都不行、赋值时必须一致（可选）
    name: 'xiking',
    age: 20,
}