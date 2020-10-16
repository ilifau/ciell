<template>
  <div class="header-wrapper">
    <div class="header">
      <router-link v-bind:class="showBacktoStoriesLink() ? '' : 'visibility-hidden'" class="story-title" to="/home">
        <div><span class="story-title-outline"><v-icon name="arrow-left" v-if="showBacktoStoriesLink()" scale="0.75" /> {{ storyTitle }}</span></div>
      </router-link>
      <div class="toggle-wrapper">
        <a class="toggle-font" tabindex="0" v-bind:class="this.$store.state.baseFont ? 'active' : 'inactive'" v-on:click="toggleBaseFont()" @keyup.enter="toggleBaseFont()">
          Abc
        </a>
      </div>
      <span class="nav-toggle" v-bind:class="{ active: navIsActive, story: showBacktoStoriesLink() }">
        <a tabindex="0" v-on:click="toggleNav()" @keyup.enter="toggleNav()" @keydown.esc="toggleNav()">
          <span class="nav-circle"></span><span class="nav-circle"></span><span class="nav-circle"></span>
        </a>
      </span>
    </div>
    <div class="close-nav" v-on:click="closeNav()" v-bind:class="{ active: navIsActive }"></div>
    <div class="nav" v-bind:class="{ active: navIsActive }" @keydown.esc="toggleNav()">
      <span class="nav-header">NAVIGATION</span>
      <span class="story-level">Level 1</span>
      <div v-for="(story, id) in getStoriesByLevel(1)" :key="id">
        <div class="story-link-wrapper" v-bind:class="{ current: getStoryKeyById(story.id) === $store.state.currentStoryId && $route.name === 'story', placeholder: story.placeholder }">
          <a class="story-link" v-on:click="openStory(getStoryKeyById(story.id)), closeNav()" @keyup.enter="openStory(getStoryKeyById(story.id), true), closeNav()" tabindex="0">
            <span class="story-link-title">{{ story.title }}</span><span class="tasks-num"><span v-html="star(story)"></span><span class="of">{{ completedTasksNum(story) }} / {{ story.tasks.length }}</span></span>
          </a>
        </div>
      </div>
      <span class="story-level">Level 2</span>
      <div v-for="(story, id) in getStoriesByLevel(2)" :key="id + '-lvl2'">
        <div class="story-link-wrapper" v-bind:class="{ current: getStoryKeyById(story.id) === $store.state.currentStoryId && $route.name === 'story', placeholder: story.placeholder }">
          <a class="story-link" v-on:click="openStory(getStoryKeyById(story.id)), closeNav()" @keyup.enter="openStory(getStoryKeyById(story.id), true), closeNav()" tabindex="0">
            <span class="story-link-title">{{ story.title }}</span><span class="tasks-num"><span v-html="star(story)"></span><span class="of">{{ completedTasksNum(story) }} / {{ story.tasks.length }}</span></span>
          </a>
        </div>
      </div>
      <router-link to="/tasks" v-bind:class="{ current: $route.name === 'tasks' }" v-on:click.native="closeNav()">All Tasks<span class="tasks-num all-tasks"><span v-html="starTotal()"></span><span class="of">{{ $store.state.tasksComplete.length }} / {{ numTasks(stories) }}</span></span></router-link>
      <router-link to="/evaluation" v-bind:class="{ current: $route.name === 'evaluation' }" v-on:click.native="closeNav()">Rate this App</router-link>
      <router-link to="/about" v-bind:class="{ current: $route.name === 'about' }" v-on:click.native="closeNav()">About CIELL</router-link>
      <router-link to="/" v-bind:class="{ current: $route.name === 'welcome' }" v-on:click.native="closeNav()">Welcome Screen</router-link>
      <a id="toggleBaseFont" tabindex="0" v-on:click="toggleBaseFont()" @keyup.enter="toggleBaseFont()" v-bind:class="this.$store.state.baseFont ? 'active' : 'inactive'">Open dyslexic mode</a>
      <a tabindex="0" v-on:click="toggleNav()" @keyup.enter="toggleNav()">&times; Close navigation</a>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      navIsActive: false
    }
  },
  props: ['stories'],
  computed: {
    storyTitle: function () {
      let show = ['tasks', 'about', 'home', 'evaluation']
      if (show.includes(this.$route.name)) {
        return 'Comics'
      } else if (this.$route.name === 'story') {
        return this.$props.stories[this.$store.state.currentStoryId].title
      } else {
        return ''
      }
    }
  },
  methods: {
    toggleNav: function () {
      this.navIsActive = !this.navIsActive
    },
    closeNav: function () {
      this.navIsActive = false
    },
    showBacktoStoriesLink: function () {
      let show = ['story', 'tasks', 'about', 'evaluation']
      return show.includes(this.$route.name)
    },
    getBadgeClass: function (id, tasks) {
      let badgeClass = this.badgeClass(id, tasks)

      if (badgeClass === '') {
        badgeClass = 'none'
      }

      return badgeClass
    },
    star: function (story) {
      if (this.$store.state.tasksComplete.length === 0) {
        return '<img class="stars-total" src="' + require('@/stories/ciell/assets/img/badges/star-none.png') + '" alt="" />'
      }

      let completed = this.completedTasksNum(story)
      let percent = Math.ceil(completed / story.tasks.length * 100)

      if (percent < 10) {
        return '<img class="stars-total" src="' + require('@/stories/ciell/assets/img/badges/star-none.png') + '" alt="" />'
      } else if (percent > 10 && percent <= 49) {
        return '<img class="stars-total" src="' + require('@/stories/ciell/assets/img/badges/star-bronze.png') + '" alt="" />'
      } else if (percent > 49 && percent <= 86) {
        return '<img class="stars-total" src="' + require('@/stories/ciell/assets/img/badges/star-silver.png') + '" alt="" />'
      } else if (percent > 86) {
        return '<img class="stars-total" src="' + require('@/stories/ciell/assets/img/badges/star-gold.png') + '" alt="" />'
      }
    },
    starTotal: function (storyId) {
      if (this.$store.state.tasksComplete.length === 0) {
        return '<img class="stars-total" src="' + require('@/stories/ciell/assets/img/badges/star-none.png') + '" alt="" />'
      }

      let percent = Math.ceil(this.$store.state.tasksComplete.length / this.numTasks(this.$props.stories) * 100)

      if (percent <= 10) {
        return '<img class="stars-total" src="' + require('@/stories/ciell/assets/img/badges/star-none.png') + '" alt="" />'
      } else if (percent > 10 && percent <= 49) {
        return '<img class="stars-total" src="' + require('@/stories/ciell/assets/img/badges/star-bronze.png') + '" alt="" />'
      } else if (percent > 49 && percent <= 80) {
        return '<img class="stars-total" src="' + require('@/stories/ciell/assets/img/badges/star-silver.png') + '" alt="" />'
      } else if (percent > 80 && percent < 100) {
        return '<img class="stars-total" src="' + require('@/stories/ciell/assets/img/badges/star-gold.png') + '" alt="" />'
      } else if (percent >= 100) {
        return '<img class="stars-total" src="' + require('@/stories/ciell/assets/img/badges/star-platinum.png') + '" alt="" />'
      }
    },
    completedTasksNum: function (story) {
      let allCompletedTasks = this.$store.state.tasksComplete
      let completed = story.tasks.filter(function (task) {
        return allCompletedTasks.includes(task.id)
      })

      return completed.length
    },
    openStory: function (id, taskPage = false) {
      this.$emit('openStory', {
        id, taskPage
      })
    },
    toggleBaseFont: function () {
      this.$emit('toggleBaseFont')
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
    }
  }
}
</script>

