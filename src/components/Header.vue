<template>
  <div class="header-wrapper">
    <div class="header showHeaderBackground">
      <router-link class="story-title" to="/">
        <div v-if="showBacktoStoriesLink()"><v-icon name="arrow-left" v-if="showBacktoStoriesLink()" scale="0.75" /> {{ storyTitle }}</div>
        <div v-else>&nbsp;</div>
      </router-link>
      <div class="toggle-wrapper">
        <a class="toggle-font" v-bind:class="this.$store.state.baseFont ? 'active' : 'inactive'" v-on:click="toggleBaseFont()">
          Abc
        </a>
        <span class="nav-toggle" v-bind:class="{ active: navIsActive, story: showBacktoStoriesLink() }">
          <a v-on:click="toggleNav()">
            <span class="nav-circle"></span><span class="nav-circle"></span><span class="nav-circle"></span>
          </a>
        </span>
        </div>
    </div>
    <div class="close-nav" v-on:click="closeNav()" v-bind:class="{ active: navIsActive }"></div>
    <div class="nav" v-bind:class="{ active: navIsActive }">
      <span class="nav-header">NAVIGATION</span>
      <router-link to="/" v-bind:class="{ current: $route.name === 'home'}" v-on:click.native="closeNav()">Essays</router-link>
      <div v-for="(story, id) in stories" :key="id">
        <div class="story-link-wrapper" v-bind:class="{ current: id === $store.state.currentStoryId && $route.name === 'story', placeholder: story.placeholder }">
          <a class="story-link" v-on:click="openStory(id), closeNav()">
            {{ story.title }}
          </a>
          <a class="task-link" v-bind:class="badgeClass($props.stories[id], $store.state.tasksComplete)" v-on:click="openStory(id, true), closeNav()"></a>
        </div>
      </div>
      <router-link to="/tasks" v-bind:class="{ current: $route.name === 'tasks' }" v-on:click.native="closeNav()">Stars<span class="tasks-num">{{ $store.state.tasksComplete.length }} / {{ numTasks(stories) }}<span class="tasks-completed-star" v-html="starCompleted()"></span></span></router-link>
      <router-link to="/evaluation" v-bind:class="{ current: $route.name === 'evaluation' }" v-on:click.native="closeNav()">Rate this App</router-link>
      <router-link to="/about" v-bind:class="{ current: $route.name === 'about' }" v-on:click.native="closeNav()">About CIELL</router-link>
      <a id="toggleBaseFont" v-on:click="toggleBaseFont()" v-bind:class="this.$store.state.baseFont ? 'active' : 'inactive'">Open dyslexic mode</a>
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
  props: ['stories', 'showHeaderBackground'],
  computed: {
    storyTitle: function () {
      let show = ['story', 'tasks', 'about', 'home', 'evaluation']
      if (show.includes(this.$route.name)) {
        return 'Essays'
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
    starCompleted: function () {
      return ''
    },
    openStory: function (id, taskPage = false) {
      this.$emit('openStory', {
        id, taskPage
      })
    },
    toggleBaseFont: function () {
      this.$emit('toggleBaseFont')
    }
  }
}
</script>

<style scoped>
.header {
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  padding: .5em .75em;
  z-index: 2;
  line-height: 1;
  align-items: flex-start;
}

@media screen and (max-width: 1279px) {
  .header.showHeaderBackground {
    background: rgb(255, 255, 255, .9);
  }
}

/* @supports(padding: max(0px)) {
    .header {
        top: max(1em, env(safe-area-inset-top));
        padding-left: max(1em, env(safe-area-inset-left));
        padding-right: max(1em, env(safe-area-inset-right));
    }
} */

.header a {
  flex-grow: 0;
  font-weight: 600;
}

.header a.story-title {
  white-space: nowrap;
  -o-text-overflow: ellipsis;
  text-overflow: ellipsis;
  padding-right: 2em;
  font-size: .75em;
  color: #1c85a8;
  overflow: hidden;
  text-transform: uppercase;
}

.ciell-logo img {
  height: 2em;
}

.nav {
  overflow-x: hidden;
  overflow-y: scroll;
  -webkit-overflow-scrolling: touch;
  position: fixed;
  z-index: 11;
  top: 0;
  left: -300px;
  width: 300px;
  height: 125%;
  max-width: 300px;
  background: #20323e;
  transition: all .25s ease;
  transform: translateZ(0);
  -webkit-transform: translateZ(0);
  -webkit-backface-visibility: hidden;
  -webkit-perspective: 1000;
}

/* @supports(padding: max(0px)) {
    .nav {
        padding-top: max(1em, env(safe-area-inset-top));
        padding-left: max(1em, env(safe-area-inset-left));
        padding-right: max(1em, env(safe-area-inset-right));
        padding-bottom: max(1em, env(safe-area-inset-bottom));
    }
} */

.toggle-font {
  position: absolute;
  right: 5.5em;
  top: .475em;
  font-weight: 400;
  font-size: .875em;
  line-height: 1;
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

.nav-toggle a {
  display: flex;
  position: absolute;
  top: -.3em;
  padding: 1em;
  right: 0;
}

.nav-circle {
  display: flex-item;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: #219ac2;
  transition: all ease-in .25s;
  margin-left: 6px;
  position: relative;
  left: 0;
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

.nav .task-link {
  background-image: url('~@/stories/ciell/assets/img/badges/star-none.png');
}

.nav .task-link.gold {
  background-image: url('~@/stories/ciell/assets/img/badges/star-gold.png');
}

.nav .task-link.silver {
  background-image: url('~@/stories/ciell/assets/img/badges/star-silver.png');
}

.nav .task-link.bronze {
  background-image: url('~@/stories/ciell/assets/img/badges/star-bronze.png');
}

.nav .story-link-wrapper:hover .task-link {
  background-size: auto 56%;
  background-position: center 44%;
}

.nav .tasks-num {
  float: right;
  font-size: .75em;
  position: relative;
  top: .081em;
  opacity: .25;
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
    top: .45em;
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
</style>
