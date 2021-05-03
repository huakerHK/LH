const express = require('express');
//	导入数据库
require('./mongoose/config');
//	导入bodyparser
const bodyParser = require('body-parser');
const path = require('path')

//创建服务器
const app = express();
app.use(bodyParser.urlencoded({extended:false}));
//	使用json出来请求数据
app.use(express.json());
//	开放服务器静态资源
app.use(express.static(path.join(__dirname,'public')))
app.use('/test',(req,res) => {
	console.log()
})

//	页面 views
//使用路由  首页展示所有数据类型
app.use(require('./route/index/index'));
	//展示单个类型的所有数据 组件 components
	app.use(require('./route/index/type'));

//	作品页面
app.use(require('./route/list/index'));
//	关于页面 路由  
app.use(require('./route/auther/index'));

//	详情路由
app.use(require('./route/detal/index'));
	//添加评论 
	app.use(require('./route/detal/commen/index'));


//	管理员
//	首页
app.use(require('./admin/admin.js'))
//	仓库
app.use(require('./admin/store.js'))
//	监听服务器
app.listen(5000,console.log('服务器启动成功'));