const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/blogs',{ useUnifiedTopology: true })
		.then(result => console.log('数据库链接成功'))
		.catch(err => console.log(err))
module.exports = mongoose