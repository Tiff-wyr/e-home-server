const express=require('express')
const router=express.Router()
const userModel = require('../model/user')
const jwt=require('jsonwebtoken')
const tokenConfig = require('../config/tokenConfig')
const checkUser = require('../config/checkUser')

//登录
router.post('/login',(req, res)=>{
    let {idCard,password} = req.body
    userModel.findOne({idCard}).then(data=>{
        console.log(data);
        if(data){
            if(password === data.password){
                console.log(data);
                let userInfo={
                    id: data._id,
                    username: data.username,
                    idCard: data.idCard,
                    level: data.level
                }
                let token=jwt.sign(userInfo,tokenConfig.secret,{expiresIn:60*60*60})
                res.json({
                    token,
                    code: 200,
                    msg: '登录成功'
                })
            }else{
                res.json({
                    code: 400,
                    msg: '用户名或密码错误',
                })
            }
        }else{
            res.json({
                code: 400,
                msg: '用户不存在',
            })
        }
    })
})
//注册
router.post('/register',checkUser,async(req,res)=>{
    if(req.user.level === 0){
        let userinfo=req.body
        try {
            let user=await userModel.findOne({idCard:userinfo.idCard})
            if (user === null){
                userModel.create(userinfo).then(data=>{
                    res.json({
                        code: 200,
                        msg: '注册成功',
                        data
                    })
                })
            }else{
                res.json({
                    code: 401,
                    msg: '用户已存在'
                })
            }
        }catch (e) {
            res.json({
                code: 400,
                msg: e
            })
        }
    }else{
        res.json({
            code: 400,
            msg: '您无权进行此操作'
        })
    }
})
//获取个人信息
router.get('/userInfo',checkUser,async(req,res)=>{
   let idCard= req.user.idCard
    let data=await userModel.findOne({idCard:idCard},{password:0})
    if(data){
       res.json({
           code: 200,
           data
       })
    }
})
//修改密码
router.post('/reset',checkUser,async(req,res)=>{
    let {password,newpassword}=req.body

    let user = await userModel.findOne({_id: req.user.id})
    if(password === user.password){
        userModel.updateOne({_id:user._id},{password:newpassword}).then(data=>{
            res.json({
                code: 200,
                msg: '修改成功',
            })
        })
    }else{
        res.json({
            code: 400,
            msg: '原密码错误'
        })
    }
})
//修改个人信息
router.post('/amend',checkUser,async(req,res)=>{
    userModel.updateOne({_id:req.user.id},req.body).then(data=>{
        res.json({
            code: 200,
            msg: '修改成功'
        })
    })
})
//获取所有管理员
router.get('/',checkUser,async(req,res,next)=>{
    let {page,size}=req.query

})
module.exports = router
