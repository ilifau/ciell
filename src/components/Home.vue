<template>
  <div class="container home">
    <div class="ciell-logo"><img src="@/assets/img/ciell-logo-bubble.jpg" alt="CIELL logo" rel="preload"></div>
    <h2 class="home-subtitle">Visually enhanced learning of writing structures</h2>
    <div class="stories">
      <div class="story" v-for="(story, id) in this.$props.stories" :key="id">
        <a v-on:click="openStory(id)" :style="{ backgroundImage: 'url(' + require('@/stories/ciell/assets/img/' + story.preview) + ')' }">
          <span class="title">
            <span class="number" :style="{ backgroundColor: story.color }">
              <span class="content">#{{ id + 1 }}</span>
              <span class="badge" v-html="badge(id)"></span>
            </span>
            {{ story.title }}
          </span>
        </a>
      </div>
    </div>
    <div class="evaluation-link">
      <p class="last"><router-link to="/evaluation">Rate this App<img src="@/assets/img/star-rating.png" alt=""></router-link></p>
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
      if (typeof this.$props.stories[storyId].tasks === 'undefined') {
        return false
      }

      const taskIds = this.$props.stories[storyId].tasks.map(function (task) {
        return task.id
      })

      let checker = (arr, target) => target.every(v => arr.includes(v))

      return checker(this.$store.state.tasksComplete, taskIds)
    },
    tasksCompletedPercent (storyId) {
      if (!this.$props.stories[storyId].tasks) {
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
      let badge, badgeClass, title, alt
      let percent = this.tasksCompletedPercent(storyId)

      if (percent === 0) {
        badge = null
        badgeClass = ''
      } else if (percent > 0 && percent <= 33.34) {
        badgeClass = 'bronze'
        badge = require('@/stories/ciell/assets/img/badges/badge-bronze.png')
        title = 'Fair enough, but you can certainly do better than that!'
        alt = 'Bronze badge'
      } else if (percent > 33.34 && percent <= 66.67) {
        badgeClass = 'silver'
        badge = require('@/stories/ciell/assets/img/badges/badge-silver.png')
        title = 'Good job, you earned a silver medal for this essay!'
        alt = 'Silver badge'
      } else if (percent > 66.67) {
        badgeClass = 'gold'
        badge = require('@/stories/ciell/assets/img/badges/badge-gold.png')
        title = 'Wow, awesome! You earned a gold medal for this essay!'
        alt = 'Gold badge'
      }

      if (!badge) {
        return ''
      }

      return '<span class="' + badgeClass + '"><img src="' + badge + '" title="' + title + '" alt="' + alt + '" /></span>'
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
    font-size: 1.25em;
    line-height: 1.5;
    max-width: 90%;
    margin: .5em auto .75em;
    font-weight: 600;
    letter-spacing: .75px;
  }

  .stories {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    position: relative;
    font-size: 1em;
  }

  .story {
    display: block;
    position: relative;
    width: 50%;
    margin: 0 0 3em;
    transition: box-shadow .3s linear, border-color .3s linear;
  }

  .story::after {
    content: "";
    display: block;
    padding-top: 100%;
  }

  .story:hover {
    border-color: #fff386;
  }

  .story a {
    position: absolute;
    display: block;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 100%;
    text-align: center;
    background-size: cover;
    color: #6c6d70;
    font-size: .93875em;
    font-family: 'aka-acidgr-diarygirlmedium';
    font-weight: 400;
  }

  .story a .title {
    z-index: 2;
    position: absolute;
    left: 0;
    bottom: -.875em;
    padding: 0 0 0 2em;
    transition: all .3s linear;
    /* border: 1px solid red; */
    width: 90%;
    left: 5%;
    text-align: left;
    font-size: 1.06125em;
  }

  .story a .title span.number {
    display: inline-block;
    text-align: center;
    font-size: .93875em;
    background: red;
    position: relative;
    padding: 2.25em .0625em 0;
    line-height: 1;
    /* overflow: hidden; */
    bottom: -.6125em;
    left: 0;
    margin-right: .25em;
    width: auto;
  }

  .story a .title span.number .content {
    position: relative;
    display: block;
    overflow: hidden;
    padding: .6em .5em .5em;
    color: #fff;
  }

  /* .story a .title span.title-background {
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
  } */

  /* .story a:hover .title {
    transform: scale(1.06125);
  } */

  .story a:hover .title span.title-background {
    opacity: .95;
  }

  .badge >>> span {
    position: absolute;
    left: 0;
    width: 100%;
    background-size: cover;
    height: auto;
  }

  .badge >>> .bronze {
    top: -2.125em;
  }

  .badge >>> .silver {
    top: -3.75em;
  }

  .badge >>> .gold {
    top: -5.1em;
  }

  .badge img {
    display: none !important;
    position: relative;
    max-width: 1em;
  }

  .evaluation-link {
    display: block;
    padding: 3em 0 0;
    margin: 0 auto;
    text-align: center;
    max-width: 90%;
  }

  .evaluation-link a {
    font-weight: 400;
  }

  .evaluation-link a img {
    height: .93875em;
    width: .93875em;
    display: inline-block;
    vertical-align: middle;
    position: relative;
    top: -2px;
    margin-left: .25em;
  }

  @media screen and (max-width: 800px) {
    .story a .title {
      font-size: .85em;
    }
  }

  @media screen and (max-width: 639px) {
    .stories {
      display: block;
      margin: 0 auto;
      width: 360px;
      max-width: 86%;
      justify-content: center;
    }

    .story a .title {
      font-size: 1.06125em;
    }

    .story a .title {
      left: 0;
      width: 95%;
    }

    .story {
      width: 100%;
      margin: 0 0 2em;
      transition: box-shadow .3s linear, border-color .3s linear;
    }
  }

  @media screen and (max-width: 400px) {
    .story a .title {
      font-size: .875em;
    }
  }

  @media screen and (max-width: 359px) {
    .story a .title {
      font-size: .75em;
    }
  }
</style>
