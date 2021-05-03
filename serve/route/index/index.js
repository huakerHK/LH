const express = require('express');
//导入路由
const route = express.Router();

//导入数据模板
const type = require('../../mongoose/classifly');
//	所有数据类型
route.post('/Alltype',async (req,res) => {
	const result = await type.find();
	res.send(result)
})

//导出路由
module.exports = route