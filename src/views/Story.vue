<template>
  <div class="container story">
    <StoryPanel
      v-bind:story="this.$props.stories[this.$store.state.currentStoryId]"
      @showMessage="showMessage($event)"
      />
  </div>
</template>

<script>
import StoryPanel from '@/components/StoryPanel.vue'

export default {
  name: 'home',
  components: {
    StoryPanel
  },
  props: ['stories'],
  methods: {
    openStory (id) {
      this.$emit('openStory', id)
    },
    showMessage (message) {
      this.$emit('showMessage', message)
    }
  }
}
</script>
