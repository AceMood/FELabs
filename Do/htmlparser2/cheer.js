var fs = require('fs');
var html = fs.readFileSync('./test.html');
var cheerio = require('cheerio'),
    $ = cheerio.load(html);

$('script:last-child').attr('src', '/online/a.js');
$('link').attr('href', '/online/astye.css');

fs.writeFileSync('output.html', $.html());