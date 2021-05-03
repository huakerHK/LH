<template>
  <div class="home">
    <div class="head">
		<button @click="addArticl()">新增文章分类</button>
	</div>
	<div>
		<router-view></router-view>
	</div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'home',
  data(){
	  return{
		  data:''
	  }
  },
  methods:{
	  addArticl(){
		  this.$router.push('/addArticlType')
	  }
  },
 created() {
 	this.$router.push('/type')
 }
}
</script>

<style scoped="scoped" lang="scss">
	.head button {
		border: none;
		padding: 5px;
		background-color: rgba($color: #4292f3, $alpha: 1.0);
		border-radius: 5px;
	}
	
</style>
