/**
 * Created by Administrator on 2018/10/24 0024.
 */
const jwt=require('jsonwebtoken')
const tokenConfig = require('./tokenConfig')

const xhr=function (req,res,next) {
    let token=req.body.token || req.headers.token || req.query.token
    jwt.verify(token,tokenConfig.secret,(err,decode)=>{
        if (err) {
            res.json({
                code: 403,
                msg: '用户登录信息失效，请重新登录'
            })
        }else{
            req.user=decode
            next()
        }
    })
}
module.exports=xhr