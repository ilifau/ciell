<template>
  <div class="task-list">
    <h1 v-if="$route.name !== 'tasks'">
      Tasks
    </h1>
    <div v-if="getTasks() && getTasks().length > 0">
      <ul>
        <li v-for="(task, id) in getTasks()" :key="id" v-bind:class="{ 'complete' : taskDone(task.id) }">
          <div>
            <span>
              <span class="task-checkmark" v-if="taskDone(task.id)">
                <v-icon name="check" scale="1" />
              </span>
              <a tabindex="0" class="task-name" v-on:click="openStory(task.id)" @keyup.enter="openStory(task.id)">Task {{ id+1 }}: {{ task.name }}</a>
              <!-- ({{ task.typeName }}) -->
            </span>
          </div>
        </li>
      </ul>
      <div v-if="$route.name !== 'tasks'" class="badge" v-html="badge(this.$store.state.currentStoryId)"></div>
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
            <img class="badge-image" src="${require('@/stories/ciell/assets/img/badges/star-bronze.png')}" alt="Bronze star" />
            <img class="badge-image" src="${require('@/stories/ciell/assets/img/badges/star-silver.png')}" alt="Bronze star" />
            <img class="badge-image" src="${require('@/stories/ciell/assets/img/badges/star-gold.png')}" alt="Bronze star" />
          </div>
          <p>You can earn stars by completing the tasks in this essay. Open the next chapter to begin working on the tasks.</p>
          `
      } else if (percent > 0 && percent <= 34) {
        badge = require('@/stories/ciell/assets/img/badges/star-bronze.png')
        title = '<p>Fair enough, you earned yourself a <strong>bronze star</strong> for this essay.</p>'
        alt = 'Bronze badge'
      } else if (percent > 34 && percent < 99) {
        badge = require('@/stories/ciell/assets/img/badges/star-silver.png')
        title = '<p>Good job, you earned yourself a <strong>silver star</strong> for this essay!</p>'
        alt = 'Silver badge'
      } else if (percent >= 99) {
        badge = require('@/stories/ciell/assets/img/badges/star-gold.png')
        title = '<p>Wow, awesome! You completed all tasks for this essay and earned yourself a <strong>gold star</strong>!</p>'
        alt = 'Gold badge'
      }

      if (!badge) {
        return title
      }

      let titleHtml = title && this.$route.name !== 'tasks' ? '<p>' + title + '</p>' : ''

      return '<img class="badge-image" src="' + badge + '" alt="' + alt + '" />' + titleHtml
    },
    openStory: function (taskId) {
      let storyKey = this.getStoryKey()
      let story = Stories[storyKey]
      let chapter = story.chapters.find(chapter => chapter.taskId === taskId)
      let chapterId = chapter.id
      let taskPage = false
      let id = storyKey

      this.$emit('openStory', {
        id,
        taskPage,
        chapterId
      })
    },
    getStoryKey: function () {
      if (this.$route.name !== 'tasks') {
        return this.$store.state.currentStoryId
      } else {
        return Stories.findIndex(story => story.id === this.$props.story.id)
      }
    },
    allTasksDone: function () {
      if (this.$route.name === 'tasks') {
        return false
      }

      let storyKey = this.getStoryKey()
      let tasks = Stories[storyKey].tasks

      if (typeof tasks === 'undefined' || tasks.length === 0) {
        return false
      }

      let _this = this
      tasks.forEach(function (task) {
        if (!_this.$store.state.tasksComplete.includes(task.id)) {
          return false
        }
      })

      return true
    }
  }
}
</script>

<style scoped>
  .task-list ul {
    list-style-type: none;
    margin: 0 0 1em;
    background: #e0f2f7;
    padding: 1em 2em;
    border-radius: 2em;
  }

  .task-list ul li {
    line-height: 1.3;
    font-size: 1.125em;
    padding: .25em 0;
    position: relative;
  }

  .task-list ul li a {
    /* color: #2d383a; */
  }

  .task-name {
    font-weight: 600;
    transition: color .2s linear;
  }

  .complete .task-name {
    color: #0a8669;
  }

  .complete .task-name:hover {
    color: #097259;
  }

  .task-checkmark {
    color: #0a8669;
    display: inline-block;
    position: absolute;
    left: -.875em;
  }

  .badge >>> .badge-image {
    width: 2.5em;
    max-width: 33%;
    margin-right: .5em;
    margin-top: .75em;
  }
</style>
