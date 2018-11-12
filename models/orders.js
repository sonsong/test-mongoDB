const mongoose = require('mongoose');

//建立orders模型

//初始化orders集合的约束条件
var ordersSchema = new mongoose.Schema({
    goodName: String,
    price: Number,
    //外键，映射到users表的主键
    userId: {type: mongoose.Schema.Types.ObjectId, ref: 'users'}
})

//建立约束与模型的映射关系
const Orders = mongoose.model('orders', ordersSchema);

module.exports = Orders;