<style scoped>
.header {
  display: flex;
  position: fixed;
  align-items: center;
  top: 0;
  left: 0;
  right: 0;
  padding: .5em .75em;
  padding-top: max(.5em, env(safe-area-inset-top));
  height: auto;
  z-index: 2;
  line-height: 1;
  flex-direction: row;
}

@media screen and (max-width: 1365px) {
  .header {
    background: rgb(255, 255, 255, .9);
  }
}

.header a {
  flex-grow: 1;
  font-weight: 600;
}

.header a.story-title {
  white-space: nowrap;
  -o-text-overflow: ellipsis;
  text-overflow: ellipsis;
  font-size: .75em;
  color: #04accc;
  margin-right: auto;
}

.header a.story-title:focus {
  outline: none;
  border: none;
}

.header a.story-title:focus .story-title-outline {
  outline: 2px solid #04accc;
  padding: 10px 0;
}

.header a.story-title:focus,
.header a.story-title:hover {
  color: #069bb9;
}

.ciell-logo img {
  height: 2em;
}

.story-level {
  display: block;
  width: 100%;
  color: #04accc;
  font-size: .6125em;
  letter-spacing: 3px;
  text-transform: uppercase;
  padding-left: 1em;
  border-bottom: 1px solid rgba(255,255,255,.04);
  padding: .75em .75em .75em 1.25em;
}

.nav {
  overflow-x: hidden;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
  position: fixed;
  z-index: 11;
  top: 0;
  left: -380px;
  width: 380px;
  height: 100%;
  max-width: 88%;
  background: #213338;
  transition: all .25s ease;
  transform: translateZ(0);
  -webkit-transform: translateZ(0);
  -webkit-backface-visibility: hidden;
  -webkit-perspective: 1000;
}

@supports(padding: max(0px)) {
  @media screen and (orientation: portrait) {
    .nav {
      padding-top: constant(safe-area-inset-top);
      padding-top: env(safe-area-inset-top);
    }
  }
}

.toggle-wrapper {
  position: relative;
  font-weight: 400;
  font-size: .75em;
  line-height: 1;
  margin-left: auto;
}

.toggle-wrapper a {
  padding: .25em;
}

