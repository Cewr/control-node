// 引入express模块
const express = require('express');
// 生成实例对象
const app = express();
// 引入路由中间件
const userRouter = require('./routes/user');

// 设置user的 req.body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// 设置允许跨域


// 中间件 // 加上前缀
app.use('/api/user',userRouter);
// 规定端口
app.listen(8080);