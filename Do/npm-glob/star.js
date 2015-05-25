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

//
files = glob.sync('**/*.js', options);
console.log('**/*.js match:  ' + files);

//
files = glob.sync('*.*', options);
console.log('*.* match:      ' + files);

//
files = glob.sync('*', options);
console.log('* match:        ' + files);

files = glob.sync('*', options);
console.log('* match:        ' + files);

files = glob.sync('*', options);
console.log('* match:        ' + files);