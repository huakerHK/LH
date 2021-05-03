const express = require('express');
const route = express.Router();
const htmlcss = require('../../../mongoose/htmlCss/index');

route.post('/htmlcss',async (req,res) => {
	const result = await htmlcss.find();
	res.send(result)
	console.log(result)
})

//导出路由
module.exports = route