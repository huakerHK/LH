<template>
	<div class="store">
		<div class="container">
			<ul>
				<li v-for="(item, key) in data" :key='key'>
					<a target="_blank" :href="item.store">{{item.name}}</a>
					<p>{{item.describe}}</p>
					{{item.path}}
					<span>{{item.date}}</span>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
	export default {
		name:'store',
		props:['data'],
		data() {
			return {
				
			}
		},
		methods:{
			
		},
		created() {
		}
	}
</script>

<style scoped="scoped" lang="scss">
.container {
	padding: 0 100px;
	ul{
		list-style: none;
		li{
			margin-top: 10px;
			padding: 10px;
			p{
				font-size: 1rem;
			}
			span{
				font-size: .5rem;
				color: rgb(123,123,132);
			}
		}
		li:hover{
			border: 1px solid rgb(155, 155, 155);
			border-radius: 5px;
			box-shadow: 0 0 8px 1px rgb(166, 166, 166);
		}
	}
}
</style>
