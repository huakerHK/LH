<template>
    <div id="nav">
		<router-link to="/articlType">文章</router-link>
		<router-link to="/store">仓库</router-link>
	</div>
</template>

<script>
export default {
	data(){
		return{

		}
	},
    methods:{

	}
}
</script>

<style scoped='scoped' lang='scss'>
#nav a{
	text-decoration: none;
	word-break: keep-all;
	color: white;
	padding: 10px;
	margin-bottom: 10px;
	border-bottom: 1px solid rgb(123, 123, 123);
	&.router-link-exact-active{
		border-radius: 10px;
		background-color: white;
		color: black;
	}
}

</style>