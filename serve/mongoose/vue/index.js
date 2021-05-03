const mongoose = require('mongoose');
const date = require('../../public/commen.js');

const vueSchema = new mongoose.Schema({
	title:String,
	content:String,
	date:{
		type:String,
		default:date.date()
	}
})

const vue = mongoose.model('vues',vueSchema)
// vue.create({
// 	title:'vue 路由(router)的使用',
// 	content:''
// })

module.exports = vue


	