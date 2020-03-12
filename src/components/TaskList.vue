<template>
  <div class="task-list">
    <h1>Tasks in this essay</h1>
    <div v-if="getTasks() && getTasks().length > 0">
      <ul class="task-list">
        <li v-for="(task, id) in getTasks()" :key="id">
          <div>
            <span>
              <span class="task-name" v-bind:class="{ 'complete' : taskDone(task.id) }">{{ task.name }}</span> ({{ task.typeName }})
            </span>
            <span class="task-checkmark" v-if="taskDone(task.id)">
              <v-icon name="check" scale="1.5" />
            </span>
          </div>
        </li>
      </ul>
      <div class="badge" v-html="badge(this.$store.state.currentStoryId)"></div>
    </div>
    <p v-else>This essay does not contain any tasks yet.</p>
  </div>
</template>

<script>
import Stories from '@/stories/ciell/ciell.js'

export default {
  props: ['story'],
  methods: {
    getTasks () {
      let tasks = Stories[this.$store.state.currentStoryId].tasks
      return typeof tasks !== 'undefined' ? tasks : []
    },
    taskDone (id) {
      return this.$store.state.tasksComplete.includes(id)
    },
    tasksCompletedPercent (storyId) {
      if (!storyId || !Stories[storyId].tasks) {
        return 0
      }

      const taskIds = Stories[storyId].tasks.map(function (task) {
        return task.id
      })

      if (taskIds.length === 0) {
        return 0
      }

      const completed = taskIds.filter(id => this.$store.state.tasksComplete.includes(id))
      return (completed.length / taskIds.length) * 100
    },
    badge (storyId) {
      let badge, title, alt
      let percent = this.tasksCompletedPercent(storyId)

      if (percent === 0) {
        badge = null
        title = '<p>As soon as you complete the tasks in this essay, you will be rewarded with a medal (bronze, silver, gold). Open the next chapter to begin working on the tasks.</p><p>Good luck!</p>'
      } else if (percent > 0 && percent <= 33.34) {
        badge = require('@/stories/ciell/assets/img/badges/badge-bronze.png')
        title = '<p>Fair enough, you earned yourself a bronze medal. But you can certainly do better than that!</p>'
        alt = 'Bronze badge'
      } else if (percent > 33.34 && percent <= 66.67) {
        badge = require('@/stories/ciell/assets/img/badges/badge-silver.png')
        title = '<p>Good job, you earned yourself a silver medal for this essay! Can you get the gold medal?</p>'
        alt = 'Silver badge'
      } else if (percent > 66.67) {
        badge = require('@/stories/ciell/assets/img/badges/badge-gold.png')
        title = '<p>Wow, awesome! You completed all tasks successfully and earned yourself a gold medal for this essay. Keep up the good work!</p>'
        alt = 'Gold badge'
      }

      if (!badge) {
        return title
      }

      return '<p>' + title + '</p><img style="margin-top:1em" src="' + badge + '" alt="' + alt + '" />'
    }
  }
}
</script>

<style scoped>
  ul.task-list li {
    line-height: 1.75;
    font-size: 1.125em;
  }

  ul.task-list li > div {
    display: flex;
    align-items: center;
  }

  .task-name {
    font-weight: 600;
  }

  .task-name.complete {
    color: #08723d;
    font-weight: 700;
  }

  .task-checkmark {
    color: #08723d;
    display: inline-block;
    position: relative;
    margin-left: .2em;
    top: .175em;
  }
</style>
