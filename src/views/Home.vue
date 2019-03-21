<template>
  <div class="container home">
    <Header v-bind:story="this.$props.stories[this.$props.currentStoryId]" />
    <Home v-bind:stories="this.$props.stories" />
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import Home from '@/components/Home.vue'

export default {
  name: 'home',
  components: {
    Header,
    Home
  },
  props: [
    'stories',
    'currentStoryId'
  ]
}
</script>
