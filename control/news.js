/**
 * Created by Administrator on 2018/10/26 0026.
 */
const express=require('express')
const router=express.Router()
const newsModel = require('../model/news')
const checkUser = require('../config/checkUser')
//获取新闻列表
router.get('/',checkUser,async(req,res,next)=>{
    try {
        let {page=1,size=10}=req.query
        let data=await newsModel.find()
            .limit(size)
            .skip((page-1)*size)
            .populate({
                path:'category'
            })
        res.json({
            code: 200,
            data
        })
    }catch(e){
        next(e)
    }
})
//添加新闻
router.post('/',checkUser,async(req,res,next)=>{
    try {
        let {header,title, content, contentText, category, author} = req.body
        let data=await newsModel.create({header,title, content, contentText, category, author})
        res.json({
            code: 200,
            msg: '添加成功',
            data
        })
    }catch(e){
        next(e)
    }
})

module.exports=router