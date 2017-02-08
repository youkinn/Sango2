var router = require('express').Router();
var four0four = require('./utils/404')();

var demo = require('./modules/demo');

demo(router);

// 没有匹配的路由匹配 404
router.get('/*', four0four.notFoundMiddleware);

module.exports = router;
