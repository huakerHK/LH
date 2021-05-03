<template>
	<div class="addarticl">
		<div class="title">
			<lable>文章标题:</lable>
			<input type="text" v-model="data.title" placeholder="输入标题">
		</div>
		<div class="content">
			<lable>文章内容:</lable>
			<editor ref="child"/>
		</div>
		<div class="btn">
			<button @click="send()">确 认</button>
		</div>
	</div>
</template>

<script>
import editor from '../editor/editor'
export default {
	name:'addarticl',
	components:{editor},
	data(){
		return{
			data:{
				type:'',
				route:'',
				title:'',
			}
		}
	},
	methods:{
		send(){
			let chil = this.$refs.child.editorData
			const articl = {
				type:this.data.type,
				title:this.data.title,
				content:chil,
			}
			this.axios.post('/api/release',articl).then( succe => {
				if(succe.status == 200){
					this.$router.push(this.data.route)
				}
			})
		}
	},
	created(){
		//为发送文章到服务器做准备
		this.data.type = this.$router.currentRoute.query.title
		//	为发送成功之后跳转到原来的路由做准备
		this.data.route = this.$router.currentRoute.query.route
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
			padding: 5px;
			border: none;
			border-radius: 5px;
			background-color: rgb(70, 107, 241);
		}
	}
</style>
