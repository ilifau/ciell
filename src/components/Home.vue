<template>
  <div class="background">
    <div class="container home">
      <h1>Content (Stories)</h1>
      <p style="padding-bottom:1em">This is the <strong><span class="highlight">Welcome Screen</span></strong> of the app. It will contain links to the contents of the app. Please keep in mind that all elements of the app are preliminary and will be redesigned. The app will be responsive and cross-plattform. Try it by changig the size of your browser window. Click on the first tile below to open the demo story.</p>
      <div class="stories">
        <div v-for="(story, id) in this.$props.stories" :key="id">
          <a v-on:click="openStory(id)" :style="{ backgroundImage: 'url(' + require('@/stories/ciell/assets/img/' + story.preview) + ')' }">
          <span class="title">{{ story.title }}</span>
          <div class="dark"></div>
        </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['stories'],
  methods: {
    openStory (id) {
      if (id !== this.$store.state.currentStoryId) {
        this.$store.commit('setCurrentChapterId', 0)
      }

      this.$store.commit('setCurrentStoryId', id)
      this.$router.push('story')
    },
    storyBackgroundImage () {
      return this.$props.stories[this.$store.state.currentStoryId].preview
    }
  }
}
</script>

<style scoped>
  .container.home {
    padding-top: 0;
  }

  h1 {
    text-align: center;
  }

  /* .background {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: 0;
    background: url(../assets/img/bg-home.jpg) center center no-repeat;
    background-size: cover;
  } */

  .stories {
    display: grid;
    grid-template-columns: calc(50% - .5em) calc(50% - .5em);
    grid-gap: 1em;
  }

  .stories div {
    position: relative;
  }

  .stories div a {
    display: -webkit-box;
    display: -moz-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 280px;
    padding: 1em;
    text-align: center;
    background-size: cover;
    color: #fff;
    font-size: 1.25em;
  }

  .stories div a .title {
    z-index: 2;
    position: relative;
  }

  .stories div a .dark {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 86, 162, .5);
    z-index: 0;
    transition: background linear .3s;
  }

  .stories div a:hover .dark {
    background: rgba(4, 57, 104, .8);
  }

  @media screen and (max-width: 640px) {
    .stories {
      grid-template-columns: 100%;
      grid-gap: 1em;
    }
  }
</style>
