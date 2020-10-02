<template>
  <div class="header-wrapper">
    <div class="header">
      <router-link v-bind:class="showBacktoStoriesLink() ? '' : 'visibility-hidden'" class="story-title" to="/">
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
      <!-- <router-link to="/" v-bind:class="{ current: $route.name === 'home'}" v-on:click.native="closeNav()">Comics</router-link> -->
      <span class="story-level">Level 1</span>
      <div v-for="(story, id) in getStoriesByLevel(1)" :key="id">
        <div class="story-link-wrapper" v-bind:class="{ current: id === $store.state.currentStoryId && $route.name === 'story', placeholder: story.placeholder }">
          <a class="story-link" v-on:click="openStory(id), closeNav()" @keyup.enter="openStory(id, true), closeNav()" tabindex="0">
            {{ story.title }}
          </a>
          <a class="task-link" v-bind:class="badgeClass($props.stories[id], $store.state.tasksComplete)" v-on:click="openStory(id, true), closeNav()" :style="{ backgroundImage: 'url(' + require('@/stories/ciell/assets/img/badges/star-' + getBadgeClass($props.stories[id], $store.state.tasksComplete) + '.png') + ')' }"></a>
        </div>
      </div>
      <span class="story-level">Level 2</span>
      <div v-for="(story, id) in getStoriesByLevel(2)" :key="id">
        <div class="story-link-wrapper" v-bind:class="{ current: id === $store.state.currentStoryId && $route.name === 'story', placeholder: story.placeholder }">
          <a class="story-link" v-on:click="openStory(id), closeNav()" @keyup.enter="openStory(id, true), closeNav()" tabindex="0">
            {{ story.title }}
          </a>
          <a class="task-link" v-bind:class="badgeClass($props.stories[id], $store.state.tasksComplete)" v-on:click="openStory(id, true), closeNav()" :style="{ backgroundImage: 'url(' + require('@/stories/ciell/assets/img/badges/star-' + getBadgeClass($props.stories[id], $store.state.tasksComplete) + '.png') + ')' }"></a>
        </div>
      </div>
      <router-link to="/tasks" v-bind:class="{ current: $route.name === 'tasks' }" v-on:click.native="closeNav()">Stars earned<span class="tasks-num"><span v-html="starsTotal()"></span><span class="of">{{ $store.state.tasksComplete.length }} / {{ numTasks(stories) }}</span></span></router-link>
      <router-link to="/evaluation" v-bind:class="{ current: $route.name === 'evaluation' }" v-on:click.native="closeNav()">Rate this App</router-link>
      <router-link to="/about" v-bind:class="{ current: $route.name === 'about' }" v-on:click.native="closeNav()">About CIELL</router-link>
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
    starsTotal: function () {
      if (this.$store.state.tasksComplete.length === 0) {
        return ''
      }

      let percent = Math.ceil(this.$store.state.tasksComplete.length / this.numTasks(this.$props.stories) * 100)

      if (percent > 10 && percent <= 49) {
        return '<img class="stars-total" src="' + require('@/stories/ciell/assets/img/badges/star-bronze.png') + '" alt="Bronze star" />'
      } else if (percent > 49 && percent <= 80) {
        return '<img class="stars-total" src="' + require('@/stories/ciell/assets/img/badges/star-silver.png') + '" alt="Silver star" />'
      } else if (percent > 80 && percent < 100) {
        return '<img class="stars-total" src="' + require('@/stories/ciell/assets/img/badges/star-gold.png') + '" alt="Gold star" />'
      } else if (percent >= 100) {
        return '<img class="stars-total" src="' + require('@/stories/ciell/assets/img/badges/star-platinum.png') + '" alt="Platinum star" />'
      }
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
  color: #1c85a8;
  /* overflow: hidden; */
  /* text-transform: uppercase; */
  margin-right: auto;
}

.header a.story-title:focus {
  outline: none;
  border: none;
}

.header a.story-title:focus .story-title-outline {
  outline: 2px solid #219ac2;
  padding: 10px 0;
}

.ciell-logo img {
  height: 2em;
}

.story-level {
  display: block;
  width: 100%;
  color: #28acd8;
  font-size: .6125em;
  letter-spacing: 3px;
  text-transform: uppercase;
  padding-left: 1em;
  border-bottom: 1px solid rgba(255,255,255,.1);
  padding: .75em .75em .75em 1.25em;
}

.nav {
  overflow-x: hidden;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
  position: fixed;
  z-index: 11;
  top: 0;
  left: -300px;
  width: 300px;
  height: 100%;
  max-width: 300px;
  background: #20323e;
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
  background: #219ac2;
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

.nav a,
.nav .nav-header {
  display: block;
  padding: .5rem .75rem;
  color: #fff;
  border-bottom: 1px solid rgba(255,255,255,.1);
}

.nav a {
  font-size: .875em;
  /* transition: background .2s linear; */
  font-weight: 400;
  position: relative;
}

.nav a:not(.task-link):hover,
.nav a:not(.task-link):focus,
.nav .story-link-wrapper:hover,
.nav .story-link-wrapper:focus {
  background: rgba(0,0,0,.2);
}

.nav .story-link-wrapper:hover a:not(.task-link),
.nav .story-link-wrapper:focus a:not(.task-link) {
  background: none;
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
  color: #28acd8;
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

.nav .story-link:focus {
  left: 2px;
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
  background: rgba(206, 38, 28, 0.5);
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
