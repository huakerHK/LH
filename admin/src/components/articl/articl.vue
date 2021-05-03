<template>
  <div class="hello">
	  <button class="add_btn" @click="addarticl()">发布文章</button>
    <table>
    	<thead><tr>文章管理</tr></thead>
    	<tbody>
    		<tr>
    			<td>时间</td>
    			<td>标题</td>
				<td>类型</td>
    			<td>内容</td>
    			<td>操作</td>
    		</tr>
    		<tr v-for="(items,key) in data" :key='key'>
    			<td>{{items.date}}</td>
    			<td>{{items.title}}</td>
				<td>{{items.type}}</td>
    			<td>{{items.content}}</td>
    			<td><button @click="edit(key)">编辑</button> <button @click="delet(key)">删除</button></td>
    		</tr>
    	</tbody>
    </table>
	<div class="btn-container"><button @click="previous()">上一页</button>第{{data.currPage}}/{{data.pages}}页<button @click="next()">下一页</button></div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data() {
  	  return {
		  pages:{
			  previous:0,
			  next:10
		  },
  		  data:[]
  	  }
  },
  computed:{
	  title() {
		  let title = this.$route.query.title.replace('/','').toLocaleLowerCase();
		  return title
	  }
  },
  methods:{
  	  get(){
		  this.data = []
		  const title = this.title;
		  console.log(title)
  		  this.axios.post('/api/articl',{title:title}).then(succe => {
			  this.data = succe.data
			  console.log(this.data)
		  })
  	  },
		addarticl(){
			this.$router.push({
				path:'/addArticl',
				query:{
					title:this.title,
					route:this.$router.currentRoute.fullPath
				},
			})
		},
	  edit(key){
		  this.$router.push({
			  path:'/editarticl',
			  query:{
				    data:this.data[key],
			  		type:this.title,
			  		route:this.$router.currentRoute.fullPath
			    }
			})
	  },
	  delet(key){
		  let sure = confirm('确认要删除吗？')
		  if(sure == true){
			  this.axios.post('/api/delArticl',{
				  type:this.title,
				  _id:this.data[key]._id
			  }).then(succse => {
				  if(succse.status == 200){
					  // this.$router.push('/type')
				  }
			  })
		  }
	  },
	  previous(){
		this.pages.previous -= 10;
		   this.pages.next -= 10;
		   if(this.pages.previous >=0){
			   this.get()
		   }else{
			   alert('当前是第一页')
		   }
	  },
	  next(){
		  if(this.pages.next <= this.data.count){
			  this.pages.previous += 10;
			  this.pages.next += 10;
			  this.get();
		  }else{
			  alert('当前已是最后一页')
		  }
	  }
  },
  created() {
	  this.get()
	  
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped="scoped" lang="scss">
.add_btn {
	border: none;
	border-radius: 5px;
	background-color: #4292f3;
	padding: 5px;
}
table{
		table-layout:fixed;
		margin-top: 10px;
		padding: 10px;
		border-radius: 5px;
		border: 1px solid rgb(166,166,166);
		border-spacing:0;
		thead{
			color: rgb(0,0,0);
		}
		tbody tr{
			
			td{
				padding: 10px;
				min-width: 100px;
				max-width: 800px;
				color: rgb(123,123,123);
				overflow: hidden;
				/* 强制在同一行内显示所有文本，直到文本结束或者遭遇 br 对象。不换行 */
				word-break: keep-all;
				/* 内容超出宽度时隐藏超出部分的内容 */
				white-space:nowrap;
				/* 当对象内文本溢出时显示省略标记(...) ；需与overflow:hidden;一起使用。*/
				text-overflow:ellipsis;
				border-bottom: 1px solid rgb(123,123,123);
				button{
					border: none;
					border-radius: 3px;
					padding: 3px;
					background-color: rgba($color: #4292f3, $alpha: 1.0);
					margin: 1px;
				}
			}
			
		}
	}
	.btn-container{
		
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
