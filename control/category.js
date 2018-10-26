const express=require('express')
const router=express.Router()
const checkUser = require('../config/checkUser')
const categroyModel = require('../model/category')
//添加分类
router.post('/',checkUser,async(req,res,next)=>{
    let {name,type}=req.body
    let data=await categroyModel.create({name,type})
    res.json({
        msg: '添加成功',
        code: 200,
        data
    })
})
//获取分类
router.get('/',checkUser,async(req,res,next)=>{
   let data=await categroyModel.find()
   res.json({
       code:200,
       data
   })
})
module.exports=router