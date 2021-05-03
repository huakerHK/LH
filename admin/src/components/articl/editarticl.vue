<template>
    <div class="editArticl">
        <div class="title">
			<lable>标题:</lable>
			<input type="text" v-model="data.data.title">
		</div>
		<div class="describe">
			<lable>内容:</lable>
			<editor ref="child" :content="data.data.content" />
			<!-- <textarea v-model="data.data.content"></textarea> -->
		</div>
		<div class="btn">
			<button @click="sure()">确  定</button>
		</div>
    </div>
</template>

<script>
import editor from '../editor/editor'
export default {
    name:'editArticl',
	components:{editor},
    data(){
        return{
            data:[]
        }
    },
    methods:{
        sure(){
			let chdata = this.$refs.child.editorData
			this.data.data.content = chdata
            this.axios.post('/api/upArticl',this.data).then( succe => {
                if(succe.status = 200) {
                    const url = this.data.route
                    this.$router.push(url)
                }
            })
        }
    },
    created(){
        this.data = this.$route.query
        console.log("test: " + this.$route)
    }
}
</script>

<style scoped="scoped" lang='scss'>
.editArticl {
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
