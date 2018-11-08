//初始化数据库连接
require('./utils/connection_db.js');
//导入Users模型
const Users = require('./models/Users.js');

/*
    用实例的方式进行数据库操作
    实例方法中没有查询方法，进行删除或者更新操作时，
    需要先用Model查询，在进行实例操作
*/
let users = new Users({
    name: "xiaoming",
    age: 12
});

//新增
/* users.save((err =>{
    if(!err){
        console.log("保存成功~~~");
    }
})) */

//删除 先查询后操作
// 没有找到的话 user = null 
Users.findOne({name: "xiaojing"}, (err, user) =>{

    if(!err){
        //修改
        //user.updateOne({age: 2111});
        /* user.name = "xiaosong";
        user.save(); */

        //删除
        user.remove((err, user) =>{
            if(!err){
                console.log(user)
            }
        })
    }
})