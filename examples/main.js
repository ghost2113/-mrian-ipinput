import Vue from 'vue'
import App from './App.vue'

import mrian from '../packages'
Vue.config.productionTip = false
Vue.use(mrian)
Vue.confog.productionTip = false
new Vue({
  render: h => h(App),
}).$mount('#app')
