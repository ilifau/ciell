<template>
  <div class="container story">
    <StoryPanel
      v-bind:story="this.$props.stories[this.$store.state.currentStoryId]"
      @showMessage="showMessage($event)"
      @scrollTop="scrollTop()"
      @openStory="openStory($event)"
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
    openStory (id, taskPage, chapterId) {
      this.$emit('openStory', id, taskPage)
    },
    showMessage (message) {
      this.$emit('showMessage', message)
    },
    scrollTop () {
      this.$emit('scrollTop', true)
    }
  }
}
</script>
