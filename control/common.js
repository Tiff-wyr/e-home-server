const express=require('express')
const router=express.Router()
const checkUser = require('../config/checkUser')
const commonModel = require('../model/common')
const topicModel = require('../model/topic')
//获取评论信息
router.get('/:topicId',checkUser,async(req,res,next)=>{
    try {
        let {page=1,size=10}=req.query

    }catch(e){
        next(e)
    }
})
//添加评论
router.post('/:topicId',checkUser,async(req,res,next)=>{
    try {

    }catch(e){

    }
})
module.exports=router