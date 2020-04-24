<template>
  <div class="story-panel">

    <!-- Title -->
    <h1 :class="'chapter-title ' + this.getChapter(this.$store.state.currentChapterId).titleClass" v-if="title()">
      <span class="chapter-title-checkmark" v-if="taskDone()"><v-icon name="check" scale="1.5" /></span>{{ title() }}
    </h1>

    <!-- Exam question -->
    <div v-if="(hasExamQuestion())" class="exam-question">
      <h2 class="first">Exam question</h2>
      <div v-html="examQuestion()"></div>
    </div>

    <!-- Audio -->
    <div v-if="hasAudio()" class="audio-wrapper">
      <label v-for="(file, index) in audioSources" :key="index">
        <AudioButton v-bind:label="file.label" class="audio-button" :sources="file.path" :loop="false" />
      </label>
    </div>

    <!-- Content -->
    <component :is="dynamicContent" />

    <!-- Task Puzzle -->
    <Task @showMessage="showMessage($event)" :is="dynamicTaskComponent" v-bind:story="this.$props.story" v-bind:task="getTask(this.getChapter(this.$store.state.currentChapterId).taskId)" />

    <!-- Choices -->
    <ul class="choices">
      <li v-for="choice in choices()" :key="choice.chapterId">
        <a v-on:click="openChapter(choice.chapterId)" :class="choice.class">
          <span v-if="choice.class === 'previous'">
            <img :src="require('@/stories/ciell/assets/img/arrow-right.png')" />
            {{choice.text}}
          </span>
          <span v-if="choice.class === 'next'">
            {{choice.text}}
            <img :src="require('@/stories/ciell/assets/img/arrow-right.png')" />
          </span>
        </a>
      </li>
      <li v-if="finalChapter()">
        <a v-on:click="$router.push('/')">Choose another Story</a>
      </li>
    </ul>

  </div>
</template>

<script>
import Puzzle from '@/components/tasks/Puzzle.vue'
import MultipleChoice from '@/components/tasks/MultipleChoice.vue'
import ImageChoice from '@/components/tasks/ImageChoice.vue'
import AudioButton from '@/components/AudioButton.vue'
import TaskList from '@/components/TaskList.vue'

export default {
  components: {
    Puzzle,
    AudioButton,
    TaskList
  },
  props: ['story'],
  methods: {
    title () {
      return this.getChapter(this.$store.state.currentChapterId).title
    },
    examQuestion () {
      return this.getChapter(this.$store.state.currentChapterId).examQuestion
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

      this.$store.commit('setCurrentChapterId', id)
      this.$emit('scrollTop')
    },
    finalChapter () {
      return typeof this.getChapter(this.$store.state.currentChapterId).finalChapter !== 'undefined'
    },
    hasTask () {
      let chapter = this.getChapter(this.$store.state.currentChapterId)
      return Object.prototype.hasOwnProperty.call(chapter, 'taskId')
    },
    getTask (id) {
      if (typeof this.$props.story.tasks === 'undefined') {
        return
      }

      if (this.$props.story.tasks === null) {
        return
      }

      return this.$props.story.tasks.find(function (task) {
        return task.id === id
      })
    },
    taskDone () {
      return typeof this.getChapter(this.$store.state.currentChapterId).taskId !== 'undefined' && this.$store.state.tasksComplete.includes(this.getChapter(this.$store.state.currentChapterId).taskId)
    },
    hasAudio () {
      let chapter = this.getChapter(this.$store.state.currentChapterId)
      return Object.prototype.hasOwnProperty.call(chapter, 'audio')
    },
    hasExamQuestion () {
      let chapter = this.getChapter(this.$store.state.currentChapterId)
      return Object.prototype.hasOwnProperty.call(chapter, 'examQuestion')
    },
    showMessage (message) {
      this.$emit('showMessage', message)
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
    dynamicTaskComponent () {
      let task = this.getTask(this.getChapter(this.$store.state.currentChapterId).taskId)

      if (!task) {
        return
      }

      switch (task.type) {
        case 'puzzle': {
          return Puzzle
        }
        case 'sort': {
          return Puzzle
        }
        case 'multiple-choice': {
          return MultipleChoice
        }
        case 'image-choice': {
          return ImageChoice
        }
        default: {
          return false
        }
      }
    },
    dynamicContent () {
      let _this = this

      // Content types (images, decorators)
      let content = this.getChapter(this.$store.state.currentChapterId).content.replace(/\[.+?\]/g, function (template) {
        let params = template.split('|')
        let type = params[0].replace('[', '').replace(']', '')

        switch (type) {
          case 'image': {
            let src = params[1]
            let alt = params[2]
            let img = require('@/stories/ciell/assets/img/' + src)
            return '<img src="' + img + '" alt="' + alt + '" rel="preload" />'
          }
          case 'decorator': {
            let text = params[1]
            let chapterId = params[2].replace(']', '')
            return `<a v-on:click="processDecorator(${chapterId})">${text}</a>`
          }
          case 'tasks': {
            return '<TaskList />'
          }
          default: {
            return ''
          }
        }
      })

      return {
        template: `<div>${content}</div>`,
        components: {
          'TaskList': TaskList
        },
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
.story-panel {
  position: relative;
}

.chapter-title {
  margin-top: 0;
}

.chapter-title-checkmark {
  color: #08723d;
  display: inline-block;
  margin-right: .125em;
}

.chapter-title.center {
  text-align: center;
}

.choices {
  list-style-type: none;
  margin: 3em 0 1em;
  padding: 0;
  overflow: hidden;
  clear: both;
}

.choices a {
  color: #2d383b;
  font-weight: 400;
  font-family: 'aka-acidgr-diarygirlmedium';
}

.choices a span {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
}

.choices a.previous img,
.choices a.next img {
  width: 2.375em;
  position: relative;
}

.choices a.previous img {
  transform: rotateY(180deg);
  margin-right: .5em;
}

.choices a.next img {
  margin-left: .5em;
}

.choices a.previous {
  float: left;
}

.choices a.next {
  float: right;
}

.choices a.previous::after,
.choices a.next::after {
  clear: both;
}

.choices li:last-child a {
  margin-bottom: 0;
}

.audio-wrapper {
  display: block;
}

label {
  display: block;
}

@media screen and (max-width: 640px) {
  .choices a,
  .choices a.previous,
  .choices a.next {
    font-size: .875em;
  }
}

@media screen and (max-width: 400px) {
  .choices a,
  .choices a.previous,
  .choices a.next {
    font-size: .75em;
  }
}
</style>
