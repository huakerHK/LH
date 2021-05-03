<template>
  <div id="app">
    <!--主导航条-->
    <div class="header">
      <NavMenu/>
    </div> 
    
    <!--主要内容-->
    <div class="main">
      <router-view/>
      
    </div>

    <!--页脚-->
    <div class="footer">
      <Footer/>
    </div>
        
     
  </div>
</template>

<script>
import NavMenu from './components/nav/NavMenu'
import Footer from './components/footer.vue'
export default {
  name:'#app',
  data () {
    return{
      data:{},
    }
  },
  components:{
    NavMenu,Footer,
  },
  
} 
</script>
<style scoped="scoped">
	.header{
		position: sticky;
		z-index: 1;
		width: 100%;
		top: 0;
		background-color: white;
	}
</style>
