<template>
  <div class="home">
	  <div class="head-container-bg">
		  <div class="head-container">如果才华实现不了野心，那就静下心来，埋头苦干</div>
	  </div>
	  <!-- mian -->
	  <div class="container">
		  <ul>
			  <li v-for="(item,keys) in data" :key='keys'>
				  <router-link @click="datel(keys)" :to="'/type/' + item.title.replace('/','')">
					  <div>
					  	<img :src="item.path" alt="图片未找到">
					  </div>
					  <div>
					  	<b class="title">{{item.title}}</b>
					  	<p class="articl">{{item.descibe}}</p>
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
      data:[],
    }
  },
  methods:{
     getData (){
       this.axios.post('/api/Alltype').then(data => {
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
	
  }
}

</script>

<style scoped="scope" lang="scss">

.head-container-bg {
	position: relative;
	height: 200px;
	background-image: url(../../../public/static/images/bg.png);
	background-repeat: no-repeat;
	background-size: cover;
	.head-container {
		position: absolute;
		color: white;
		font-weight: 700;
		font-size: 1.5rem;
		top: 50%;
		left: 50%;
		transform: translate(-50%,-50%);
	}
}

.container {
	width: 60%;
	margin: 10px auto;
	padding: 10px 50px;
	border-radius:10px ;
	box-shadow: 0px 0px 3px 2px rgb(217,217,213);
}
ul {
	list-style: none;
}
ul li:hover {
	border-radius: 10px;
	box-shadow: 0 0 2px 1px rgb(217,217,213);
}
ul li a{
	text-decoration: none;
	
	display: flex;
	margin-bottom: 10px;
	padding: 10px;
	border-radius: 10px;
	div:nth-child(2) > .title {
		color: rgb(0, 0, 0);
	}
	div:nth-child(2) > .articl {
		font-size: 1rem;
		font-weight: 700;
		color: rgb(72, 72, 72);
	}
	div:nth-child(2) > .date {
		font-size: .5rem;
		font-weight: 700;
		color: rgb(168, 168, 168);
	}
}
	
ul li div:nth-child(1) {
	flex: 1;
}
ul li a div:nth-child(2) {
	flex: 5;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	margin-left: 20px;
}
.title:hover,.articl:hover,.date:hover {
	color: rgb(70, 212, 255);
}
.container img {
	width: 100%;
	height: 100%;
	min-height: 100%;
	min-width: 100%;
	text-align: center;
	color:rgb(168, 168, 168) ;
	border-radius: 10px;
	box-shadow: 1px 1px 10px 4px rgb(217,217,213);
}
</style>
