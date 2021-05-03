const mongoose = require('mongoose');
const autherSchema = new mongoose.Schema({
	name:String,
	QQ:String,
	descibe:[
		{
			a:String,
		},
		{
			b:String,
		}
	]
})

const auther = mongoose.model('authers',autherSchema)
// auther.create({
// 	"name":"龙华",
// 	"QQ":"1589715612",
// 	"descibe":[
// 		{
// 			"a":"同学眼中的大佬，实际什么都不会。"
// 		},
// 		{
// 			"b":""
// 		}
// 	]
// })
module.exports = auther