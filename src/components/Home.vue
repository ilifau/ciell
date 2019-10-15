<template>
  <div class="background">
    <div class="container home">
      <!-- <div class="ciell-logo"><img src="@/assets/img/ciell-logo-bubble.jpg" alt=""></div> -->
      <h1 class="home-title">CIELL</h1>
      <h2 class="home-subtitle">Visually enhanced learning of writing organization for people with dyslexia.</h2>
      <div class="stories">
        <div class="story" v-for="(story, id) in this.$props.stories" :key="id">
          <a v-on:click="openStory(id)" :style="{ backgroundImage: 'url(' + require('@/stories/ciell/assets/img/' + story.preview) + ')' }">
            <span class="title">
              <span class="number">#{{ id + 1 }}</span>
              {{ story.title }}
              <span class="title-background" :style="{ backgroundColor: story.color ? story.color : '' }"></span>
            </span>
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
      this.$emit('openStory', id)
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

  .ciell-logo {
    display: block;
    text-align: center;
    width: 10em;
    margin: 0 auto;
  }

  h1 {
    text-align: center;
  }

  h1.home-title {
    margin: 0;
    font-weight: 700;
    color: #fff386;
    text-shadow: 3px 3px 0 rgba(0,0,0,.6), 6px 6px 0 rgba(0,0,0,.3);
    font-size: 2.5em;
  }

  .home-subtitle {
    text-align: center;
    font-size: 1em;
    width: 480px;
    max-width: 90%;
    margin: 0 auto 2.5em;
    color: #21677e;
    margin-top: .5em;
  }

  .stories {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    position: relative;
    font-size: 1em;
  }

  .story {
    display: block;
    position: relative;
    /* border-radius: 100%; */
    width: calc(50% - 2em);
    /* overflow: hidden; */
    margin: 0 1em 1em;
    transition: box-shadow .3s linear, border-color .3s linear;
    /* border: .25em solid #219ac2; */
    /* box-shadow: 0 1px 3px rgba(0,0,0,.2); */
    mix-blend-mode: multiply;
  }

  .story::after {
    content: "";
    display: block;
    padding-top: 100%;
  }

  .story:hover {
    /* box-shadow: 0 3px 10px rgba(0,0,0,.6); */
    border-color: #fff386;
  }

  .story a {
    position: absolute;
    display: -webkit-box;
    display: -moz-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 100%;
    text-align: left;
    background-size: cover;
    color: #fff;
    font-size: 1.4em;
    text-shadow: 1px 1px 0 rgba(0,0,0,.6);
  }

  .story a .title {
    z-index: 2;
    position: absolute;
    bottom: 1em;
    padding: .75em 1em;
    left: -.5em;
  }

  .story a .title span.number {
    display: block;
    text-align: left;
    font-size: .6125em;
    line-height: 1.2;
  }

  .story a .title span.title-background {
    content: '';
    z-index: -1;
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    background: #092d3a;
    opacity: .6;
    transform: rotate(-2deg);
  }

  .story a .dark {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: #000;
    opacity: 0;
    z-index: 0;
    transition: opacity linear .3s;
  }

  .story a:hover .dark {
    opacity: .125;
  }

  @media screen and (min-width: 640px) and (max-width: 800px) {
    .story a {
      font-size: 1.125em;
    }
  }

  @media screen and (max-width: 639px) {
    .stories {
      display: block;
      margin: 0 auto;
      width: 360px;
      max-width: 86%;
    }

    .story {
      width: 100%;
      margin: 0 0 2em;
      transition: box-shadow .3s linear, border-color .3s linear;
    }
  }

  @media screen and (max-width: 479px) {
    .story a {
      font-size: 1.125em;
    }
  }
</style>
