const express = require('express');
const route = express.Router();
const linux = require('../../../mongoose/linux/index');

route.post('/linux',async (req,res) => {
	const result = await linux.find();
	res.send(result)
	console.log(result)
})

//导出路由
module.exports = route