const express = require('express');
const route = express.Router();

const store = require('../mongoose/list/index');

//	发布项目
route.post('/store/release', async (req,res) => {
	const {describe,stores} = req.body
	const data = req.body
	store.create(data).then( succe => {
		console.log(succe)
		res.send('ok')
	})
})

//	更新项目
route.post('/store/updata', async (req,res) => {
	const _id = req.body._id
	const data = req.body
	store.update({_id:_id},data).then(succe => {
		res.send('ok')
	})
	
})

route.post('/store',async (req,res) => {
	const {previous,next} = req.body.query;
	//	总数据
	const all = await store.find();
	//	数据条数,规定一次查找10条数据
	const result = await store.find().skip(previous).limit(next);
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
	//	Math.ceil(count / 10) 向上取余 如 7 / 3 = 3
	data.pages = Math.ceil(count / 10) 
	for(let i = 0; i < result.length; i++) {
		data.arr.push(result[i])
	}
	res.send(data)
})

route.post('/del-project',async (req,res) => {
	const _id = req.body.query;
	const result = await store.findOneAndDelete({
		_id:_id,
	}).then(() => {
		res.send('ok')
	})
})
module.exports =route