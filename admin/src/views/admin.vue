<template>
    <div id="admin">
        <div class="head">
            <el-dropdown class="name" trigger="click" size="small">
                <span class="el-dropdown-link">
                    {{getadmin()}}<i class="el-icon-arrow-down el-icon--right"></i>
                </span>
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item><span @click="a()">退出</span></el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
        </div>
        <div class="main">
            <side>
			  <NavMenu></NavMenu>
		  </side>
		  <main>
		  	<router-view></router-view>
		  </main>
        </div>
    </div>
</template>

<script>
import NavMenu from '../components/nav/nav.vue'
export default {
  name: 'admin',
  components:{
	  NavMenu
  },
  methods:{
      getadmin(){
          return localStorage.name
      },
      a(){
          localStorage.removeItem('token')
          localStorage.removeItem('name')
          this.$router.push('/login')
      }
  }
}
</script>

<style scoped='scoped' lang='scss'>
.head{
    height: 50px;
    background-color: rgb(53, 53, 54);
    ul {
        list-style: none;
    }
    .name{
        line-height: 50px;
        margin-left: 10%;
        a{
            color: white;
            text-decoration: none;
        }
    }
}
.head ul li{
    position: relative;
}
.head ul li ul {
    position: absolute;
    display: none;
}
.head ul li:hover ul {
    background-color: wheat;
    border-radius:5px ;
    text-align: center;
    display: block;
}
.head,.main{
    margin-bottom: 10px;
}
.main{
	display: flex;
	min-height: 600px;
	side,main {
		padding: 10px;
		border: 1px solid rgb(166,166,166);
	}
	side {
		flex: 1;
		background-color: rgb(111, 150, 241);
		#nav {
			display: flex;
			flex-direction: column;
			justify-content: center;
			a{
				text-decoration: none;
				color: white;
				word-break: keep-all;
				margin: 5px;
				padding: 5px;
			}
			a:focus {
				border-radius: 5px;
				background-color: white;
				color: black;
			}
		}
	}
	main {
		flex:11;
		margin-left: 10px;
	}
}
</style>