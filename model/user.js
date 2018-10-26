/**
 * Created by Administrator on 2018/10/24 0024.
 */
let mongoose =require('mongoose')
let Schema = mongoose.Schema;
const user=new Schema({
    //用户头像
    header:{
        type:String,
        default:"http://pbl.yaojunrong.com/icon_default.png"
    },
    //用户名
    username:{
        type:String,
    },
    idCard:{
        type: String,
        require: true,
        unique: true,
        index:true,//增加索引，优化查找速度
    },
    hometown:{
        type:String,
        default:''
    },
    address:{
        type:String,
        default:''
    },
    // /**民族*/
    nation: {
        type: String,
        default: ""
    },
    // /**微信号*/
    wxNum: {
        type: String,
        default: ""
    },
    // /**QQ号*/
    qqNum: {
        type: String,
        default: ""
    },
    sex:{
        type:Number,
        default:1
    },
    // /**最高学历*/
    education: {
        type: String,
        default: ""
    },
    // /**当前职称----昵称*/
    jobRank: {
        type: String,
        default: ""
    },
    // /**薪资水平*/
    salary: {
        type: String,
        default: ""
    },
    // /**入党时间*/
    joinPartyTime: {
        type: Date,
        default: null
    },
    // /**党费最后缴纳时间*/
    lastPayTime: {
        type: Date,
        default: null
    },
    // /**当前身份  1为党员、2为预备党员、3为积极分子*/
    partyIdentity: {
        type: Number,
        default: 1
    },
    // /**用户密码*/
    password: {
        type: String,
        default: '123456'
    },
    // /**用户手机号码*/
    phone: {
        type: String,
        default: ""
    },
    // /**用户等级，level 0管理员。level 1用户*/
    level: {
        type: Schema.Types.Mixed,
        default: 1
    },
    isCanLogin: {   // 是否被管理员禁用
        type: Boolean,
        default: true
    },
    branchId: {    //分支ID
        type: String,
        default: "5ad3842650282d2750712178"
    },
    branchName: {  //分支名
        type: String,
        default: "信息工程学院学生流动党支部（北京）"
    }
},{versionKey:false,autoIndex:false})

module.exports=mongoose.model('user',user)