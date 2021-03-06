'use strict';

var glob = require('glob');
var options = {
    ignore: 'node_modules/**/*.js'
};
var files;

// 默认只匹配当前目录js文件
files = glob.sync('*.js', options);
console.log('*.js match:     ' + files);

// 匹配一级目录下的js文件
files = glob.sync('*/*.js', options);
console.log('*/*.js match:   ' + files);

// 如果**单独作为路径的一部分, 则
// 匹配当前目录或多极子目录下的js文件
files = glob.sync('**/*.js', options);
console.log('**/*.js match:  ' + files);

// dot作为特殊字符
files = glob.sync('*.*', options);
console.log('*.* match:      ' + files);

// 匹配当前目录全部文件和目录
files = glob.sync('*', options);
console.log('* match:        ' + files);

// *出现在文件名中匹配 0 或 多个字符
files = glob.sync('in*', options);
console.log('in* match:      ' + files);
