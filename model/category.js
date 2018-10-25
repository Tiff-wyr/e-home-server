/**
 * Created by Administrator on 2018/10/24 0024.
 */
const mongoose = require('mongoose')
const Schema = mongoose.Schema
const category = new Schema({
    name: String,
    type: Number
},{versionKey: false})
module.exports = mongoose.model('category', category)