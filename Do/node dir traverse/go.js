
var fs = require('fs');


var depth = 0;


function loop(file) {
    var stat = fs.lstatSync(file);

    if (stat.isDirectory()) {

        depth++;

        fs.readdir(file, function(err, files) {
            if (err) return;
            files.forEach(loop);
        });

    } else if (stat.isFile()) {
        console.log(file + '\n');
    }
}



fs.readdir('./', function(err, files) {

    if (err) return;

    files.forEach(loop);

});