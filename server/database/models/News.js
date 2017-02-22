/**
 * 新闻资讯表
 */
var mongoose = require('../db.js');
var Schema = mongoose.Schema;


var NewsCommentSchema = new Schema({
    content: { type: String },
    username: { type: String },
    avatarPath: { type: String },
    publishTime: { type: String },
    parentId: { type: String }, // 父id：新闻评论：0、用户评论：各自的_id
    level: { type: Number }  // 评论级别：0：新闻评论、1:二级评论（针对用户评论的评论）
});

var NewsSchema = new Schema({
    title: { type: String },
    intro: { type: String },
    imgUrl: { type: Array },
    publishTime: { type: Date },
    source: { type: String },
    type: { type: Number },
    commentList: [NewsCommentSchema]
});

// 每次执行都会调用,时间更新操作
NewsSchema.pre('save', function (next) {
    next();
});

// 查询的静态方法
NewsSchema.statics = {
    findListByPage: function (pageindex, pageSize, cb) { //查询所有数据
        return this
            .find()
            .limit(pageSize)
            .skip(pageindex * pageSize)
            .exec(cb); //回调
    },
    findById: function (id, cb) { //根据id查询单条数据
        return this
            .findOne({ _id: id })
            .exec(cb);
    }
};

module.exports = mongoose.model('News', NewsSchema);
