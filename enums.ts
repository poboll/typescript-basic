// 枚举enums
// const常量：执行过程中不会改变的值（七天、三原色、四方位）
// 数字枚举
enum Direction {
    Up,
    Down,
    Left,
    Right,
}
console.log(Direction.Up)
/**
 * ts-node enums.ts
 * 0
 */
console.log(Direction[0])
/**
 * ts-node enums.ts
 * 0
 * Up
 */
/**
 * tsc enums.ts如下、封装了一个独特的作用域：返回值是被赋予的值
    var Direction;
    (function (Direction) {
        Direction[Direction["Up"] = 0] = "Up";
        Direction[Direction["Down"] = 1] = "Down";
        Direction[Direction["Left"] = 2] = "Left";
        Direction[Direction["Right"] = 3] = "Right";
        })(Direction || (Direction = {}));
    console.log(Direction.Up);
    console.log(Direction[0]);
 */
enum Direction2 {
    Up = 'Up',
    Down = 'Down',
    Left = 'Left',
    Right = 'Right',
}
const value = 'Up'
if(value == Direction2.Up) {
    console.log('go up!')
}  
/**
 * ts-node enums.ts
 * 0
 * Up
 * go up!
 */
const enum Direction3 {
    Up = 'Up',
    Down = 'Down',
    Left = 'Left',
    Right = 'Right',
}
const value2 = 'Up'
if(value == Direction3.Up) {
    console.log('go up!')
}  
// 常量枚举：提升性能 & 计算值不可以
/** 
 * var value2 = 'Up';
 * if (value == "Up" \/* Direction3.Up *\/) {
 *   console.log('go up!');
 *   }
 */