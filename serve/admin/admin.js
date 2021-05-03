const express = require('express');
const date = require('../public/commen.js');
const route = express.Router();

//导入数据模板
const type = require('../mongoose/classifly');

const htmlcss = require('../mongoose/htmlCss/index');
const vue = require('../mongoose/vue/index');
const linux = require('../mongoose/linux/index');
const java = require('../mongoose/java/index');
const javascript = require('../mongoose/javascript/index')



//	存放所有数据库
const articlData = [
	{
		name:'htmlcss',
		mongoose:htmlcss,
	},
	{
		name:'vue',
		mongoose:vue,
	},
	{
		name:'linux',
		mongoose:linux,
	},
	{
		name:'java',
		mongoose:java,
	},
	{
		name:'javascript',
		mongoose:javascript,
	}
]

//	所有数据分页
route.post('/admin/Alltype',async (req,res) => {
	const {previous,next} = req.body;
	const all = await type.find();
	const result = await type.find().skip(previous).limit(next);
	let currPage = next / 10;
	//	总数据条数
	let count  = 0;
	for(let i = 0;i < all.length; i++) {
		count++
	}
	const data = {
		count:count,
		pages:'',
		currPage:currPage,
		arr:[]
	}
	data.pages = Math.ceil(count / 10) 
	for(let i = 0; i < result.length; i++) {
		data.arr.push(result[i])
	}
	res.send(data)
})


//	增加文章类型
route.post('/addArticltype',async (req,res) => {
	const {title,descibe} = req.body;
	console.log(req.body)
	type.create({
		title:title,
		descibe:descibe,
	})
	res.send('ok')
})

//	更新文章类容
route.post('/updata',async (req,res) =>{
	const {_id,title,descibe} = req.body;
	type.updateOne({_id:_id},{title:title,descibe:descibe}).then(succe =>{
		console.log(succe)
	})
	res.send('ok')
})

//	删除文章类型
route.post('/delete',async (req,res) => {
	const _id = req.body._id;
	console.log(_id)
	type.findOneAndDelete({_id}).then(result => console.log(result))
	res.send('ok')
})




//	文章类型导航
route.post('/articl_nav',async (req,res) => {
	const arr_result = await type.find();
	const nav = []
	for(let i = 0; i < arr_result.length;i++) {
		nav.push(arr_result[i].title)
	}
	res.send(nav)
})

//	详细文章类型
route.post('/detalType',async (req,res) => {
	const types = req.body.type;
	console.log(type)
	const articl =  await types.find();
	res.send(articl)
})



//	发布文章
route.post('/release',async (req,res) => {
	const {type,content,title}  = req.body;
	console.log(type)
	//	遍历所有的数据库
	for(let i = 0; i < articlData.length; i++) {
		if(type == articlData[i].name){
			articlData[i].mongoose.create({
				title:title,
				content:content,
			}).then(succe => {
				res.send('ok')
			})
		}
	}
})
// 	具体文章
route.post('/articl', async (req,res) => {
	const title = req.body.title.replace('/','').toLowerCase();
	for(let i = 0; i < articlData.length; i++) {
		if(title == articlData[i].name){
			const result = await articlData[i].mongoose.find()
			res.send(result)
		}
	}
})
//	文章编辑更新
route.post('/upArticl',async (req,res) => {
	const {title,_id,content} = req.body.data;
	const type = req.body.type;
	for(let i = 0; i < articlData.length; i++){
		console.log(i)
		if(type == articlData[i].name){
			const result = await articlData[i].mongoose.updateOne({_id:_id},{title:title,content:content}).then(succe => {
				console.log(succe)
				res.send('ok')
			})
			
		}
	}
	
})

//	删除文章
route.post('/delArticl',async (req,res) => {
	const {type,_id} = req.body;
	console.log(req.body)
	for(let i = 0; i < articlData.length; i++){
		if(type == articlData[i].name){
			const result = await articlData[i].mongoose.findOneAndDelete({_id:_id}).then(result =>{
				res.send('ok')
			})
		}
	}
})

module.exports = route