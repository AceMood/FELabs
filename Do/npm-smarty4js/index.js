'use strict';

var fs = require('fs');

// get Smarty class
var Smarty = require('smarty4Js');

// create a smarty object
var s = new Smarty();
s.config({
  left_delimiter: '{{',
  right_delimiter: '}}'
});

// get compiler
var tpl = fs.readFileSync('./templates/index.tpl', {
  encoding: 'utf8'
});
var compiler = s.compile(tpl);

// get ast
var ast = s.ast;


debugger;

// get js code
var js = compiler.getJsTpl();

// render smarty with data (3 methods)

var data = {
  name: 'Ned',
  common: {
    id: 35,
    name: 'ben'
  },
  sentence: 'Hello World!'
};
var html = compiler.render(data);
debugger;

//var html = s.render(tpl, data);
//debugger;

//var html = (new Function('return ' + js)()).render(data);


fs.writeFileSync('./output.html', html, {
  encoding: 'utf8'
});