var NewsModel = require('../database/models/News.js');

module.exports = function(router) {
  /**
   * 获取新闻列表
   * 
   */
  router.post('/getNewsList', function(req, res) {
    var pageIndex = req.body.pageIndex || 0;
    var pageSize = req.body.pageSize || 10;
    NewsModel.findListByPage(parseInt(pageIndex), parseInt(pageSize), function(err, doc) {
      if (err) {
        res.json({ 'code': 90001, 'msg': err });
        return;
      }
      var uppers = doc.map(function(item) {
        item._doc.publishTime = item._doc.publishTime.getTime();
      });
      res.json({ code: 10000, result: doc });
    });
  });

  /**
   * 获取新闻详情
   * 
   */
  router.post('/getNewsDetail', function(req, res) {
    var newsId = req.body.newsId;
    NewsModel.findById(newsId, function(err, doc) {
      if (err) {
        res.json({ 'code': 90001, 'msg': err });
        return;
      }
      doc._doc.publishTime = doc.publishTime.getTime();
      res.json({ code: 10000, result: { data: doc } });
    });
  });

  /**
   * 新闻评论
   * 
   */
  router.post('/auth/doComment', function(req, res) {
    var newsId = req.body.newsId;
    var content = req.body.content;
    var level = req.body.level;
    var parentId = req.body.parentId;
    NewsModel.findById(newsId, function(err, doc) {
      if (err) {
        res.json({ 'code': 90001, 'msg': err });
        return;
      }
      doc._doc.commentList.splice(0, 0, {
        content: content,
        username: req.session.user.username,
        avatarPath: req.session.user.avatarPath,
        publishTime: Date.now(),
        level: level,
        parentId: parentId
      });
      doc.save(function(err) {
        if (err) {
          res.json({ 'code': 10001, 'msg': err });
          return;
        }
        res.json({ 'code': 10000, 'msg': '评论成功', result: { data: doc._doc.commentList } });
      });
    });
  });
};