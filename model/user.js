// 操作数据库

//  引入db
const db = require('../config/db');

// 数据规范
const schema = db.Schema({
    username:{
        type: String,
        required: true     //必填项
    },
    password:{
        type: String,
        required: true
    },
    avatar: {
        type: String,
        default: 'http://localhost:8080/avatar.jpg'
    },
    sex: {
        type: Number,
        default: 1      //默认值
    },
    age: {
        type: Number,
        default: 18
    }
});

module.exports = db.model('user',schema);