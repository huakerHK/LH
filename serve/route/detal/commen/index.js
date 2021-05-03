const express = require('express');
const route = express.Router();
const commen = require('../../../mongoose/commen/index');

route.post('/commen/add',async (req,res) => {
	const {aid,content} = req.body;
	commen.create({
		aid:aid,
		content:content,
	}).then(succe => {
		res.send('ok')
	})
})

route.post('/commen',async (req,res) => {
	const aid = req.body.aid;
	console.log(aid)
	const result = await commen.find({aid});
	console.log(result)
	res.send(result)
	const date = new Date()
	console.log(date)
})

module.exports = route