/**
 * Created by Administrator on 2018/10/24 0024.
 */
const mongoose = require('mongoose')
const Schema = mongoose.Schema
const ObjectId = mongoose.SchemaTypes.ObjectId

const news = new Schema({
    // /**新闻头图*/
    header: String,
    // /**新闻标题*/
    title: String,
    // /**新闻富文本*/
    content: String,
    // /**新闻头部部分纯文本*/
    contentText: String,
    // /**新闻分类*/
    category:{
        type: ObjectId,
        ref: 'category'
    },
    // /**新闻作者*/
    author: String,
    // /**阅读人数*/
    lookNum: {
        type: Number,
        default: 0
    },
}, {versionKey: false, timestamps: {createdAt: 'created_time', updatedAt: 'updated_time'}})

module.exports = mongoose.model('news', news)