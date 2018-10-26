const mongoose = require('mongoose')
const Schema = mongoose.Schema
const ObjectId = mongoose.SchemaTypes.ObjectId

const topic=new Schema({
    content:String,
    user:{
        type: ObjectId,
        ref: 'user'
    },
    // /**是否公开 1 公开 0 隐私*/
    type: {
        type: Number,
        default: 1
    },
    comments:Array,
},{versionKey: false, timestamps: {createdAt: 'created_time', updatedAt: 'updated_time'}})
module.exports = mongoose.model('topic', topic)