<template>
  <div class="container home">
    <Header
      v-bind:story="this.$props.stories[this.$props.currentStoryId]"
      v-bind:stories="this.$props.stories"
      @openStory="openStory($event)"
    />
    <Home
      v-bind:stories="this.$props.stories"
      @openStory="openStory($event)"
    />
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
  ],
  methods: {
    openStory (id) {
      this.$emit('openStory', id)
    }
  }
}
</script>
