<template>
  <div class="mercenary">
    <div class="nav">
      <div class="container">
        <div class="mydate" id="date">date</div>
        <div class="content"></div>
      </div>
    </div>
    
    <div class="main">
      <article>
		  <div class="nav">
			  <ul>
				  <label>类型：</label>
				  <li>前端</li>
				  <li>前端</li>
				  <li>前端</li>
			  </ul>
		  </div>
		  <div class="content-list">
			  <ul v-for="(item,key) in data">
				  <li>
					  <a target="_blank" href="">
						  <div class="left">
							  <img src="/static/images/bg-auther.png" alt="">
						  </div>
						  <div class="right">
							  <h2>{{item.name}}</h2>
							  <p>{{item.describe}}</p>
						  </div>
					  </a>
				  </li>
			  </ul>
		  </div>
	  </article>
	  <side>
		  <h3>{{workdesc.name}}</h3>
		  <div class="line"> <!--分割线--></div>
		  <ul v-for="(item,key) in workdesc.flow">
			  <li>{{item.desc}}</li>
		  </ul>
	  </side>
    </div>
  </div>
</template>

<script>
import {myjs,MyDate} from './js/js.js'
export default {
  name:"mercenary",
  data () {
    return {
		data:[
			{
				name:'管理系统',
				describe:'类如学生系统、管理员系统'
			},
			{
				name:'管理系统',
				describe:'类如学生系统、管理员系统'
			},
			{
				name:'管理系统',
				describe:'类如学生系统、管理员系统'
			},
			{
				name:'管理系统',
				describe:'类如学生系统、管理员系统'
			},
			{
				name:'管理系统',
				describe:'类如学生系统、管理员系统'
			},
			
		],
		workdesc:
			{
				name:'开发指南',
				flow:[
					{
						desc:'确认雇主身份'
					},
					{
						desc:'确认雇主需求'
					},
					{
						desc:'启动项目(预付30%定金)'
					},
					{
						desc:'阶段性交付项目(资金)'
					},
					{
						desc:'项目完成支付尾款'
					}
				]
			}
			
		
    }
  },
  methods:{
    test() {
      myjs();
    },
    Mydate() {
      MyDate();
    }
  },
  mounted() {
    this.test()
    this.Mydate()
  }
}
</script>

<style lang="scss" scoped="scoped">
.container {
  width: 100%;
  height: 500px;
  position: relative;
  background-image: url('/static/images/bg.png');
  background-color: rgb(0, 0, 0);
  i {
    width: 1px;
    height: 15px;
    position: absolute;
    background-color: white;
    animation: line 2s linear infinite;
  }
  .content {
    height: 30px;
    width: 60px;
    position: relative;
    box-shadow: 5px 5px 5px #ced6e0;
    background-color: transparent;
    top: 50%;
    left: 50%;
  }
  .mydate {
    position: absolute;
    top: 5%;
    left: 5%;
    transform: translate(-5%);
    color: rgb(255, 255, 255);
    font-size: 20px;
  }
  @keyframes line {
    from{
      transform:translateY(0);
    }
    to{
      transform: translateY(45vh);
    }
  }
}
// main
.main {
  position: relative;
  display: grid;
  grid-gap: 10px;
  grid-template-columns: 3fr 1fr;
  top: -100px;
  min-height: 600px;
  width: 60%;
  margin: 10px auto;
  padding: 10px 50px;
  background-color: white;
  border-radius:10px ;
  box-shadow: 0px 0px 3px 2px rgb(217,217,213);
  article,side{
	  padding: 10px;
	  border-radius: 5px;
	  background-color: rgb(240, 242, 245);
  }
  ul {
	  list-style: none;
	  display: flex;
  }
  a{
	  text-decoration: none;
	  color: black;
  }
  article > .nav{
	  ul li {
			margin-right: 10px;
	  }
  }
  article > .content-list > ul li:hover {
	  background-color: white;
  }
  article > .content-list > ul li{
	  width: 100%;
	  border-bottom: 1px solid rgb(166, 166, 166);
	  a {
		  display: grid;
		  grid-template-columns: 1fr 3fr;
		  .left {
			  padding: 10px;
			  img{
				  width: 100%;
				  border-radius: 5px;
			  }
		  }
	  }
  }
  side {
	  height: 30%;
	  .line {
		  height: 1px;
		  background-color: rgb(166, 166, 166);
	  }
	  ul li {
		  margin-bottom: 5px;
		  padding: 5px;
	  }
  }
}

</style>