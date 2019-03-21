<template>
  <div class="container about">
    <Header />
    <h3>About CIELL</h3>
    <p>The app contains a router that allows us to easily switch between different components. This is the <span class="highlight"><strong>About</strong></span> component. It will contain information on the project and the partners.</p>
    <p>CIELL is short for "Comics for Inclusive English Language Learning". And this is just a very boring prototype. But stay tuned – things are going to greatly improve in the future! The source code of the app is also available on <a href="https://github.com/SebastianHonert/ciell" target="_blank">GitHub</a>.</p>
    <h3>Project Partners</h3>
    <ul>
      <li>...</li>
      <li>...</li>
      <li>...</li>
      <li>...</li>
      <li>...</li>
    </ul>
    <p><br /><a v-on:click="back">Back</a></p>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'

export default {
  name: 'home',
  components: {
    Header
  },
  props: ['stories'],
  methods: {
    back () {
      this.$router.go(-1)
    }
  }
}
</script>

<style scoped>
.story-title {
  margin-bottom: .25em;
}

.author {
  font-style: italic;
  margin-bottom: .75em;
}
</style>
