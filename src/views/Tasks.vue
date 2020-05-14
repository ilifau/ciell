<template>
  <div class="container tasks">
    <h1>Stars</h1>
    <p>Each comic in this app contains several tasks. You can earn stars by successively completing tasks. Tapping/clicking the star related to an essay in the main navigation is a shortcut to the tasks inside this comic.</p>
    <h2>Stars earned</h2>
    <div class="stars-wrapper">
      <div v-html="getStar()"></div>
      <div>
        <span class="stars" v-text="stars"></span>&nbsp;/&nbsp;<span class="stars-total">{{this.starsTotal}}</span>
      </div>
    </div>
    <p>&nbsp;</p>
    <h2>Essays</h2>
    <div class="stories">
      <div class="story" v-for="(story, id) in this.$props.stories" :key="id">
        <h3 class="story-title" v-on:click="openStory(id)">{{story.title}}</h3>
        <TaskList v-bind:story="story" />
      </div>
    </div>
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
      this.time = 100 + Math.ceil((this.starsTotal - this.stars) / 1.25)

      clearInterval(this.interval)
      this.interval = setInterval(this.tick, this.time)
    },
    getStar: function () {
      let percent = this.$store.state.tasksComplete.length / this.starsTotal * 100

      if (percent < 33.33) {
        return `<img class="star" src="${require('@/stories/ciell/assets/img/badges/star-bronze.png')}" alt="Bronze star" />`
      } else if (percent > 33.33 && percent < 80) {
        return `<img class="star" src="${require('@/stories/ciell/assets/img/badges/star-silver.png')}" alt="Silver star" />`
      } else if (percent > 80) {
        return `<img class="star" src="${require('@/stories/ciell/assets/img/badges/star-gold.png')}" alt="Gold star" />`
      }
    },
    openStory (id) {
      this.$emit('openStory', {
        id
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
    background: #fafafa;
    padding: 1em;
    margin-bottom: 1em;
  }

  h3.story-title {
    margin-top: 0;
    padding-top: 0;
    cursor: pointer;
  }

  .story >>> p {
    padding: 0;
    margin: 0;
  }
</style>
