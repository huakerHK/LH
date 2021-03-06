import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import './registerServiceWorker'

import elementUI from 'element-ui' 
import 'element-ui/lib/theme-chalk/index.css'

Vue.config.productionTip = false
Vue.prototype.axios = axios
Vue.use(elementUI)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
