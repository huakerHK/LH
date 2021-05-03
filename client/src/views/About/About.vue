<template>
    <div class="about">
        <div class="bg">
			图片
		</div>
		<div class="car">
			<!-- 头像 -->
			<div class="avarlt">
				<img src="static/images/bg.png" alt="">
			</div>
			<!-- 主要信息 -->
			<div v-for="(item,key) in data">
				<ul>
					<li>昵称:{{item.name}}</li>
					<li>QQ:{{item.QQ}}</li>
					<li v-for="(items,keys) in item.descibe">
						<span>很有意思的话:</span>
						<p>{{items.a}}</p>
						<p>{{items.b}}</p>
					</li>
				</ul>
			</div>
		</div>
    </div>
</template>

<script>
	export default {
		name:"about",
		data() {
			return{
				data:[],
			}
		},
		methods:{
			getAuther(){
				this.axios.post('/api/auther').then((result) => {
					this.data = result.data
					console.log(this.data)
				}).catch(err => {
					console.log(err)
				})
			}
			
		},
		created() {
			this.getAuther()
		}
	}
</script>

<style scoped="scoped" lang="scss">
	.bg{
		height: 400px;
		background-position: center;
		background-image: url('/static/images/bg-auther.png');
	}
	.car {
		width: 60%;
		min-height: 600px;
		margin: 10px auto;
		padding: 10px;
		border-radius:10px ;
		box-shadow: 0 0 3px 2px rgb(217,217,213);
		.avarlt {
			position: relative;
			img {
				height: 150px;
				width: 150px;
				border: 1px solid rgb(217,217,213);
				box-shadow: 2px 2px 6px 5px rgb(217,217,213);
				border-radius: 75px;
				position: absolute;
				top: 50%;
				left: 50%;
				transform: translate(-50%,-50%);
			}
		}
		
	}
	.car div:nth-child(2) {
		margin-top: 150px;
		padding: 0 200px;
			
		ul {
			list-style: none;
			li {
				margin-bottom: 10px;
			}
		}
		
	}
</style>