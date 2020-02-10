import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
Vue.config.productionTip = false

Vue.use(VueRouter)
Vue.use(ElementUI)
const router = new VueRouter({
  routes: Router()
})
new Vue({
  render: h => h(App),
  router
}).$mount('#app')
