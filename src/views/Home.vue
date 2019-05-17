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
    <v-dialog />
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
      if (typeof this.stories[id].placeholder !== 'undefined') {
        this.$modal.show('dialog', {
          title: 'Please Note',
          text: 'This story will be available soon.',
          buttons: [
            {
              title: 'Close'
            }
          ]
        })

        return
      }

      if (id !== this.$store.state.currentStoryId) {
        this.$store.commit('setCurrentChapterId', 0)
      }

      this.$store.commit('setCurrentStoryId', id)
      this.$router.push('story')

      window.scrollTo(0, 0)
    }
  }
}
</script>
