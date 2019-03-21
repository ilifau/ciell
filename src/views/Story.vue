<template>
  <div class="container story">
    <Header v-bind:stories="this.$props.stories" />
    <StoryPanel v-bind:story="this.$props.stories[this.$store.state.currentStoryId]" />
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import StoryPanel from '@/components/StoryPanel.vue'

export default {
  name: 'home',
  components: {
    Header,
    StoryPanel
  },
  props: ['stories']
}
</script>
