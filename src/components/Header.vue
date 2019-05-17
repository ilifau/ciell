<template>
  <div class="header-wrapper">
    <div class="header" v-bind:class="{ story: isStory() }">
      <router-link class="story-title" to="/">{{ storyTitle }}</router-link>
      <!-- <span class="heart"><img src="@/stories/ciell/assets/img/heart.png" alt=""></span> -->
      <!-- <span class="user-score">{{ this.$store.state.userScore }}</span> -->
      <span class="nav-toggle" v-bind:class="{ active: navIsActive, story: isStory() }">
        <a v-on:click="toggleNav()">
          <span class="nav-circle"></span><span class="nav-circle"></span><span class="nav-circle"></span>
        </a>
      </span>
    </div>
    <div class="close-nav" v-on:click="closeNav()" v-bind:class="{ active: navIsActive }"></div>
    <div class="nav" v-on:click="toggleNav()" v-bind:class="{ active: navIsActive }">
      <span class="nav-header">Contents</span>
      <router-link to="/">Stories</router-link>
      <div v-for="(story, id) in stories" :key="id">
        <a class="story-link" v-on:click="openStory(id)">{{ id + 1 }}. {{ story.title }}</a>
      </div>
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
  props: ['stories'],
  computed: {
    storyTitle: function () {
      if (this.$route.name !== 'story') {
        return ''
      } else {
        return '← ' + this.$props.stories[this.$store.state.currentStoryId].title
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
    isStory: function () {
      return this.$router.currentRoute.name === 'story'
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
  z-index: 9;
  line-height: 1;
  align-items: flex-start;
}

.header.story {
  /* background: rgb(227, 239, 248, .95); */
  background: rgb(255, 255, 255, .9);
}

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

/* .header a:last-of-type {
  text-align: left;
} */

.ciell-logo img {
  height: 2em;
}

.user-score {
  display: inline-block;
  margin-right: 1em;
  font-weight: 700;
}

.heart {
  display: inline-block;
  width: 1em;
  margin-right: .2em;
  position: relative;
  top: 1px;
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

.nav-toggle a {
  display: flex;
  position: relative;
  top: 4px;
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
  color: #1c85a8;
  font-size: .75em;
  text-transform: uppercase;
  padding-top: 1.5em;
  padding-bottom: 1.5em;
  letter-spacing: 2px;
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
