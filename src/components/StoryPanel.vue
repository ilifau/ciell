<template>
  <div class="story-panel">
    <!-- <h1 class="chapter-title" v-if="title()">{{ title() }}</h1> -->
    <div v-if="hasAudio()" class="audio-wrapper">
      <label v-for="(file, index) in audioSources" :key="index">
        <AudioButton v-bind:label="file.label" class="audio-button" :sources="file.path" :loop="false" />
      </label>
    </div>
    <component :is="dynamicContent" />
    <Task v-if="hasTask()" v-bind:story="this.$props.story" v-bind:task="getTask(this.getChapter(this.$store.state.currentChapterId).taskId)" />
    <ul class="choices">
      <li v-for="choice in choices()" :key="choice.chapterId">
        <a v-on:click="openChapter(choice.chapterId)">{{ choice.text }}</a>
      </li>
      <li v-if="finalChapter()">
        <a v-on:click="$router.push('/')">Choose another Story</a>
      </li>
    </ul>
  </div>
</template>

<script>
import Task from '@/components/Task.vue'
import AudioButton from '@/components/AudioButton.vue'

export default {
  components: {
    Task,
    AudioButton
  },
  props: ['story'],
  methods: {
    title () {
      return this.getChapter(this.$store.state.currentChapterId).title
    },
    choices () {
      return this.getChapter(this.$store.state.currentChapterId).choices
    },
    getChapter (id = null) {
      let chapterId = id || this.$store.state.currentChapterId
      let chapter = this.$props.story.chapters.find(c => c.id === chapterId)
      return chapter
    },
    openChapter (id) {
      let currentChapter = this.getChapter()
      let nextChapter = this.getChapter(id)

      if (typeof currentChapter.after === 'function') currentChapter.after()
      if (typeof nextChapter.before === 'function') nextChapter.before()

      let score = this.$store.state.userScore + 10
      this.$store.commit('setUserScore', score)
      this.$store.commit('setCurrentChapterId', id)

      window.scrollTo(0, 0)
    },
    finalChapter () {
      return typeof this.getChapter(this.$store.state.currentChapterId).finalChapter !== 'undefined'
    },
    hasTask () {
      return this.getChapter(this.$store.state.currentChapterId).hasOwnProperty('taskId')
    },
    getTask (id) {
      return this.$props.story.tasks.find(function (task) {
        return task.id === id
      })
    },
    hasAudio () {
      return this.getChapter(this.$store.state.currentChapterId).hasOwnProperty('audio')
    }
  },
  computed: {
    audioSources () {
      if (!this.hasAudio()) return

      let sources = []

      let files = this.getChapter(this.$store.state.currentChapterId).audio
      files.forEach((file) => {
        sources.push({
          path: [require('@/stories/ciell/assets/audio/' + file.filename)],
          label: file.label
        })
      })

      return sources
    },
    dynamicContent () {
      let _this = this

      // Content types (images, decorators)
      let content = this.getChapter(this.$store.state.currentChapterId).content.replace(/\[.+?\]/g, function (template) {
        let params = template.split('|')
        let type = params[0].replace('[', '')

        switch (type) {
          case 'image':
            let src = params[1]
            let alt = params[2]
            let img = require('@/stories/ciell/assets/img/' + src)
            return '<img src="' + img + '" alt="' + alt + '" />'

          case 'decorator':
            let text = params[1]
            let chapterId = params[2].replace(']', '')
            return `<a v-on:click="processDecorator(${chapterId})">${text}</a>`
        }
      })

      return {
        template: `<div>${content}</div>`,
        methods: {
          processDecorator (id) {
            _this.openChapter(id)
          }
        }
      }
    }
  }
}
</script>

<style scoped>
.chapter-title {
  margin-top: 0;
}

.choices {
  list-style-type: none;
  margin: 1.5em 0 0;
  padding: 0;
}

.choices a {
  font-size: 1em;
  display: block;
  text-align: center;
  padding: .375em .75em;
  color: #fff;
  background: #219ac2;
  margin-bottom: .375em;
  transition: background .15s linear;
  position: relative;
  z-index: 6;
}

.choices li:last-child a {
  margin-bottom: 0;
}

.choices a:hover,
.choices a:active {
  color: #fff;
  background: #1c85a8;
}

.audio-wrapper {
  display: block;
  margin-bottom: 1em;
}

.audio-button {
  display: inline-block;
}

label {
  display: block;
}
</style>
