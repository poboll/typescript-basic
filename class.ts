// TS中增强类：三种访问修饰符
// Public：修饰的属性或方法是共有的
// Private：修饰的属性或方法是私有的
// Protected：修饰的属性或方法是受保护的
// 默认是Public
class Animal {
    // 只读
    readonly name: string
    // 构造函数：实例化的逻辑
    constructor(name) {
        this.name = name
    }
    run() {
        return `${this.name} is running`
    }
}
const snake = new Animal('lily')
// 只读：snake.name = '123'
console.log(snake.run())
/**
 * node class.ts
 * lily is running
 */
class Dog extends Animal {
    bark() {
        return `${this.name} is breaking`
    }
}

const xiaobao = new Dog('xiaobao')
console.log(xiaobao.run())
console.log(xiaobao.bark())

/**
 * node class.js
 * lily is running
 * xiaobao is running
 * xiaobao is breaking
 */

// 多态
class Cat extends Animal {
    static categories = ['mammal']
    // 重写
    constructor(name) {
        // 调用父类方法需要使用super关键字
        super(name)
        console.log(this.name)
    }
    // 重写
    run() {
        // 调用父类方法需要使用super关键字
        return 'Menw, ' + super.run()
    }
}
const maomao = new Cat('maomao')
console.log(maomao.run())
// 访问静态属性
console.log(Cat.categories)
// 定义、实例无太大关系
/**
 * Apple@MacBook-Pro typescript-basic % node class.js
 * lily is running
 * iaobao is running
 * xiaobao is breaking
 * maomao
 * Menw, maomao is running
 * [ 'mammal' ]
 */