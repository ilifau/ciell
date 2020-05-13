import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { store } from './store'
import VModal from 'vue-js-modal'
import 'vue-awesome/icons'
import Icon from 'vue-awesome/components/Icon'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.component('v-icon', Icon)
Vue.use(VModal, { dialog: true })
Vue.use(VueAxios, axios)
Vue.config.productionTip = false

Vue.mixin({
  methods: {
    badgeClass: function (story, tasksComplete) {
      if (typeof story.tasks === 'undefined') {
        return ''
      }

      const taskIds = story.tasks.map(function (task) {
        return task.id
      })

      if (taskIds.length === 0) {
        return ''
      }

      const completed = taskIds.filter(id => tasksComplete.includes(id))
      let percent = (completed.length / taskIds.length) * 100

      if (percent > 0 && percent <= 33.34) {
        return 'bronze'
      } else if (percent > 33.34 && percent <= 66.67) {
        return 'silver'
      } else if (percent > 66.67) {
        return 'gold'
      } else {
        return ''
      }
    }
  }
})

new Vue({
  store,
  router,
  beforeCreate () {
    this.$store.commit('initialiseStore')
  },
  render: h => h(App)
}).$mount('#app')
