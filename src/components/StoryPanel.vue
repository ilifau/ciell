<template>
  <div class="storyPanel">
    <h2>{{ title() }}</h2>
    <component :is="dynamicContent" />
    <ul class="choices">
      <li v-for="choice in choices()" :key="choice.chapterId">
        <a v-on:click="openChapter(choice.chapterId)">{{ choice.text }}</a>
      </li>
      <li v-if="finalChapter()">
        <a v-on:click="$router.push('/')">Close Story</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ['story'],
  methods: {
    title () {
      return this.$props.story.chapters[this.$store.state.currentChapterId].title
    },
    choices () {
      return this.getChapter(this.$store.state.currentChapterId)[0].choices
    },
    getChapter (id = null) {
      let chapterId = id || this.$store.state.currentChapterId
      return this.$props.story.chapters.filter((chapter) => { return chapter.id === chapterId })
    },
    openChapter (id) {
      let currentChapter = this.getChapter()
      let nextChapter = this.getChapter(id)

      if (typeof currentChapter[0].after === 'function') currentChapter[0].after()
      if (typeof nextChapter[0].before === 'function') nextChapter[0].before()

      let score = this.$store.state.userScore + 10
      this.$store.commit('setUserScore', score)
      this.$store.commit('setCurrentChapterId', id)
    },
    finalChapter () {
      return typeof this.$props.story.chapters[this.$store.state.currentChapterId].finalChapter !== 'undefined'
    }
  },
  computed: {
    dynamicContent () {
      let _this = this

      // Images
      let content = this.$props.story.chapters[this.$store.state.currentChapterId].content.replace(/\[.+?\]/g, function (template) {
        let params = template.split('|')
        let type = params[0].replace('[', '')

        switch (type) {
          case 'image':
            let src = params[1].replace('[[', '')
            let alt = params[2].replace(']]', '')
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
.choices {
  list-style-type: none;
  margin: 1.5em 0 0;
  padding: 0;
}

.choices a {
  font-size: .93875em;
  display: inline-block;
  padding: .375em .75em;
  color: #0056a2;
  margin-bottom: .375em;
  transition: all .15s linear;
  border: 1px solid #0056a2;
  border-radius: 1em;
}

.choices li:last-child a {
  margin-bottom: 0;
}

.choices a:hover,
.choices a:active {
  background: #0056a2;
  color: #fff;
  border-color: #0056a2;
}
</style>
