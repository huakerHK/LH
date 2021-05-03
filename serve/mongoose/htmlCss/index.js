const mongoose = require('mongoose');
const date = require('../../public/commen.js');

const htmlcssSchema = new mongoose.Schema({
	title:String,
	content:String,
	// auther:{
	// 	type:mongoose.Schema.Types.ObjectId,
	// 	ref:'user'
	// },
	date:{
		type:String,
		default:date.date()
	}
})

const htmlcss = mongoose.model('htmlcss',htmlcssSchema)

// async function test() {
// 	htmlcss.create({
// 		title:'web怎么学',
// 		content:'web这样学！',
// 	})
// }
// test()

module.exports = htmlcss