const express=require('express')
const router=express.Router()
const userModel=require('../model/user')
const jwt=require('jsonwebtoken')
const tokenConfig = require('../config/tokenConfig')
const checkUser = require('../config/checkUser')

//登录
router.post('/login',(req,res,next)=>{
    let {idCard,password}=req.body
    userModel.findOne({idCard}).then(data=>{
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
