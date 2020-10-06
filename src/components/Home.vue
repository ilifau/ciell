<template>
  <div class="container home">
    <div class="ciell-logo">
      <img src="@/assets/img/ciell-logo-bubble.png" class="logo-bubble" alt="" rel="preload">
      <img src="@/assets/img/ciell-logo-text.png" class="logo-text" alt="CIELL" rel="preload">
    </div>
    <h2 class="home-subtitle">Visually enhanced learning of writing structures</h2>
    <div class="stories">
      <h3 class="story-level">Level 1</h3>
      <div class="story" v-for="(story, id) in getStoriesByLevel(1)" :key="id">
        <a tabindex="0" v-on:click="openStory(getStoryKeyById(story.id))" @keyup.enter="openStory(getStoryKeyById(story.id))" :style="{ backgroundImage: 'url(' + require('@/stories/ciell/assets/img/' + story.preview) + ')' }">
          <span class="title">
            <span class="number" v-on:click="openStory(getStoryKeyById(story.id), true)" :style="typeof story.numberImage === 'undefined' ? { backgroundColor: story.color } : { backgroundImage: 'url(' + require('@/stories/ciell/assets/img/' + story.numberImage) + ')' }">
              <span class="content"></span>
              <span class="badge" v-html="badge(getStoryKeyById(story.id))"></span>
            </span>
            <span class="story-title">{{ story.title }}</span>
          </span>
        </a>
      </div>
      <h3 class="story-level">Level 2</h3>
      <div class="story" v-for="(story, id) in getStoriesByLevel(2)" :key="id + '-lvl2'">
        <a tabindex="0" v-on:click="openStory(getStoryKeyById(story.id))" @keyup.enter="openStory(getStoryKeyById(story.id))" :style="{ backgroundImage: 'url(' + require('@/stories/ciell/assets/img/' + story.preview) + ')' }">
          <span class="title">
            <span class="number" v-on:click="openStory(getStoryKeyById(story.id), true)" :style="typeof story.numberImage === 'undefined' ? { backgroundColor: story.color } : { backgroundImage: 'url(' + require('@/stories/ciell/assets/img/' + story.numberImage) + ')' }">
              <span class="content"></span>
              <span class="badge" v-html="badge(getStoryKeyById(story.id))"></span>
            </span>
            <span class="story-title">{{ story.title }}</span>
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
    openStory (id, taskPage = false) {
      this.$emit('openStory', {
        id, taskPage
      })
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
    getStoriesByLevel: function (level) {
      return this.stories.filter(function (story) {
        return story.level === level
      })
    },
    getStoryKeyById: function (id) {
      return this.stories.findIndex(function (story) {
        return story.id === id
      })
    },
    badge (storyId) {
      let badge = this.badgeClass(this.$props.stories[storyId], this.$store.state.tasksComplete)
      let badgeImage, badgeClass, title, alt

      if (typeof badge === 'undefined' || !badge) {
        badgeClass = 'none'
      } else if (badge === 'bronze') {
        badgeClass = 'bronze'
        badgeImage = require('@/stories/ciell/assets/img/badges/badge-bronze-alt.png')
        title = 'Fair enough, but you can certainly do better than that!'
        alt = 'Bronze badge'
      } else if (badge === 'silver') {
        badgeClass = 'silver'
        badgeImage = require('@/stories/ciell/assets/img/badges/badge-silver-alt.png')
        title = 'Good job, you earned a silver star for this essay!'
        alt = 'Silver badge'
      } else if (badge === 'gold') {
        badgeClass = 'gold'
        badgeImage = require('@/stories/ciell/assets/img/badges/badge-gold-alt.png')
        title = 'Wow, awesome! You earned a gold star for this essay!'
        alt = 'Gold badge'
      }

      let html = '<span class="' + badgeClass + '">'

      if (typeof badgeImage !== 'undefined') {
        html += '<img src="' + badgeImage + '" title="' + title + '" alt="' + alt + '" />'
      }

      html += '</span>'

      return html
    }
  }
}
</script>

<style scoped>
  .container.home {
    padding-top: 0;
    padding-bottom: 0;
  }

  .ciell-logo {
    display: block;
    text-align: center;
    width: 4.5em;
    margin: 0 auto;
    position: relative;
    top: -.5em;
  }

  .home-subtitle {
    font-family: 'aka-acidgr-diarygirlmedium';
    text-align: center;
    font-size: 1.25em;
    line-height: 1.3;
    max-width: 90%;
    margin: .5em auto .75em;
    font-weight: 400;
    letter-spacing: .75px;
    color: #04accc;
  }

  .stories {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    position: relative;
    font-size: 1em;
  }

  .story-level {
    display: block;
    width: 100%;
    text-align: center;
    letter-spacing: 3px;
    text-transform: uppercase;
    font-size: .93875em;
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

  /* .story a:focus {
    outline: none;
    border: 0;
    box-shadow: 0 0 0 2px #04accc;
    z-index: 9;
  } */

  .story a .title {
    z-index: 2;
    position: absolute;
    left: 0;
    bottom: -.875em;
    padding: 0 0 0 .75em;
    /* border: 1px solid red; */
    width: 90%;
    left: 5%;
    text-align: left;
    font-size: 1.06125em;
  }

  .story a .title span.number {
    display: inline-block;
    text-align: center;
    font-size: 1em;
    position: relative;
    padding: 0 0;
    line-height: 1;
    bottom: -.6em;
    left: 0;
    width: 4em;
    height: 4em;
    background-color: #15191a;
    background-size: cover;
    background-position: center center;
  }

  .story a .title span.number .content {
    position: absolute;
    display: block;
    padding: .6125em 0 .5em;
    color: #fff;
    top: 0;
    left: .7em;
  }

  .story a:hover .title span.title-background {
    opacity: .95;
  }

  .badge >>> span {
    position: absolute;
    z-index: -1;
    left: 0;
    width: 100%;
    background-size: cover;
    height: auto;
    top: -1.93em;
  }

  /* .badge >>> .bronze {
    top: -1.25em;
  } */

  /* .badge >>> .silver {
    top: -3.9em;
  } */

  /* .badge >>> .gold {
    top: -5.3em;
  } */

  /* .badge >>> .none {
    top: -.6125em;
    width: 50%;
    left: 25%;
  } */

  .badge img {
    display: none !important;
    position: relative;
    max-width: 1em;
  }

  .story-title {
    padding: .125em 0 0 .25em;
    color: #04accc;
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

  @media screen and (max-width: 890px) {
    .story a .title {
      font-size: .85em;
    }
  }

  @media screen and (max-width: 720px) {
    .story a .title {
      font-size: .75em;
    }
  }

  @media screen and (max-width: 639px) {
    .stories {
      display: block;
      margin: 0 auto;
      width: 440px;
      max-width: 86%;
      justify-content: center;
    }

    .story-level {
      margin: 2em 0 1em;
    }

    .story-level:not(:first-of-type) {
      margin-top: 4em;
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

  @media screen and (max-width: 420px) {
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