.toggle-font {
  font-family: 'opendyslexic';
}

.toggle-font.active {
  font-family: -apple-system,
                BlinkMacSystemFont,
                "Segoe UI",
                Roboto,
                Oxygen-Sans,
                Ubuntu,
                Cantarell,
                "Helvetica Neue",
                sans-serif;
}

.nav {
  visibility: hidden;
}

.nav-toggle {
  margin-left: auto;
}

.nav-toggle a {
  position: relative;
  padding: .27em .5em;
  left: .5em;
}

.nav-circle {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: #04accc;
  transition: all ease-in .25s;
  margin-left: 6px;
  position: relative;
  left: 0;
  top: -2px;
  display: inline-block;
}

.nav-circle:first-of-type {
  margin-left: 0;
}

.nav-toggle:hover .nav-circle:first-of-type,
.nav-toggle.active .nav-circle:first-of-type {
  position: relative;
  left: -3px;
}

.nav-toggle:hover .nav-circle:last-of-type,
.nav-toggle.active .nav-circle:last-of-type {
  position: relative;
  left: 3px;
}

.nav-toggle:hover .nav-circle,
.nav-toggle:focus .nav-circle {
  background: #069bb9;
}

.nav a,
.nav .nav-header {
  display: block;
  padding: .5rem .75rem;
  color: #fff;
  border-bottom: 1px solid rgba(255,255,255,.04);
}

.nav a {
  font-size: .875em;
  /* transition: background .2s linear; */
  font-weight: 400;
  position: relative;
}

.nav a:not(.task-link):focus,
.nav a:not(.task-link):hover {
  background-color: rgba(0,0,0,.09) !important;
}

.nav .story-link-wrapper {
  transition: background .2s linear;
}

.nav .story-link-wrapper,
.nav .story-link,
.nav .task-link {
  cursor: pointer;
}

.nav .nav-header {
  color: #04accc;
  font-size: .875em;
  padding-top: .875em;
  padding-bottom: .875em;
  letter-spacing: 2px;
  font-weight: 500;
}

.nav.active {
  visibility: visible;
  left: 0;
}

.close-nav {
  pointer-events: none;
  position: fixed;
  z-index: 10;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  min-height: 100%;
  background: transparent;
  transition: all .2s linear;
}

.close-nav.active {
  pointer-events: all;
  background: rgba(0,0,0,.4)
}

.nav .story-link-wrapper {
  display: table;
  align-items: center;
  width: 100%;
  font-size: .93875em;
}

.nav .story-link {
  display: table-cell;
  width: 88%;
}

.story-link-title {
  display: inline-block;
  width: 75%;
  padding-right: .75em;
}

.tasks-num {
  display: inline-block;
  width: 25%;
}

.tasks-num.all-tasks {
  width: 33%;
}

.nav .task-link {
  display: table-cell;
  width: 12%;
  padding-left: 0;
  padding-right: 0;
  text-align: center;
  padding: 0 0;
}

.nav .story-link {
  padding-left: 1.5rem;
}

.nav .story-link-wrapper.current,
.nav a.current {
  background: rgba(0,0,0,.2);
}

.nav .placeholder {
  color: rgba(255,255,255,.4);
}

.nav .task-link {
  background-size: auto 40%;
  background-position: center 46%;
  background-repeat: no-repeat;
  z-index: 10;
  position: relative;
}

.nav .story-link-wrapper:hover .task-link {
  background-size: auto 56%;
  background-position: center 44%;
}

.nav .of {
  opacity: .6;
}

.nav >>> .stars-total {
  width: .93875em;
  position: relative;
  top: 1px;
  margin-right: .25em;
}

.nav .tasks-num {
  float: right;
  font-size: .75em;
  position: relative;
  top: .081em;
  text-align: right;
}

#toggleBaseFont {
  position: relative;
  display: flex;
  align-items: center;
}

#toggleBaseFont::after {
  display: inline-block;
  width: .5em;
  height: .5em;
  border-radius: 50%;
  margin-left: .5em;
  content: '';
}

#toggleBaseFont.active::after {
  background: #26bb26;
  box-shadow: 0 0 .25em rgba(0, 255, 0, 0.4);
}

#toggleBaseFont.inactive::after {
  background: rgba(255,255,255,.2);
}

@media screen and (max-width: 767px) {
  .toggle-font {
    right: 5em;
    /* top: .45em; */
  }

  .nav-circle {
    width: 8px;
    height: 8px;
    margin-left: 5px;
  }

  .nav-toggle:hover .nav-circle:first-of-type,
  .nav-toggle.active .nav-circle:first-of-type {
    position: relative;
    left: -2px;
  }

  .nav-toggle:hover .nav-circle:last-of-type,
  .nav-toggle.active .nav-circle:last-of-type {
    position: relative;
    left: 2px;
  }
}

@media screen and (max-width: 480px) {
  .toggle-wrapper {
    font-size: .7em;
  }
}
</style>
