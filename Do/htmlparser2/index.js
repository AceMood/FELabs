var fs = require('fs');
var htmlparser = require("htmlparser2");


var parser = new htmlparser.Parser({
  onopentag: function (name, attribs) {
    debugger;
    if (name === "script" && attribs.type === "text/javascript") {
      console.log("JS! Hooray!");
    }
  },
  ontext: function (text) {
    debugger;
    console.log("-->", text);
  },
  onclosetag: function (tagname) {
    debugger;
    if (tagname === "script") {
      console.log("That's it?!");
    }
  }
}, {
  decodeEntities: true
});


var html = fs.readFileSync('./test.html');
parser.write(html);
parser.end();


