<template>
  <div id="app">
    <router-view v-bind:stories="stories" />
  </div>
</template>

<script>
import Stories from '@/stories/ciell/ciell.js'

export default {
  data () {
    return {
      stories: Stories
    }
  }
}
</script>

<style>
* {
  box-sizing: border-box;
}

html, body {
  height: 100%;
  min-height: 100%;
}

html {
  -webkit-user-select: none;
}

body {
  margin: 0;
}

#app {
  font-size: 23px;
  font-family: Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #171717;
  background: #fff;
  padding: 0 1em 2em;
  width: 100%;
  min-height: 100%;
}

p {
  margin: 0 0 .5em;
}

a {
  cursor: pointer;
  text-decoration: none;
}

.container {
  margin: 0 auto;
  width: 960px;
  max-width: 100%;
  line-height: 1.4;
  padding: 3em 0 5em;
}

.container a {
  font-weight: 700;
  color: #0056a2;
}

.highlight {
  background: rgb(255, 255, 104);
}

img {
  max-width: 100%;
}

@media screen and (max-width: 640px) {
  #app {
    font-size: 21px;
  }

  .container {
    padding-bottom: 2em;
  }
}
</style>
