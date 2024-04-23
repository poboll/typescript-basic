// 类和接口
// 继承的困境：一个类只能继承自另外一个类、不同类之间无法相互访问共同的特性
// 类可以使用implements来实现接口
interface Radio {
    // 打开收音机
    switchRadio(trigger: boolean): void; // 啥也不返回
}
interface Battery {
    checkBatteryStatus(): void;
}
// 接口之间也可以实现继承
interface RadioWithBattery extends Radio {
    checkBatteryStatus(): void
}
class Car implements Radio {
    switchRadio(trigger: boolean) {

    }
}
class Cellphone1 implements Radio {
    switchRadio(trigger: boolean) {

    }
    checkBatteryStatus() {

    }
}
// 或
class Cellphone2 implements RadioWithBattery {
    switchRadio(trigger: boolean) {

    }
    checkBatteryStatus() {
        
    }
}