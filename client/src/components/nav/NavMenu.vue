<template>
    <div id="nav" class="nav">
          <div class="nav-contaienr">
            <div class="left logo">
				<ul>
					<li><b>龙华</b></li>
				</ul>
             <!-- <router-link to="/login">登录</router-link> -->
            </div>
            <div class="right">
				<ul>
					<li><router-link to="/">首页</router-link></li>
					<li><router-link to="/store">仓库</router-link></li>
					<li><router-link to="/mercenary">佣兵</router-link></li>
					<li><router-link to="/about">关于</router-link></li>
				</ul>
            </div>
          </div>
          </div>
    </div>
</template>

<script>
export default {
  name:'nav',

}
</script>

<style scoped="scoped" lang="scss">
.nav {
	width: 100%;
	color: black;
	
	background: rgba(255, 255, 255, 0);
	box-shadow: 1px 1px 3px 1px rgba(207, 207, 207, 0.5);
}
.left {
	display: flex;
	justify-content: center;
}
.nav-contaienr{
  display: flex;
  width: 60%;
  margin: 0 auto;
  justify-content: space-between;
  a {
	display: block;
	margin: 5px;
	padding: 1px;
  	text-decoration: none;
  	font-weight: 600;
	color: black;
  }
}
ul {
	list-style: none;
	display: flex;
	
}

ul li a:focus {
	border-bottom: 1px solid white;
}
ul li a:hover{
	border-radius: 1px;
	border-bottom: 1px solid white;
}
</style>