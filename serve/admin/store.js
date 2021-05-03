const express = require('express');
const store_route = express.Router();
const store = require('../mongoose/list/index');

store_route.post('/store',async (req,res) => {
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

	//	添加项目
store_route.post('/add-project',async (req,res) =>{
	const {name,describe,store} = req.body.query;
	console.log(req.body)
	store.create({
		name:name,
		describe:describe,
		store:store,
	}).then(succe =>{
		res.send('ok')
	})
})

	//	更新项目
store_route.post('/up-project',async (req,res) => {
	const {_id,name,describe,store} = req.body.query;
	console.log(_id,name)
	store.updateOne({_id},{
		name:name,
		describe:describe,
		store:store,
	}).then(succe => {
		console.log(succe)
		res.send('ok')
	})
	if(name.length > 0 && describe.length > 0 && store.length > 0){
		
		
	}else{
		res.send('内容为空')
	}
})

	//	删除项目
store_route.post('/del-project',async (req,res) => {
	const _id = req.body.query;
	store.findOneAndDelete({
		_id:_id,
	}).then(() => {
		res.send('ok')
	})
})
module.exports = store_route