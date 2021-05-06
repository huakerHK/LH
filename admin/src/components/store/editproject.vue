<template>
    <div class="edit">
        <div class="title">
			<lable>标题:</lable>
			<input type="text" v-model="data.name">
		</div>
		<div class="describe">
			<lable>内容:</lable>
			<textarea v-model="data.describe"></textarea>
		</div>
        <div class="path">
            <lable>路径:</lable>
			<input type="text" v-model="data.store">
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
        return{
            data:[]
        }
    },
    methods:{
        sure(){
            let name = this.data.name;
            let describe = this.data.describe;
            let store = this.data.store;
            if(name.length > 0 && describe.length > 0 && store.length > 0){
                this.axios.post('/api/store/updata',this.data).then(succe => {
                    if(succe.status == 200) {
                        this.$router.push('/store')
                    }
                })
            }
        }
    },
    created(){
        this.data = this.$route.params
        console.log(this.data)
    }
}
</script>

<style scoped="scoped" lang="scss">
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
		min-height: 200px;
	}
	.btn {
		margin: 10px 0;
		button{
			border: none;
			padding: 5px;
			border-radius: 5px;
			background-color: rgb(61, 161, 255);
		}
	}
</style>