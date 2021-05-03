import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
	  children:[
		  {
			  path:'type',
			  name:'type',
			  component:() => import('./components/articlType.vue')
		  },
	  ]
    },
	//	文章类型
	//添加文章类型
	{
		path:'/addArticlType',
		name:'addArticlType',
		component:() => import('./components/addArticlType.vue')
	},
	//	编辑文章类型
	{
		path:'/edit',
		name:'edit',
		component:() => import('./components/edit.vue')
	},

	//	文章
	//	详细文章内容
	{
		path:'/articl',
		name:'articl',
		component:() => import('./components/articl/articl.vue')
	},
	//	修改文章
	{
		path:'/editarticl',
		name:'editarticl',
		component:() => import('./components/articl/editarticl.vue')
	},
	//	发布文章内容
	{
		path:'/addArticl',
		name:'addArticl',
		component:() => import('./components/articl/addarticl.vue')
	},

	//	仓库
    {
      path: '/store',
      name: 'store',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('./views/store.vue'),
    }
	,{
		path:'/add-project',
		name:'add-project',
		component:() => import('./components/store/addproject.vue')
	},
	{
		path:'/eidt-project',
		name:'edit-project',
		component:() => import('./components/store/editproject.vue')
	},
	{
		path:'/editor',
		component:() => import('./components/editor/editor.vue')
	}
  ]
})
