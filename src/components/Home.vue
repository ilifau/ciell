<template>
  <div class="container home">
    <div class="ciell-logo"><img src="@/assets/img/ciell-logo-bubble.jpg" alt="CIELL logo" rel="preload"></div>
    <h2 class="home-subtitle default-font">Visually enhanced learning of writing organization for people with dyslexia.</h2>
    <div class="stories">
      <div class="story" v-for="(story, id) in this.$props.stories" :key="id">
        <a v-on:click="openStory(id)" :style="{ backgroundImage: 'url(' + require('@/stories/ciell/assets/img/' + story.preview) + ')' }">
          <span class="title">
            <span class="number">#{{ id + 1 }}</span>
            {{ story.title }}
            <span class="title-background" :style="{ backgroundColor: story.color ? story.color : '' }"></span>
          </span>
          <div class="dark"></div>
          <div class="badge" v-html="badge(id)"></div>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['stories'],
  methods: {
    openStory (id) {
      this.$emit('openStory', id)
    },
    storyBackgroundImage () {
      return this.$props.stories[this.$store.state.currentStoryId].preview
    },
    tasksCompleted (storyId) {
      if (!storyId || !this.$props.stories[storyId].tasks) {
        return false
      }

      const taskIds = this.$props.stories[storyId].tasks.map(function (task) {
        return task.id
      })

      let checker = (arr, target) => target.every(v => arr.includes(v))

      return checker(this.$store.state.tasksComplete, taskIds)
    },
    tasksCompletedPercent (storyId) {
      if (!storyId || !this.$props.stories[storyId].tasks) {
        return 0
      }

      const taskIds = this.$props.stories[storyId].tasks.map(function (task) {
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

      console.log(percent)

      if (percent === 0) {
        badge = null
      } else if (percent > 0 && percent <= 33.34) {
        badge = require('@/stories/ciell/assets/img/badges/badge-bronze.png')
        title = 'Fair enough, but you can certainly do better than that!'
        alt = 'Bronze badge'
      } else if (percent > 33.34 && percent <= 66.67) {
        badge = require('@/stories/ciell/assets/img/badges/badge-silver.png')
        title = 'Good job, you earned a silver medal for this essay!'
        alt = 'Silver badge'
      } else if (percent > 66.67) {
        badge = require('@/stories/ciell/assets/img/badges/badge-gold.png')
        title = 'Wow, awesome! You earned a gold medal for this essay!'
        alt = 'Gold badge'
      }

      if (!badge) {
        return ''
      }

      return '<img class="badge" src="' + badge + '" title="' + title + '" alt="' + alt + '" />'
    }
  }
}
</script>

<style scoped>
  .container.home {
    padding-top: 0;
  }

  .ciell-logo {
    display: block;
    text-align: center;
    width: 8em;
    margin: 0 auto;
    position: relative;
    top: -.5em;
  }

  .home-subtitle {
    font-family: 'aka-acidgr-diarygirlmedium';
    text-align: center;
    font-size: 1.125em;
    line-height: 1.5;
    width: 580px;
    max-width: 90%;
    margin: 0 auto 2.5em;
    margin-top: .5em;
    margin-bottom: 1.6125em;
    font-weight: 600;
    letter-spacing: .75px;
  }

  .stories {
    display: flex;
    flex-wrap: wrap;
    justify-content: left;
    align-items: center;
    position: relative;
    font-size: 1em;
  }

  .story {
    display: block;
    position: relative;
    /* border-radius: 100%; */
    width: calc(50% - 2em);
    /* overflow: hidden; */
    margin: 0 1em 1.75em;
    transition: box-shadow .3s linear, border-color .3s linear;
    /* border: .25em solid #219ac2; */
    /* box-shadow: 0 1px 3px rgba(0,0,0,.2); */
    mix-blend-mode: multiply;
  }

  .story::after {
    content: "";
    display: block;
    padding-top: 100%;
  }

  .story:hover {
    /* box-shadow: 0 3px 10px rgba(0,0,0,.6); */
    border-color: #fff386;
  }

  .story a {
    position: absolute;
    display: -webkit-box;
    display: -moz-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 100%;
    text-align: left;
    background-size: cover;
    color: #fff;
    font-size: 1.25em;
    text-shadow: 1px 1px 0 rgba(0,0,0,.6);
    font-family: 'aka-acidgr-diarygirlmedium';
    font-weight: 400;
  }

  .story a .title {
    /* display: none !important; */
    z-index: 2;
    position: absolute;
    bottom: -.6125em;
    padding: .75em 1em;
    left: -.6125em;
    transition: all .3s linear;
  }

  .story a .title span.number {
    display: block;
    text-align: left;
    font-size: .6125em;
    line-height: 1.2;
  }

  .story a .title span.title-background {
    content: '';
    z-index: -1;
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    background: #092d3a;
    opacity: .8;
    transform: rotate(-2deg);
    transition: all .3s ease-in-out;
    border-radius: 2px;
  }

  /* .story a:hover .title {
    transform: scale(1.06125);
  } */

  .story a:hover .title span.title-background {
    opacity: .95;
  }

  .badge {
    position: absolute;
    right: -.75em;
    top: -.5em;
    width: 28%;
    background-size: cover;
    height: auto;
  }

  @media screen and (min-width: 640px) and (max-width: 800px) {
    .story a {
      font-size: 1.125em;
    }
  }

  @media screen and (max-width: 639px) {
    .stories {
      display: block;
      margin: 0 auto;
      width: 360px;
      max-width: 86%;
    }

    .story {
      width: 100%;
      margin: 0 0 2em;
      transition: box-shadow .3s linear, border-color .3s linear;
    }
  }

  @media screen and (max-width: 420px) {
    .story a {
      font-size: 1.25em;
    }
  }
</style>
