const mongoose = require('mongoose');
const date = require('../../public/commen.js');

const jsSchema = new mongoose.Schema({
	title:String,
	content:String,
	date:{
		type:String,
		default:date.date()
	}
})

const js = mongoose.model('javascript',jsSchema)
// js.create({
// 	title:'javascript',
// 	content:'this is javascript'
// })

module.exports = js


	