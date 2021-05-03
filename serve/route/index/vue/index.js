const express = require('express');
const route = express.Router();
const vue = require('../../../mongoose/vue/index');

route.post('/vue',async (req,res) => {
	const result = await vue.find();
	res.send(result)
	console.log(result)
})

//导出路由
module.exports = route