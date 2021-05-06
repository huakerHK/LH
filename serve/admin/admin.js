const express = require('express');
const route = express.Router();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt')

const admin = require('../mongoose/admin.js')

route.post('/login',async (req,res) => {
	const {name,password,email} = req.body;
	const result = await admin.findOne({email});
	console.log(result)
	if(name == result.name && password == result.password) {
		const token = jwt.sign(req.body,'token');
		res.status(200).send({
			token:token,
			name:name,
			
		})
	}
})

module.exports = route