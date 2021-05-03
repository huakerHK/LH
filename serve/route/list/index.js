const express = require('express');
//导入路由
const route = express.Router();
//	导入文件系统模块
const fs = require('fs');
//	导入路径模块
const path = require('path');
const mime = require('mime');
const url = require('url');

//导入数据模板
const list = require('../../mongoose/list/index');
//	所有数据类型
route.post('/list',async (req,res) => {
	const result = await list.find();
	console.log(url.parse(req.url).pathname)
	res.send(result)
})
//	store
// route.post('/store',async (req,res) => {
// 	const pathname = req.body.name;
// 	let finalpath = path.join(__dirname);
// 	finalpath = finalpath.replace('list','')
// 	finalpath = finalpath.replace('route','')
// 	finalpath = path.join(finalpath,'public','static','store',pathname,'index.html')
// 	const type = mime.getType(finalpath)
// 	fs.readFile(finalpath,'utf-8',(err,doc) => {
// 		if(err == null) {
// 			res.send(doc)
// 		}
// 	})
// 	console.log(finalpath)
// 	console.log(pathname)
// })


//导出路由
module.exports = route