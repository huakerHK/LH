const mongoose = require('mongoose');
const date = require('../../public/commen.js');

const listSchema = new mongoose.Schema({
	name:String,
	describe:String,
	store:String,
	date:{
		type:String,
		default:date.date()
	}
})

const list = mongoose.model('zplist',listSchema)
// vue.create({
// 	title:'vue 路由(router)的使用',
// 	content:''
// })

module.exports = list


	