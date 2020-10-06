<template>
  <div class="container tasks">
    <h1>Tasks</h1>
    <div class="stars-wrapper">
      <div v-html="getStar()"></div>
      <div>
        <span class="stars" v-text="stars"></span>&nbsp;/&nbsp;<span class="stars-total">{{this.starsTotal}} {{ starName() }}</span>
      </div>
    </div>
    <p>&nbsp;</p>
    <h2>Comics</h2>
    <div class="stories">
      <div class="story" v-for="(story, id) in this.$props.stories" :key="id">
        <h3 class="story-title" v-on:click="openStoryByTitle(id, true)">
          <span v-html="singleStar(story)"></span>
          {{story.title}}
        </h3>
        <TaskList
          @openStory="openStory($event)"
          v-bind:story="story"
        />
      </div>
    </div>
    <a class="btn reset-learning-progress" v-on:click="resetLearningProgress()">
      <v-icon name="undo" scale="1" />
      Reset your learning progress</a>
  </div>
</template>

<script>
import Stories from '@/stories/ciell/ciell.js'
import TaskList from '@/components/TaskList.vue'

export default {
  components: {
    TaskList
  },
  data () {
    return {
      stars: 0,
      starsTotal: this.numTasks(Stories),
      time: 0,
      interval: null
    }
  },
  name: 'home',
  props: ['stories', 'story'],
  methods: {
    tick () {
      if (this.stars === this.$store.state.tasksComplete.length) {
        clearInterval(this.interval)
        return
      }

      this.stars += 1
      this.time = 25 + Math.ceil((this.starsTotal - this.stars) / 1.25)

      clearInterval(this.interval)
      this.interval = setInterval(this.tick, this.time)
    },
    getStar: function () {
      if (this.$store.state.tasksComplete.length === 0) {
        return ''
      }

      let percent = this.$store.state.tasksComplete.length / this.starsTotal * 100

      if (percent <= 49) {
        return `<img class="star" src="${require('@/stories/ciell/assets/img/badges/star-bronze.png')}" alt="Bronze star" />`
      } else if (percent > 49 && percent <= 80) {
        return `<img class="star" src="${require('@/stories/ciell/assets/img/badges/star-silver.png')}" alt="Silver star" />`
      } else if (percent > 80 && percent < 100) {
        return `<img class="star" src="${require('@/stories/ciell/assets/img/badges/star-gold.png')}" alt="Gold star" />`
      } else if (percent >= 100) {
        return '<img class="star" src="' + require('@/stories/ciell/assets/img/badges/star-platinum.png') + '" alt="Platinum star" />'
      }
    },
    singleStar: function (story) {
      let badgeClass = this.badgeClass(story, this.$store.state.tasksComplete)
      if (badgeClass) {
        return `<img class="star" src="${require('@/stories/ciell/assets/img/badges/star-' + badgeClass + '.png')}" alt="Gold star" />`
      }
    },
    starName: function () {
      if (this.$store.state.tasksComplete.length === 0) {
        return ''
      }

      let percent = this.$store.state.tasksComplete.length / this.starsTotal * 100

      if (percent <= 49) {
        return 'Bronze!'
      } else if (percent > 49 && percent <= 80) {
        return 'Silver!'
      } else if (percent > 80 && percent < 100) {
        return 'Gold!'
      } else if (percent >= 100) {
        return 'Platinum!'
      }
    },
    openStory (params) {
      this.$emit('openStory', params)
    },
    openStoryByTitle (id, taskPage = false) {
      this.$emit('openStory', {
        id, taskPage
      })
    },
    resetLearningProgress () {
      let _this = this
      this.$modal.show('dialog', {
        title: 'Are you sure?',
        text: 'All the stars you collected will be removed.',
        buttons: [
          {
            title: 'Cancel'
          },
          {
            title: 'Remove my stars',
            handler: () => {
              _this.$store.commit('removeAllCompletedTasks')
              _this.stars = 0
              _this.starsTotal = 0
              _this.$modal.hide('dialog')
              _this.$modal.show('dialog', {
                title: 'Done',
                text: 'All your stars have been removed.',
                buttons: [
                  {
                    title: 'OK'
                  }
                ]
              })
            }
          }
        ]
      })
    }
  },
  mounted () {
    this.tick()
  }
}
</script>

<style scoped>
  .stars-wrapper {
    font-size: 1.25em;
    display: flex;
    align-items: center;
    line-height: 1;
  }

  .stars-wrapper >>> .star {
    width: 1.5em;
    margin-right: .25em;
  }

  .stars-total {
    font-size: .6125em;
  }

  .story {
    display: block;
    background: #e0f2f7;
    padding: 1em 1.5em;
    margin-bottom: 1em;
    border-radius: 2em;
  }

  h3.story-title {
    margin-top: 0;
    padding-top: 0;
    cursor: pointer;
  }

  h3 >>> .star {
    width: .9em;
    height: auto;
    position: relative;
    top: 2px;
  }

  .story >>> p {
    padding: 0;
    margin: 0;
  }

  .btn {
    transition: background-color .4s ease;
  }

  .btn:hover {
    background-color: #1c81a3;
  }

  >>> .task-list ul {
    padding: 0 1em;
    margin-bottom: .75em;
  }
</style>
