<template>
	<div class="commen">
		<div class="container-1">
			<div>
				<lable>评论</lable>
			</div>
			<div class="line"><!-- 分割线 --></div>
			
			<div>
				<textarea v-model="data.content" placeholder="该评论为匿名评论,请勿恶意灌水"></textarea>
			</div>
			
			<div>
				<input type="button" value="提交" @click="submit()">
			</div>
		</div>
		<div class="container-2">
			<div>
				<ul>
					<li v-for="(item,key) in commonlist" :key='key'>
						<p>第{{key+1}}楼</p>
						<p>{{item.content}}</p>
						<p>{{item.date}}</p>
					</li>
				</ul>
			</div>
		</div>
			
	</div>
</template>

<script>
	export default {
		name:'commen',
		props:[
			'aid'
		],
		data() {
			return {
				commonlist:[],
				data:{
					aid:this.$props.aid,
					content:'',
				}
			}
		},
		methods:{
			getCommen(){
				this.axios.post('/api/commen',{
					aid:this.$route.query._id,
				}).then(result => {
					this.commonlist = result.data
					console.log(this.commonlist)
				})
			},
			submit(){
				console.log('test')
				if(this.data.content.length > 0) {
					this.axios.post('/api/commen/add',this.data).then(succe => {
						if(succe.status == 200) {
							this.getCommen();
						}
						console.log(succe)
						
					})
				}
				
			},
		},
		created(){
			this.getCommen()
		}
	}
</script>

<style scoped="scoped" lang="scss">
.container-1{
	margin-top: 10px;
	.line{
		width: 100%;
		height: 1px;
		background: rgb(166,166,166);
	}
	textarea{
		width: 50%;
		height: 150px;
		margin-top:10px;
	}
}
.container-2 ul {
	list-style: none;
	li {
		border-bottom: 1px solid rgb(166,166,166);
		p:nth-child(1){
			font-size: 1rem;
		}
		p:nth-child(3){
			font-size: .5rem;
			color: rgb(166,166,166);
		}
	}
}
</style>
