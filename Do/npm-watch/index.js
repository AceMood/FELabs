"use strict";

var watch = require('watch');


watch.watchTree('./', listener);

/**
 * @param {String} f root下带路径的文件名
 * @param {fs.Stats} curr
 * @param {fs.Stats} prev
 */
function listener (f, curr, prev) {
    if (typeof f == "object" && prev === null && curr === null) {
        console.log('end');
        console.log(f);
        console.log(prev);
        console.log(curr);
        // Finished walking the tree
    } else if (prev === null) {
        // f is a new file
    } else if (curr.nlink === 0) {
        // f was removed
    } else {
//        console.log(f);
//        console.log(prev);
//        console.log(curr);
        // f was changed
    }
}