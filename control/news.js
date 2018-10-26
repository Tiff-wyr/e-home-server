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

    }
})
module.exports=router