<template>
    <div class="show">
        show
        <div>
        </div>
        <div>
            {{data}}
        </div>
    </div>
</template>

<script>
export default {
    name:'show',
    data(){
        return{
            url:'',
            data:''
        }
    },
    methods:{
        getUrl(){
				this.url = this.$router.currentRoute.params.store
			},
            getdata(){
                this.axios.post('/api/store',{
                    name:this.url
                }).then( succe => {
                    this.data = succe.data
                    console.log(succe)
                })
            }
    },
    created(){
        this.getUrl();
        this.getdata()
    }
}
</script>