var fs = require('fs');
var tokenize = require('html-tokenize');
var through = require('through2');

fs.createReadStream(__dirname + '/test.html')
    .pipe(tokenize())
    .pipe(through.obj(function (row, enc, next) {

      debugger;

      row[1] = row[1].toString();
      console.log(row);
      next();
    }));