const express = require('express');
const route = express.Router();
const auther = require('../../mongoose/auther/index')

route.post('/auther',async (req,res) => {
	const result = await auther.find();
	console.log(result)
	res.send(result)
})


module.exports = route