<template>
	<div class="addArticlType">
		<div class="title">
			<lable>文章类型:</lable>
			<input type="text" v-model="data.title" placeholder="输入文章类型">
		</div>
		<div class="content">
			<lable>文章描述:</lable>
			<textarea v-model="data.descibe"></textarea>
		</div>
		<div class="btn">
			<button @click="send()">确 认</button>
		</div>
	</div>
</template>

<script>
// import editor from './editor/editor'
export default{
		name:'addArticlType',
		// components:{editor},
		data() {
			return {
				data:{
					title:'',
					descibe:'',
				}
			}
		},
		methods:{
			send(){
				if(this.data.title.length > 0 && this.data.descibe.length > 0) {
					this.axios.post('/api/addArticltype/',this.data).then(succes => {
						if(succes.status = 200) this.$router.push('/type')
					})
				}
				
			}
		}
	} 
</script>

<style lang="scss" scoped="scoped">
	label,input,textarea{
		display: block;
	}
	.title,.content,.btn{
		margin: 10px;
	}
	.title input,.content textarea{
		width: 50%;
		margin-left: 70px;
		border: 1px solid rgb(123,123,123);
		border-radius: 10px;
		padding: 5px;
	}
	input {
		height: 30px;
	}
	textarea{
		height: 100px;
	}
	.btn{
		margin-top: 10px;
		button {
			padding: 10px;
			border: none;
			border-radius: 10px;
			background-color: rgb(70, 107, 241);
		}
	}
</style>
