import Vue from 'vue'

import Vuesax from 'vuesax'
import 'vuesax/dist/vuesax.css'

import App from '@/App.vue'
import store from '@/store'

Vue.config.productionTip = false

Vue.use(Vuesax)

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
