//导入数据库
const mongoose = require('mongoose');
const date = require('../../public/commen.js');

const commenSchema = new mongoose.Schema({
	content:String,
	aid:String,
	date:{
		type:String,
		default:date.date()
	}
})
const commen = mongoose.model('commen',commenSchema)

module.exports = commen