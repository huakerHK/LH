<template>
    <div class="store">
        <table>
    	<thead><tr>文章分类管理</tr></thead>
    	<tbody>
    		<tr>
    			<td class="one">时间</td>
    			<td class="one">类型</td>
    			<td class="one">描述</td>
    			<td class="one">项目路径</td>
    			<td class="one">操作</td>
    		</tr>
    		<tr v-for="(items,key) in data.arr" :key='key' @click="articl(key)">
    			<td>{{items.date}}</td>
    			<td>{{items.name}}</td>
    			<td>{{items.describe}}</td>
    			<td>{{items.store}}</td>
    			<td>
                    <button @click.stop="edit(key)">编辑</button> 
                    <button @click.stop="delet(key)">删除</button>
                </td>
    		</tr>
    	</tbody>
        {{arr}}
    </table>
	
  
    </div>
</template>

<script>
export default {
    name:'store',
    props:['data'],
    data() {
        return {
            arr:this.data.arr,
        }
        
    },
    methods:{
       edit(key){
           console.log(this.data.arr[key])
           this.$router.push({
               name:'edit-project',
               params:this.data.arr[key]
           })
       },
       delet(key){
           const sure = confirm('确定要删除吗？')
           if(sure){
               this.axios.post('/api/del-project',{
                   query:this.data.arr[key]._id
               }).then( succe => {
                   if(succe.status == 200){
                       this.$emit('delet','更新')
                   }
               })
           }
       }
    },
    watch: {
    
  },
    created() {
        
    }
}
</script>

<style scoped='scoped' lang='scss'>
.store{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-height: 600px;
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
	
</style>