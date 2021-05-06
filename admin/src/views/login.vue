<template>
    <div class="login">
        <din class="contaienr">
            <b>管理员登录</b>
            <div class="block">
                <label for="Name">管理员：</label>
                <input name="Name" type="text" v-model="data.name" placeholder="输入管理员">
            </div>
            <div class="block">
                <label for="email">邮箱：</label>
                <input name="email" type="email" v-model="data.email" placeholder="输入邮箱">
            </div>
            <div class="block">
                <label for="password">密码：</label>
                <input name="password" type="password" v-model="data.password" placeholder="输入密码">
            </div>
            <div class="block center">
                <button @click="login()">登 录</button><button @click="rest()">重 置</button>
            </div>
        </din>
    </div>
</template>

<script>
export default {
    data(){
        return{
            data:{
                name:'',
                email:'',
                password:'',
            }
        }
    },
    methods:{
        login(){
            let name = this.data.name;
            let email = this.data.email;
            let password = this.data.password;
            if(name && email && password){
                this.axios.post('/api/login',this.data).then(succe => {
                if(succe.status == 200){
                    const token = succe.data.token
                    const name = succe.data.name
			        localStorage.setItem('token',token)
                    localStorage.setItem('name',name)
                    console.log(succe)
                    this.$router.push('/')
                }
            })
            }
            
        },
        rest(){
            this.data = ''
        }
    }
}
</script>
<style scoped="scoped" lang="scss">

.contaienr{
    position: absolute;
    box-shadow: 0 0 3px 1px rgb(123, 123, 123);
    border-radius: 5px;
    padding: 10px;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    .block{
        width: 300px;
        margin: 10px auto;
        label{
            display: inline-block;
            width: 80px;
            text-align: right;
        }
        input{
            padding: 5px;
            border-radius: 5px;
            border: 1px solid rgb(123, 123, 123);
        }
        input:focus{
            outline: none;
        }
        
    }
    .center{
            text-align: center;
            button{
                margin: 0 10px;
                padding: 5px 10px;
                border-radius: 5px;
                border: none;
                background-color: rgb(81, 114, 221);
            }
        }
}
</style>