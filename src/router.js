import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Story from './views/Story.vue'
import About from './views/About.vue'

Vue.use(Router)

export default new Router({
  scrollBehavior () {
    return {
      x: 0,
      y: 0
    }
  },
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/story',
      name: 'story',
      component: Story
    },
    {
      path: '/about',
      name: 'about',
      component: About
    }
  ]
})
