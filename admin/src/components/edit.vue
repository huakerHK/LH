<template>
	<div class="edit">
		<div class="title">
			<lable>标题:</lable>
			<input type="text" v-model="data.title">
		</div>
		<div class="describe">
			<lable>描述:</lable>
			<textarea v-model="data.descibe"></textarea>
		</div>
		<div class="btn">
			<button @click="sure()">确  定</button>
		</div>
	</div>
</template>

<script>
	export default {
		name:'edit',
		data(){
			return {
				data:[]
			}
		},
		methods:{
			sure(){
				this.axios.post('/api/updata',this.data).then(succe => {
					if(succe.status ==200) {
						this.$router.push('type')
					}
				})
			}
		},
		created() {
			this.data = this.$router.currentRoute.query;
		}
	}
</script>

<style lang="scss" scoped="scoped">
	.edit {
		padding: 10px;
		border: 1px solid rgb(123,123,123);
		margin: 10px 0;
		border-radius: 10px;
	}
	label,input,textarea{
		display: block;
	}
	input,textarea {
		width: 50%;
		border-radius: 10px;
		padding: 10px;
		border: 1px solid rgb(123,123,123);
	}
	textarea{
		min-height: 100px;
	}
	.btn {
		margin: 10px 0;
		button{
			border: none;
			padding: 10px;
			border-radius: 5px;
			background-color: rgb(61, 161, 255);
		}
	}
</style>
