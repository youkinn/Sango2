var User = require('../database/models/User.js');

module.exports = function (router) {
    /**
     * 添加用户
     */
    router.post('/addUser', function (req, res) {
        var username = req.body.username;
        var password = req.body.password;
        var user = new User({
            username,
            password
        });
        User.findByUsername(username, function (err, result) {
            if (err) {
                res.json({ 'code': 90001, 'msg': err });
                return;
            }
            if (result) {
                res.json({ 'code': 10001, 'msg': '用户名已被占用' });
                return;
            }
            user.save(function (err) {
                if (err) {
                    res.json({ 'code': 90001, 'msg': err });
                    return;
                }
                res.json({ 'code': 10000, 'msg': '添加用户成功' });
                return;
            });
        });
    });

    /**
     * 删除用户
    */
    router.post('/auth/deleteUser', function (req, res) {
        var username = req.body.username;
        if (username == '') {
            res.json({ 'code': 10001, 'msg': '删除失败，用户名不能为空' });
            return;
        }
        var wherestr = { username };
        User.remove(wherestr, function (err) {
            if (err) {
                res.json({ 'code': 90001, 'msg': err });
                return;
            }
            res.json({ 'code': 10000, 'msg': '删除成功' });
        });
    });

    /**
     * 修改密码
    */
    router.post('/auth/updatePwd', function (req, res) {
        var username = req.body.username;
        var password = req.body.password;
        User.findByUsername(username, function (err, result) {
            if (err) {
                res.json({ 'code': 90001, 'msg': err });
                return;
            }
            if (!result) {
                res.json({ 'code': 10001, 'msg': '用户不存在' });
                return;
            }
            var wherestr = { username };
            var updatestr = { password };

            User.update(wherestr, updatestr, function (err) {
                if (err) {
                    res.json({ 'code': 10001, 'msg': err });
                    return;
                }
                res.json({ 'code': 10000, 'msg': '修改密码成功' });
            });
        });
    });

    /**
     * 检查用户名是否已存在
    */
    router.post('/checkUsernameExit', function (req, res) {
        var username = req.body.username;
        User.findByUsername(username, function (err, result) {
            if (err) {
                res.json({ 'code': 90001, 'msg': err });
                return;
            }
            if (result) {
                res.json({ 'code': 10000, 'msg': '该用户名已被占用' });
                return;
            }
            res.json({ 'code': 10000, 'msg': '该用户名可用' });
        });
    });

    /**
     * 获取所有用户列表
    */
    router.get('/getUserList', function (req, res) {
        User.fetch(function (err, users) {
            if (err) {
                res.json({ 'code': 90000, 'msg': err });
                return;
            }
            res.json({ 'code': 10000, 'list': users });
        });
    });
};
