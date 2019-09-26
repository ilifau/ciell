import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { store } from './store'
import VModal from 'vue-js-modal'
import 'vue-awesome/icons'
import Icon from 'vue-awesome/components/Icon'

Vue.component('v-icon', Icon)
Vue.use(VModal, { dialog: true })
Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
