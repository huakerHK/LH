const express = require('express');
const route = express.Router();
const js = require('../../../mongoose/javascript/index');

route.post('/javascript',async (req,res) => {
	const result = await js.find();
	res.send(result)
	console.log(result)
})

//导出路由
module.exports = route