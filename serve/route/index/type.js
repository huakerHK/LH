const express = require('express');
const route = express.Router();

const htmlcss = require('../../mongoose/htmlCss');
const linux = require('../../mongoose/linux');
const javascript = require('../../mongoose/javascript');
const vue = require('../../mongoose/vue');
const java = require('../../mongoose/java');

const arr = [
	{
		typename:'htmlcss',
		database:htmlcss,
	},
	// {
	// 	typename:'javascript',
	// 	database:javascript,
	// },
	{
		typename:'linux',
		database:linux,
	},
	{
		typename:'vue',
		database:vue,
	},
	{
		typename:'java',
		database:java,
	},
	{
		typename:'javascript',
		database:javascript,
	}
	
]
route.post('/type',async (req,res) => {
	const name = req.body.name;
	for(let i = 0; i < arr.length; i ++){
		if(name == arr[i].typename) { 
			const result = await arr[i].database.find();
			res.send(result)
		}
	}
	// const result = await vue.find();
	// res.send(result)
	// console.log(result)
})

//导出路由
module.exports = route