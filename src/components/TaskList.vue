<template>
  <div class="task-list">
    <h1 v-if="$route.name !== 'tasks'">Tasks</h1>
    <div v-if="getTasks() && getTasks().length > 0">
      <ul>
        <li v-for="(task, id) in getTasks()" :key="id" v-bind:class="{ 'complete' : taskDone(task.id) }">
          <div>
            <span>
              <span class="task-name">Task {{ id+1 }}: {{ task.name }}</span>
              <span class="task-checkmark" v-if="taskDone(task.id)">
                <v-icon name="check" scale="1" />
              </span>
              <!-- ({{ task.typeName }}) -->
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
      let tasks, story

      switch (this.$route.name) {
        case 'tasks':
          story = Stories.find(story => story.id === this.$props.story.id)
          tasks = story.tasks
          break
        default:
          tasks = Stories[this.$store.state.currentStoryId].tasks
          break
      }

      return typeof tasks !== 'undefined' ? tasks : []
    },
    taskDone (id) {
      return this.$store.state.tasksComplete.includes(id)
    },
    tasksCompletedPercent (storyId) {
      let story

      if (this.$route.name === 'tasks') {
        story = Stories.find(story => story.id === this.$props.story.id)
      } else {
        story = Stories[storyId]
      }

      if (typeof story.tasks === 'undefined') {
        return 0
      }

      const taskIds = story.tasks.map(function (task) {
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

      if (percent === 0 && this.$route.name !== 'tasks') {
        badge = null
        title = `
          <div style="display:block;padding:1em 0">
            <img class="badge-image" src="${require('@/stories/ciell/assets/img/badges/badge-bronze.png')}" alt="Bronze star" />
            <img class="badge-image" src="${require('@/stories/ciell/assets/img/badges/badge-silver.png')}" alt="Bronze star" />
            <img class="badge-image" src="${require('@/stories/ciell/assets/img/badges/badge-gold.png')}" alt="Bronze star" />
          </div>
          <p>You can earn stars by completing the tasks in this essay. Open the next chapter to begin working on the tasks.</p>
          `
      } else if (percent > 0 && percent <= 33) {
        badge = require('@/stories/ciell/assets/img/badges/badge-bronze.png')
        title = '<p>Fair enough, you earned yourself a <strong>bronze star</strong> for this essay.</p>'
        alt = 'Bronze badge'
      } else if (percent > 33 && percent < 80) {
        badge = require('@/stories/ciell/assets/img/badges/badge-silver.png')
        title = '<p>Good job, you earned yourself a <strong>silver star</strong> for this essay!</p>'
        alt = 'Silver badge'
      } else if (percent >= 80) {
        badge = require('@/stories/ciell/assets/img/badges/badge-gold.png')
        title = '<p>Wow, awesome! You completed all tasks for this essay and earned yourself a <strong>gold star</strong>!</p>'
        alt = 'Gold badge'
      }

      if (!badge) {
        return title
      }

      let titleHtml = title && this.$route.name !== 'tasks' ? '<p>' + title + '</p>' : ''

      return '<img class="badge-image" src="' + badge + '" alt="' + alt + '" />' + titleHtml
    }
  }
}
</script>

<style scoped>
  .task-list ul {
    list-style-type: none;
    padding: 0;
    margin: 0 0 1em;
  }

  .task-list ul li {
    line-height: 1.75;
    font-size: 1.125em;
  }

  .task-name {
    font-weight: 600;
  }

  .complete .task-name {
    color: #08723d;
    font-weight: 700;
  }

  .task-checkmark {
    color: #08723d;
    display: inline-block;
  }

  .badge >>> .badge-image {
    width: 48px;
    max-width: 25%;
    margin-right: .75em;
  }
</style>
