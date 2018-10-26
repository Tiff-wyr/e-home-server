/**
 * Created by Administrator on 2018/10/25 0025.
 */
const express = require('express')
const router = express.Router()

router.get('/', (req, res, next) => {
    res.json({
        code: 200
    })
})
router.use('/uploadToken', require('./upload'))
router.use('/news', require('./news'))
router.use('/user', require('./user'))
router.use('/category', require('./category'))
router.use('/topic', require('./topic'))
router.use('/common', require('./common'))

module.exports = router