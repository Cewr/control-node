// 路由
// 处理用户相关

const express = require('express');
const router = express.Router();
// 引入数据库
const UserModel = require('../model/user');

// 获取
// 注册入口> /api/user/sign-up  
router.post('/sign-up', (req, res) => {
    // 判断用户是否存在
    UserModel.findOne({
        username: req.body.username // 比对
    }).then(data => {
        if (data) {   //存在
            res.send({
                code: -1,
                msg: '用户名已注册'
            })
        } else {
            // 注册是否成功
            let user = new UserModel(req.body);
            user.save()
                .then(data => {
                    res.send({
                        code: 0,
                        msg: 'ok'
                    })
                })
                .catch(error => {
                    console.log(error.message);
                    res.send({
                        code: -1,
                        msg: '网络异常，请稍后重试'
                    })
                })
        }
    })
});

// 登录入口>    /api/user/sign-in
// /api/user/sign-in
router.post('/sign-in', (req, res) => {
    UserModel.findOne(req.body)
    .then(data =>{
        if(data){
            res.send({
                code: 0,
                msg: 'ok'
            })
        }else{
            res.send({
                code: -1,
                msg: '用户名或密码错误'
            })
        }
    })
    .catch(error =>{
        console.log(error.message);
        res.send({
            code: -1,
            msg: '网络异常'
        })
    })
})
// 暴露
module.exports = router;