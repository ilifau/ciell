<template>
  <div class="header-wrapper">
    <div class="header" v-bind:class="{ showHeaderBackground: showHeaderBackground }">
      <router-link class="story-title" to="/">
        <div v-if="showBacktoStoriesLink()"><v-icon name="arrow-left" v-if="showBacktoStoriesLink()" scale="0.75" /> {{ storyTitle }}</div>
        <div v-else>&nbsp;</div>
      </router-link>
      <span class="nav-toggle" v-bind:class="{ active: navIsActive, story: showBacktoStoriesLink() }">
        <a v-on:click="toggleNav()">
          <span class="nav-circle"></span><span class="nav-circle"></span><span class="nav-circle"></span>
        </a>
      </span>
    </div>
    <div class="close-nav" v-on:click="closeNav()" v-bind:class="{ active: navIsActive }"></div>
    <div class="nav" v-on:click="toggleNav()" v-bind:class="{ active: navIsActive }">
      <span class="nav-header">NAVIGATION</span>
      <router-link to="/">Essays</router-link>
      <div v-for="(story, id) in stories" :key="id">
        <a class="story-link" v-bind:class="{ current: id === $store.state.currentStoryId, placeholder: story.placeholder }" v-on:click="openStory(id)">
          {{ id + 1 }}. {{ story.title }}
        </a>
      </div>
      <router-link to="/evaluation">Evaluation</router-link>
      <router-link to="/about">About CIELL</router-link>
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
      let show = ['story', 'about', 'home', 'evaluation']
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
      if (this.navIsActive) {
        this.navIsActive = false
      }
    },
    showBacktoStoriesLink: function () {
      let show = ['story', 'about', 'evaluation']
      return show.includes(this.$route.name)
    },
    openStory (id) {
      this.$emit('openStory', id)
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
  z-index: 10;
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
  flex-grow: 1;
  font-weight: 600;
}

.header a.story-title {
  white-space: nowrap;
  width: 100%;
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
  overflow: hidden;
  position: fixed;
  z-index: 11;
  top: 0;
  left: -280px;
  width: 280px;
  height: 125%;
  max-width: 280px;
  background: #20323e;
  transition: all .25s ease;
}

/* @supports(padding: max(0px)) {
    .nav {
        padding-top: max(1em, env(safe-area-inset-top));
        padding-left: max(1em, env(safe-area-inset-left));
        padding-right: max(1em, env(safe-area-inset-right));
        padding-bottom: max(1em, env(safe-area-inset-bottom));
    }
} */

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
  padding: .5rem 1rem;
  color: #fff;
  border-bottom: 1px solid rgba(255,255,255,.1);
}

.nav a {
  transition: all .2s linear;
  font-weight: 400;
}

.nav a:hover,
.nav a:focus {
  background: rgba(0,0,0,.2);
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

.nav .story-link {
  font-size: .875em;
  padding-left: 2rem;
}

.nav .story-link.current {
  background: rgba(0,0,0,.2);
}

.nav .story-link.placeholder {
  color: rgba(255,255,255,.4);
}

@media screen and (max-width: 767px) {
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
