
var js = './jQuery.js';
var css = './reset.css';
var img = './test.png';
var font;
var swf;
var svg;


var crypto = require('crypto');
var fs = require('fs');

var shasum1 = crypto.createHash('sha1');
var s = fs.ReadStream(js);
s.on('data', function(d) {
    shasum1.update(d);
});
s.on('end', function() {
    var d = shasum1.digest('hex');
    console.log(d + '  ' + js);
});


var shasum2 = crypto.createHash('sha1');
s = fs.ReadStream(css);
s.on('data', function(d) {
    shasum2.update(d);
});
s.on('end', function() {
    var d = shasum2.digest('hex');
    console.log(d + '  ' + css);
});


var shasum3 = crypto.createHash('sha1');
s = fs.ReadStream(img);
s.on('data', function(d) {
    shasum3.update(d);
});
s.on('end', function() {
    var d = shasum3.digest('hex');
    console.log(d + '  ' + img);
});