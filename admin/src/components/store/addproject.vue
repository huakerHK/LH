<template>
    <div class="add-project">
        <div class="name">
			<lable>项目主题:</lable>
			<input type="text" v-model="data.name" placeholder="输入项目标题">
		</div>
		<div class="content">
			<lable>项目描述:</lable>
			<textarea v-model="data.describe" placeholder="输入项目描述"></textarea>
		</div>
        <div class="path">
            <lable>项目路径:</lable>
            <input type="text" v-model="data.path" placeholder="输入项目路径">
        </div>
		<div class="btn">
			<button @click="send()">确 认</button>
		</div>
    </div>
</template>

<script>
export default {
    name:'add-project',
    data(){
        return{
            data:{
                name:'',
                describe:'',
                path:'',
            }
        }
    },
    methods:{
        send(){
            let name = this.data.name;
            let describe = this.data.describe;
            let path = this.data.path;
            if(name.length > 0 && describe.length > 0 && path.length > 0){
                this.axios.post('/api/add-project',{
                query:this.data
            }).then(succe => {
                if(succe.status == 200){
                    this.$router.push('/store')
                }
            })
            }
            
        }
    }
}
</script>

<style scoped='scoped' lang='scss'>
label,input,textarea{
		display: block;
	}
	.name,.content,.path,.btn{
		margin: 10px;
	}
	.name input,.content textarea, .path input{
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
			padding: 5px;
			border: none;
			border-radius: 5px;
			background-color: rgb(70, 107, 241);
		}
	}
</style>