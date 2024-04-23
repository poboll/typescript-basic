// TS中使用第三方库：declare让TS直接拿来用
// 通常会把声明语句放在单独的文件
// declare var jQuery: (selector: string) => any;

// jQuery.d.ts文件
// .d.ts声明文件
// 该文件有适配TS的类型声明：编译性检查并不带有内容
// declare var jQuery: (selector: string) => any;

// 提供一键安装npm install --save @types/jquery
// 很多库都提供定义文件和源代码：状态管理工具redux
// 自动加载jQuery
import jQuery from 'jquery';
import { Action } from 'redux';
jQuery('#id')