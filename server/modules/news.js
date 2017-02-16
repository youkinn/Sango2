var NewsModel = require('../database/models/News.js');

module.exports = function (router) {
    /**
     * 获取新闻列表
     * 
     */
    router.post('/getNewsList', function (req, res) {
        var pageIndex = req.body.pageIndex || 0;
        var pageSize = req.body.pageSize || 10;
        NewsModel.findListByPage(parseInt(pageIndex), parseInt(pageSize), function (err, doc) {
            if (err) {
                res.json({ 'code': 90001, 'msg': err });
                return;
            }
            var uppers = doc.map(function(item){
                item._doc.publishTime = item._doc.publishTime.getTime();
            });
            res.json({ code: 10000, result: { data: doc }});
        });
    });
};
