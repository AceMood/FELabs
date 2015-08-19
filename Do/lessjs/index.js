var less = require('less');
var fs = require('fs');


var cssText = fs.readFileSync('./style.less', {
  encoding: 'utf8'
});

less.render(cssText, function (e, output) {
  // console.log(output.css);
  fs.writeFileSync('output.css', output.css);
});