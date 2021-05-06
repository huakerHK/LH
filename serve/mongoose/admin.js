const mongoose = require('mongoose')
const date = require('../public/commen.js')

const adminSchema = new mongoose.Schema({
	name:String,
	password:String,
	email:String,
	date:{
		type:String,
		default:date.date()
	}
})
const admin = mongoose.model('admin',adminSchema)

// admin.create({
// 	name:'admin',
// 	email:'admin@admin.com',
// 	password:'123456'
// })

module.exports = admin