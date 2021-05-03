const mongoose = require('mongoose')
const date = require('../public/commen.js')
const classSchema = new mongoose.Schema({
	title:String,
	descibe:String,
	path:String,
	date:{
		type:String,
		default:date.date()
	}
})
const classifly = mongoose.model('types',classSchema)


// console.log(date.date())
// async function test() {
// 	classifly.create({
// 		title:'java2',
// 		descibe:'test2',
// 		path:'/static/images/bg.webp'
// 	})
// }
// test()
module.exports = classifly