var less = require('less');
var fs = require('fs');


var cssText_0 = fs.readFileSync('./style.less', {
  encoding: 'utf8'
});

var cssText_1 = fs.readFileSync('./other.less', {
  encoding: 'utf8'
});


var cssText = cssText_0 + cssText_1;

fs.writeFileSync('full.less', cssText);

less.render(cssText, function (e, output) {
  // console.log(output.css);
  debugger;
  fs.writeFileSync('output.css', output.css);
});