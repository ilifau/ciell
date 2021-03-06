import Vue from 'vue'
import Router from 'vue-router'
import Welcome from './views/Welcome.vue'
import Home from './views/Home.vue'
import Story from './views/Story.vue'
import Tasks from './views/Tasks.vue'
import About from './views/About.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'welcome',
      component: Welcome
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/story',
      name: 'story',
      component: Story
    },
    {
      path: '/tasks',
      name: 'tasks',
      component: Tasks
    },
    {
      path: '/about',
      name: 'about',
      component: About
    }
  ]
})
