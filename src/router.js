import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Story from './views/Story.vue'
import Tasks from './views/tasks.vue'
import About from './views/About.vue'
import Evaluation from './views/Evaluation.vue'

Vue.use(Router)

export default new Router({
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
      path: '/tasks',
      name: 'tasks',
      component: Tasks
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/evaluation',
      name: 'evaluation',
      component: Evaluation
    }
  ]
})
