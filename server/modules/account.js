var User = require('../database/models/User.js');

module.exports = function (router) {
    /**
     * 登录
     */
    router.post('/login', function (req, res) {
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
            var data = result.toJSON();
            if(password !== data.password){
                res.json({ 'code': 10001, 'msg': '密码不正确' });
                return;
            }
            req.session.user = data;
            res.json({ 'code': 10000, 'msg': '登录成功' });
        });
    });

    /**
     * 注册
    */
    router.post('/register', function (req, res) {
        var username = req.body.username;
        var password = req.body.password;
        var smsCode = req.body.smsCode;
        User.findByUsername(username, function (err, result) {
            if (err) {
                res.json({ 'code': 90001, 'msg': err });
                return;
            }
            if (result) {
                res.json({ 'code': 20001, 'msg': '用户已存在，请直接登录' });
                return;
            }
            if(smsCode !== '123456'){
                res.json({ 'code': 10001, 'msg': '短信验证码不正确' });
                return;
            }
            var user = new User({
                username,
                password
            });
            user.save(function (err) {
                if (err) {
                    res.json({ 'code': 90001, 'msg': err });
                    return;
                }
                req.session.username = username;
                res.json({ 'code': 10000, 'msg': '注册成功' });
            });
        });
    });

    /**
     * 发送短信验证码
    */
    router.post('/sendSMSCode', function (req, res) {
        res.json({ 'code': 10000, 'msg': '短信已发送请注意查收' });
    });

    /**
     * 找回密码
    */
    router.post('/forgetPwd', function (req, res) {
        var username = req.body.username;
        var password = req.body.password;
        var smsCode = req.body.smsCode;
        User.findByUsername(username, function (err, result) {
            if (err) {
                res.json({ 'code': 90001, 'msg': err });
                return;
            }
            if (!result) {
                res.json({ 'code': 10001, 'msg': '用户不存在' });
                return;
            }
            if(smsCode !== '123456'){
                res.json({ 'code': 10001, 'msg': '短信验证码不正确' });
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
     * 退出
     */
    router.post('/logout', function (req, res) {
        req.session.destroy(function(err) {
            if(err){
                res.json({ 'code': 90001, 'msg': err });
                return;
            }
            res.json({ 'code': 10000, 'msg': '退出成功' });
        });
    });
};
