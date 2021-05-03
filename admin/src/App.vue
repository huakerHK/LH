<template>
  <div id="app">
    
	<div class="contaienr">
		<div class="head">head</div>
		<div class="main">
			<side>
				<div id="nav">
				  <router-link to="/">文章</router-link>
				  <router-link to="/store">仓库</router-link>
				</div>
				
			</side>
			<main>
				<router-view/>
			</main>
		</div>
		<div class="footer">footer</div>
	</div>
	
  </div>
</template>

<style scoped="scoped" lang="scss">
.contaienr {
	.head{
		background-color: rgb(123,32,43);
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
	.footer{
		
	}
}
</style>
