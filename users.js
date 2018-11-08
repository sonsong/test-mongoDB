//初始化数据库连接
require('./utils/connection_db.js');
//导入Users模型
const Users = require('./models/Users.js');

//增加一个用户
//    doc 这个参数为新增的文本对象
/* Users.create({
    name: "xiaojing",
    age: 18,
    sex: "female"
}, ((err, doc) => {
    if(!err){
        console.log("增加成功~~~");
    }
})); */

//删除一个用户
/* Users.deleteOne({name: "huangss"}, (err) =>{
    if(!err){
        console.log("删除成功~~");
    }
}) */

//查询指定用户
//  docs 满足条件的结果集
/* Users.find({}, ((err, docs) =>{
    if(!err){
        console.log(docs);
    }
})); */
/* Users.findById("5ba21f65f2213d4878aa2840", (err, docs) =>{
    if(!err){
        console.log(docs);
    }
}) */

//修改指定的文档
//doc 执行的结果{ n: 1, nModified: 1, ok: 1 }
Users.updateOne({name: "huangss"}, {$set: {sex: "ada"}}, (err, doc) =>{
    if(!err){
        console.log(doc);
    }
})