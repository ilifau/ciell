<template>
  <div id="app" v-bind:class="{ story: isStory() }">
    <div v-if="showRotatedBackground()" class="rotated-background"></div>
    <div id="close-nav" @click="$emit('closeNav')"></div>
    <router-view v-bind:stories="stories" />
    <div id="footer"></div>
  </div>
</template>

<script>
import Stories from '@/stories/ciell/ciell.js'

export default {
  data () {
    return {
      stories: Stories
    }
  },
  methods: {
    showRotatedBackground () {
      return this.$router.currentRoute.name === 'home'
    },
    isStory: function () {
      return this.$router.currentRoute.name === 'story'
    }
  }
}
</script>

<style>
* {
  box-sizing: border-box;
  -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
  -webkit-tap-highlight-color: transparent;
}

html, body {
  height: 100%;
  min-height: 100%;
  /* background: rgb(227, 239, 248); */
  background: #fff;
  overflow-x: hidden;
}

html {
  -webkit-user-select: none;
}

body {
  margin: 0;
}

#app {
  font-size: 23px;
  font-family: -apple-system,
                BlinkMacSystemFont,
                "Segoe UI",
                Roboto,
                Oxygen-Sans,
                Ubuntu,
                Cantarell,
                "Helvetica Neue",
                sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2d383b;
  padding: .5em 1em 0;
  width: 100%;
  min-height: 100%;
  position: relative;
}

/* #app.story {
  background: #d8f4fd;
} */

.rotated-background {
  position: absolute;
  left: -20%;
  top: -20%;
  height: 55%;
  max-height: 40em;
  width: calc(100% + 40%);
  transform: rotate(-8deg);
  background: linear-gradient(140deg, #3ec2ee, #9edbf0);
  z-index: 0;
  min-height: 20em;
}

#nav-close {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
}

h1, h2, h3, h4, h5, h6 {
  line-height: 1.25;
}

h1 { font-size: 1.875em; margin-top: 0; }
h2 { font-size: 1.6125em; }
h3 { font-size: 1.375em; }
h4 { font-size: 1.25em; }
h5 { font-size: 1.125em; }
h6 { font-size: .875em; }

p {
  margin: 0 0 .5em;
}

a {
  cursor: pointer;
  text-decoration: none;
}

.container {
  position: relative;
  margin: 0 auto;
  width: 920px;
  max-width: 100%;
  line-height: 1.5;
  padding: 3em 0 2em;
  z-index: 1;
}

.container a {
  font-weight: 700;
  color: #219ac2;
  transition: color .3s linear;
}

.container a:hover {
  color: #1c85a8
}

.highlight {
  background: #fff151;
}

img {
  max-width: 100%;
}

#footer {
  font-size: .75em;
  text-align: center;
  color: #aaa;
  padding: 0 0 1em;
}

/* Comics */
.comic-grid {
  position: relative;
  display: flex;
  flex-wrap: wrap;
  overflow: hidden;
}

.comic-grid div {
  position: relative;
  background: #f7f7f7;
  box-shadow: 1px 1px 5px rgba(0,0,0,.5);
  border: 3px solid #333;
  overflow: hidden;
  margin-bottom: 1em;
}

.comic-grid div span {
  color: #333;
  background: rgba(255,255,255,.7);
  font-size: .5em;
  margin: 1em;
  position: absolute;
  right: 0;
  bottom: 0;
  z-index: 2;
  padding: .25em;
}

.comic-grid div::before {
  content: "";
  display: block;
}

.comic-grid .full {
  width: 100%;
}

.comic-grid .full::before {
  padding-top: 50%;
}

.comic-grid .half {
  width: calc(50% - .5em);
  margin-right: 1em;
}

.comic-grid .half.last {
  margin-right: 0;
}

.comic-grid .half::before {
  padding-top: 100%;
}

.comic-grid div img {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
}

/* Responsive */

@media screen and (max-width: 1023px) {
  .container {
    padding: 2.5em 0 2em;
  }

  .rotated-background {
    max-height: 50%;
  }
}

@media screen and (max-width: 640px) {
  #app {
    font-size: 21px;
    padding-top: 0;
  }

  .v--modal {
    margin: 0 auto;
    max-width: 90%;
  }
}

@media screen and (max-width: 639px) {
  .rotated-background {
    max-height: 39%;
  }
}

@media screen and (max-width: 580px) {
  .comic-grid div {
    border: 2px solid #333;
}

  .comic-grid .half {
    width: 100%;
    margin: 0 0 1em;
  }
}
</style>
