<template>
  <div class="container home">
    <div class="rotated-background"></div>
    <Home
      v-bind:stories="this.$props.stories"
      @openStory="openStory($event)"
    />
  </div>
</template>

<script>
import Home from '@/components/Home.vue'

export default {
  name: 'home',
  components: {
    Home
  },
  props: [
    'stories',
    'currentStoryId'
  ],
  methods: {
    openStory (params) {
      let id = params.id
      let taskPage = params.taskPage
      this.$emit('openStory', {
        id,
        taskPage
      })
    }
  }
}
</script>

<style>
  .rotated-background {
    display: none !important;
    position: absolute;
    left: -100%;
    top: -20%;
    height: 67vh;
    min-height: 50%;
    width: calc(100% + 200%);
    transform: rotate(-8deg);
    background: linear-gradient(140deg, #3ec2ee, #9edbf0);
    z-index: 0;
  }
</style>
