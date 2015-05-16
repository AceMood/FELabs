'use strict';

var fs = require('fs');
require('jsmart');
var tpl = fs.readFileSync('./index.tpl', {encoding: 'utf-8'});
var compiledTpl = new jSmart(tpl);
var output = compiledTpl.fetch({name: 'World'});
console.log(output);

fs.writeFileSync('./index.html', output, {
  encoding: 'utf8'
});