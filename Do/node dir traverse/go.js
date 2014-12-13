
var fs = require('fs');
var path = require('path');
var resolve = path.resolve;

var depth = 0;
var curDir = ['.'];


function loop(file) {

    // console.log('read: ' + file);

    var stat = fs.lstatSync(curDir + file);

    if (stat.isDirectory()) {

        depth++;

        var dir = curDir.push(file).join('/') + '/';

        process(fs.readdirSync(dir));

    }
    else if (stat.isFile()) {

        // todo
        console.info(file);

    }
}


function process(files) {
    if (!files || files.length === 0)
        return;

    files.forEach(loop);
}


// go
var files = fs.readdirSync('./');
process(files);