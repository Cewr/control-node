// 引入mongoose数据库
const mongoose = require('mongoose');
const url = 'mongodb://localhost:27017/chen';

// 连接数据库
mongoose.connect(url,{ useNewUrlParser:true })
  .then( ()=>{
    console.log('数据库连接成功');
  })
  .catch((error)=>{
    console.log(error.message);
    console.log('数据库连接失败');
  })

// 暴露出mongoose
module.exports = mongoose;
