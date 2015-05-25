'use strict';

var glob = require('glob');
var options = {
    ignore: 'node_modules/**/*.js'
};
var files;

// 匹配 0 或 多个模式中的字符
files = glob.sync('s*(t|a|b)ar.js', options);
console.log('s*(t|a|b)ar.js match:     ' + files);

files = glob.sync('s?(t|a|b)ar.js', options);
console.log('s?(t|a|b)ar.js match:     ' + files);

// 匹配 1 或 多个模式中的字符
files = glob.sync('s+(t|a|b)ar.js', options);
console.log('s+(t|a|b)ar.js match:     ' + files);

// 匹配模式中确认出现一项
files = glob.sync('s@(t|a|b)ar.js', options);
console.log('s@(t|a|b)ar.js match:     ' + files);
