const mongoose = require('mongoose');
const date = require('../../public/commen.js');

const linuxSchema = new mongoose.Schema({
	title:String,
	content:String,
	date:{
		type:String,
		default:date.date()
	}
})

const linux = mongoose.model('linuxs',linuxSchema)

// linux.create({
// 	title:'linux',
// 	content:'This is linux'
// })
module.exports = linux
