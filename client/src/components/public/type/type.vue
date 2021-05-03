<template>
  <div class="home">
	  <div class="head-container-bg">
		  <div class="head-container">{{this.$route.params.title}}</div>
	  </div>
	  <!-- mian -->
	  <div class="container">
		  <ul v-for="(item,keys) in data">
			  <li>
				  <router-link @click="datel(keys)" target="_blank" :to="{name:'detal',query:{_id:item._id,title:name,}}">
					  <!-- 第一个容器 图片 -->
					 <!-- <div>
					  	<img src="/static/images/bg.webp" alt="">
					  </div> -->
					  <!-- 第二个容器 文章内容 -->
					  <div>
					  	<h3 class="title">{{item.title}}</h3>
					  	<p class="articl">{{item.content}}</p>
					  	<p class="date"><span>{{item.date}}</span></p>
					  </div>
				  </router-link>
			  </li>
		  </ul>
	  </div>
    
  </div>
</template>

<script>
// @ is an alias to /src


export default {
  name: 'home',
  data(){
    return{
		name:this.$route.params.title.replace('/','').toLowerCase(),
		data:[],
    }
  },
  methods:{
     getData (){
		 const name = this.name
       this.axios.post('/api/type/',{name:name}).then(data => {
         this.data = data.data
		 console.log(this.data)
       })
     },
	 datel(keys){
		 console.log(keys)
	 }
    
  },
  created (){
    this.getData();
	console.log(this.name)
  }
}

</script>

<style scoped="scope" lang="scss">

.head-container-bg {
	position: relative;
	height: 200px;
	background-image: url('/static/images/bg.png');
	background-repeat: no-repeat;
	background-size: cover;
}
.head-container {
	font-size: 20px;
	font-weight: 600;
	color: white;
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%,-50%);
}
// 文章样式
.container {
	width: 60%;
	min-height: 600px;
	margin: 10px auto;
	padding: 10px 50px;
	border-radius:10px ;
	box-shadow: 0px 0px 3px 2px rgb(217,217,213);
	ul {
		list-style: none;
		li {
			border-bottom: 1px solid rgb(217,217,213);
		}
	}
	ul li a{
		height: 150px;
		text-decoration: none;
		margin-bottom: 10px;
		padding: 10px;
		border-radius: 10px;
		div > .title {
			color: rgb(0, 0, 0);
		}
		div > .articl {
			height: 100px;
			padding: 10px 0;
			font-size: 1rem;
			font-weight: 700;
			color: rgb(72, 72, 72);
			overflow: hidden;
			text-overflow: ellipsis;
		}
		div > .date {
			font-size: .5rem;
			font-weight: 700;
			color: rgb(168, 168, 168);
		}
	}
}
</style>
