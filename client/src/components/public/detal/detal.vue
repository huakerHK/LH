<template>
	<div class="detal">
		<div class="detal-container">
			<!-- 标题 -->
			<h2>{{data.title}}</h2>
			<div class="line"><!-- 分割线 --></div>
			<div class="content" v-html="data.content">{{data.content}}</div>
			<p class="date"><span>{{data.date}}</span></p>
			<div class="line"><!-- 分割线 --></div>
			
			<!-- 评论区 -->
			<commen v-bind:aid='this.$route.query._id'/>
			
		</div>
	</div>
</template>

<script>
	import commen from './commen/commen.vue'
	export default {
		name:'detal',
		components:{
			commen
		},
		data(){
		  return{
				detal:{
					title:this.$route.query.title,
					_id:this.$route.query._id,
				},
				commonlist:[],
				data:[],
				
			}
		},
		methods:{
			getDetal() {
				this.axios.post('/api/detal',{
					detal:this.detal
				}).then(result => {
					this.data = result.data
					console.log(this.data)
				}).catch(err => {
					console.log('获取详情失败')
				})
			},
			// getCommen(){
			// 	this.axios.post('/api/commen',{
			// 		aid:this.$route.query._id,
			// 	}).then(result => {
			// 		this.commonlist = result.data
			// 		console.log(this.commonlist)
			// 	})
			// }
		},
		created(){
			this.getDetal()
			// this.getCommen()
		}
	}
	
</script>

<style scoped="scoped" lang="scss">
	.detal-container {
		display: flex;
		flex-direction: column;
		justify-content: start;
		width: 60%;
		min-height: 600px;
		margin: 10px auto;
		padding: 10px 50px;
		border-radius:10px ;
		box-shadow: 0px 0px 3px 2px rgb(217,217,213);
		.content{
			font-size: 1rem;
			white-space: pre-wrap;
			background-color: rgb(245, 246, 247);
			border-radius: 10px;
			padding: 20px;
		}
		.line {
			height: 1px;
			background-color: rgb(168, 168, 168);
		}
		.date {
			font-size: .5rem;
			font-weight: 700;
			color: rgb(168, 168, 168);
		}
}
	

</style>
