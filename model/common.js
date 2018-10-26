const mongoose=require('mongoose')
const Schema=mongoose.Schema
const ObjectId=mongoose.SchemaTypes.ObjectId

const common=new Schema({
    content:String,
    author:{
        type:ObjectId,
        ref:'user'
    },
    //评论主题
    topic:{
        type: ObjectId,
        ref: 'topic'
    }
},{versionKey:false,timestamps:{createdAt: 'created_time', updatedAt: 'updated_time'}})
module.exports=mongoose.model('common',common)