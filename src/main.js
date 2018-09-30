import Vue from 'vue'
import App from './App.vue'
import router from './router'
import iView from 'iview'
import 'iview/dist/styles/iview.css'
import csshake from 'csshake';
import assembly from '@/components/home/index'

Vue.config.productionTip = false
Vue.use(iView)
Vue.use(assembly)
Vue.use(csshake)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
