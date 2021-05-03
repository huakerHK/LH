import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('./views/Home/Home.vue'),
	  //二级路由
	  children:[
		  
		  // component: () => import('./views/Home/Home.vue')
	  ]
    },
	{
		path: '/store',
		name: 'store',
		component: () => import('./views/List/list.vue')
	},
    {
      path: '/mercenary',
      name: 'mercenary',
      component: () => import('./views/Mercenary/Mercenary.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('./views/About/About.vue')
    },
	//
    {
      path:'/type/:title',
      name:'type',
      component: () => import('./components/public/type/type.vue')
    },
	//详情页
	{
		path:'/detal',
		name:'detal',
		component:() => import('./components/public/detal/detal.vue')
	},
  {
    path:'/store/:store',
    component:() => import('./components/public/show.vue')
  }
  ]
})
