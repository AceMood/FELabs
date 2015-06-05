'use strict';

var express = require('express');

var app = express();

// param回调函数只在param命中时执行一次
// 此时req.param.id既为所需参数
//app.param('id', function (req, res, next, id) {
//  console.log('CALLED ONLY ONCE ' ＋ req.params['id'] + '  ' + id);
//  debugger;
//  next();
//});

app.use('/user/:id', function (req, res, next) {
  console.log('although this matches');
  debugger;
  next();
});

app.use('/user/:id', function (req, res, next) {
  console.log('and this matches too');
  debugger;
  //res.end('Hello World!');
  next();
});

app.use('/user?id=:id', function (req, res) {
  console.log('and this matches too');
  console.log(req);
  res.end('Hello World!');
});

app.listen(9876);