//订单表的增删改查

//初始化数据库连接
require('./utils/connection_db.js');
//导入Users模型
const Orders = require('./models/orders.js');
const Users = require('./models/users.js');

//增加

//查询用户
/* let order = {
    goodName: 'pingguo pro4',
    price: 34543,
    userId: ''
}
Users.findOne((err, user) =>{
    if(!err){
        order.userId = user._id;
        //保存订单
        Orders.create(order, (err, _order) =>{
            if(!err){
                console.log("保存成功~~~");
            }
        });
    }
}); */

/* Orders.find((err, orders)=>{
    if(!err){
        console.log(orders);
    }
}) */

//关联查询 userId是order表的外键，指向user表的主键
//返回的结果
/* { _id: 5be9475939f649133872e67b,
    goodName: 'pingguo pro4',
    price: 34543,
    userId:
     { sex: 'ada',
       _id: 5ba21f65f2213d4878aa2840,
       name: 'huangss',
       age: 18,
       __v: 0 
    },
    __v: 0 
} */
Orders.find({}).populate("userId").exec((err, doc) =>{
    if(!err){
        console.log(doc)
    }
});
// 查询指定条件下的aa, bb, cc三个字段 
//find({条件}, 'aa bb cc', function(err, doc))