const express = require('express');
const route = express.Router();
const java = require('../../../mongoose/java/index');

route.post('/java',async (req,res) => {
	const result = await java.find();
	res.send(result)
	console.log(result)
})

//导出路由
module.exports = route