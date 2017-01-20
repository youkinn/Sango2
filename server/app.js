'use strict';

var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var favicon = require('serve-favicon');
var logger = require('morgan');
var PORT = process.env.PORT || 8002;
var four0four = require('./utils/404')();
var Promise = require('es6-promise').Promise
var path = require('path');
var session = require('express-session');
var cookieParser = require('cookie-parser');
var MongoStore = require('connect-mongo')(session);
var mock = require('express-mockjs');

var environment = process.env.NODE_ENV;

app.use(favicon(__dirname + '/favicon.ico'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(logger('dev'));

// mongodb
// 这里因为mongoose的异步模块不可用，显示指定使用es6的Promise模块
var mongoose = require('mongoose');
mongoose.Promise = Promise;

// 允许跨域
app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  next();
});

// session设置
// 文档：https://github.com/expressjs/session
app.use(session({
  secret: 'youkinn',
  name: 'sango',                       // 这里的name值得是cookie的name，默认cookie的name是：connect.sid
  cookie: { maxAge: 30 * 60 * 1000 },  // 设置maxAge是1800000ms，即1800s(半小时)后session和相应的cookie失效过期
  resave: false,
  saveUninitialized: true,
  store: new MongoStore({         // 创建新的mongodb数据库
    host: '127.0.0.1',            // 数据库的地址，本机的话就是127.0.0.1，也可以是网络主机
    port: 27017,                  // 数据库的端口号
    db: 'sango',                  // 数据库的名称
    mongooseConnection: mongoose.connection
  })
}));

// mock json 数据
// 文档: https://github.com/52cik/express-mockjs
app.use('/mock', mock(path.join(__dirname, './datamock')));

// api模块
app.use('/api', require('./router'));

console.log('About to crank up node');
console.log('PORT=' + PORT);
console.log('NODE_ENV=' + environment);

switch (environment) {
  case 'build':
    console.log('** BUILD **');
    app.use(express.static('./build/'));
    // Any invalid calls for templateUrls are under app/* and should return 404
    app.use('/app/*', function (req, res, next) {
      four0four.send404(req, res);
    });
    // Any deep link calls should return index.html
    app.use('/*', express.static('./build/index.html'));
    break;
  default:
    console.log('** DEV **');
    app.use(express.static('./src/client/'));
    app.use(express.static('./'));
    app.use(express.static('./tmp'));
    // Any invalid calls for templateUrls are under app/* and should return 404
    app.use('/app/*', function (req, res, next) {
      four0four.send404(req, res);
    });
    // Any deep link calls should return index.html
    app.use('/*', express.static('./src/client/index.html'));
    break;
}

app.listen(PORT, function () {
  console.log('Express server listening on PORT ' + PORT);
  console.log('env = ' + app.get('env') +
    '\n__dirname = ' + __dirname +
    '\nprocess.cwd = ' + process.cwd());
});
