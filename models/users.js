const mongoose = require('mongoose');

//建立Users模型

//初始化users集合的约束条件
var usersSchema = mongoose.Schema({
    name: String,
    age: Number,
    sex: {
        type: String,
        default: "male"
    }
})

//建立约束与模型的映射关系
const Users = mongoose.model('users', usersSchema);

module.exports = Users;
