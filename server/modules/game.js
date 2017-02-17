var GameModel = require('../database/models/Game.js');

module.exports = function (router) {
    /**
     * 获取游戏列表
     */
    router.post('/getGameList', function (req, res) {
        var pageIndex = req.body.pageIndex || 0;
        var pageSize = req.body.pageSize || 10;
        GameModel.findListByPage(parseInt(pageIndex), parseInt(pageSize), function (err, doc) {
            if (err) {
                res.json({ 'code': 90001, 'msg': err });
                return;
            }
            res.json({ code: 10000, result: { data: doc }});
        });
    });
};
