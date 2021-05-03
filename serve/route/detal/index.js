const express = require('express');
const route = express.Router();

//导入所有类型
const htmlcss = require('../../mongoose/htmlCss/index');
const linux = require('../../mongoose/linux/index');
const vue = require('../../mongoose/vue/index');
const java = require('../../mongoose/htmlCss/index');
const javascript = require('../../mongoose/javascript/index');


const arr = [
	{
		'type':'htmlcss',
		'detal':htmlcss,
	},
	{
		'type':'linux',
		'detal':linux,
	},
	{
		'type':'vue',
		'detal':vue,
	},
	{
		'type':'java',
		'detal':java,
	},
	{
		'type':'javascript',
		'detal':javascript,
	},
]
route.post('/detal',async (req,res) => {
	const {title,_id} = req.body.detal
	for(let i = 0; i < arr.length; i ++){
		if(title == arr[i].type) {
			const dataName = await arr[i].detal;
			const result = await dataName.findOne({_id});
			res.send(result)
		}
	}
})


module.exports = route