'use strict';

var glob = require('glob');
var options = {
    ignore: 'node_modules/**/*.js'
};
var files;

// 匹配 0 或 多个模式中的字符
files = glob.sync('s*(t|a|b)ar.js', options);
console.log('s*(t|a|b)ar.js match:     ' + files);

// 匹配 1 或 多个模式中的字符
files = glob.sync('s+(t|a|b)ar.js', options);
console.log('s+(t|a|b)ar.js match:     ' + files);

// 如果**作为路径名的一部分
files = glob.sync('dir*/*.js', options);
console.log('dir*/*.js match:          ' + files);

// dot作为特殊字符
files = glob.sync('*.*', options);
console.log('*.* match:      ' + files);

// 匹配当前目录全部文件和目录
files = glob.sync('*', options);
console.log('* match:        ' + files);

// *出现在文件名中匹配 0 或 多个字符
files = glob.sync('in*', options);
console.log('in* match:      ' + files);
