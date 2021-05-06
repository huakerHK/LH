const mongoose = require('mongoose');
const date = require('../../public/commen.js');

const storeSchema = new mongoose.Schema({
	name:String,
	describe:String,
	store:String,
	date:{
		type:String,
		default:date.date()
	}
})

const store = mongoose.model('zplist',storeSchema)



module.exports = store


	