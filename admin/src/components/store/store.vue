<template>
  <div class="store">
	  <div class="head">
		  <button @click="add()">添加项目到仓库</button>
	  </div>
	    <div class="main">
			<store v-bind:data='data' @delet='up'/>
			<div class="btn-container">
	   			<button @click="previous()">上一页</button>
	   				第{{data.currPage}}/{{data.pages}}页
	   			<button @click="next()">下一页</button>
			</div>
		</div>
  </div>
</template>

<script>
import store from './all.vue'
	export default {
		components:{
			store,
		},
		data() {
			return {
				data:[],
				page:{
					previous:0,
					next:10,
				}
			}
		},
		methods:{
			up(msg){
				this.getdata()
			},
			getdata(){
				this.axios.post('/api/store',{
					query:this.page
				}).then( succe => {
					this.data = succe.data
					console.log(this.data)
				})
			},
			add(){
				this.$router.push('/add-project')
			},
			previous() {
				if(this.page.previous <= 0) {
					alert('当前已是第一页')
				}else{
					this.page.pages -= 10;
					this.page.currPage -= 10
					this.getdata();
				}
			},
			next() {
				this.page.currPage += 10;
				this.page.pages += 10;
				console.log(this.page)
				
			}
		},
		computed:{

		},
		created() {
			this.getdata()
		}
	}
</script>

<style lang="scss" scoped="scoped">
.head button {
		border: none;
		padding: 5px;
		background-color: rgba($color: #4292f3, $alpha: 1.0);
		border-radius: 5px;
	}
	.main {
		position: relative;
		min-height: 600px;
	}
.btn-container{
	position: absolute;
	bottom: 0;
	margin-top: 10px;
	button {
			padding: 5px;
			border: none;
			border-radius: 5px;
			margin: 0 10px;
			background-color: rgb(70, 144, 235);
		}
	}
</style>
