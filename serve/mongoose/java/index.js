const mongoose = require('mongoose');
const date = require('../../public/commen.js');

const javaSchema = new mongoose.Schema({
	title:String,
	content:String,
	date:{
		type:String,
		default:date.date()
	}
})

const java = mongoose.model('java',javaSchema)

java.create({
	title:'java',
	content:'This is java'
})
module.exports = java