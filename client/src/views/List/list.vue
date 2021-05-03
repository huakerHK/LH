<template>
  <div class="home">
	  <div class="head-container-bg">
		  <div class="head-container">个人仓库</div>
	  </div>
	  <!-- mian -->
	  <div class="container">
		  <list v-bind:data='data'/>
	  </div>
    
  </div>
</template>

<script>
// @ is an alias to /src
import list from '../../components/list/content.vue'

export default {
  name: 'home',
  data(){
    return{

      data:[],
    }
  },
  components:{
	  list
  },
  methods:{
     getData (){
       this.axios.post('/api/list/').then(result => {
		   this.data = result.data
		   console.log(result)
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
	min-height: 800px;
	width: 60%;
	margin: 10px auto;
	padding: 10px 50px;
	border-radius:10px ;
	box-shadow: 0px 0px 3px 2px rgb(217,217,213);
}
</style>
