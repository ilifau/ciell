<template>
  <div class="background">
    <div class="container home">
      <!-- <div class="ciell-logo"><img src="@/assets/img/ciell-logo-text-only.png" alt=""></div> -->
      <h1 class="home-title">CIELL</h1>
      <h2 class="home-subtitle">Visually enhanced learning of writing organization for people with dyslexia.</h2>
      <!-- <p style="padding-bottom:1em">This is the <strong><span class="highlight">Welcome Screen</span></strong> of the app. It will contain links to the contents of the app. Please keep in mind that all elements of the app are preliminary and will be redesigned. The app will be responsive and cross-plattform. Try it by changig the size of your browser window. Click on the first tile below to open the demo story.</p> -->
      <div class="stories">
        <div class="story" v-for="(story, id) in this.$props.stories" :key="id">
          <a v-on:click="openStory(id)" :style="{ backgroundImage: 'url(' + require('@/stories/ciell/assets/img/' + story.preview) + ')' }">
            <span class="title">{{ story.title }}</span>
            <div class="dark" :style="{ backgroundColor: story.color ? story.color : ''}"></div>
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
    display: grid;
    grid-template-columns: calc(50% - 1em) calc(50% - 1em);
    grid-gap: 2em;
    justify-items: center;
    margin: 1em auto 0;
    width: 720px;
    max-width: 100%;
  }

  .story {
    position: relative;
    width: 14em;
    height: 14em;
    border-radius: 50%;
    overflow: hidden;
    margin-bottom: .5em;
    transition: box-shadow .3s linear, border-color .3s linear;
    border: .375em solid #219ac2;
  }

  .story:hover {
    box-shadow: 0 3px 10px rgba(0,0,0,.6);
    border-color: #fff386;
  }

  .story a {
    display: -webkit-box;
    display: -moz-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    padding: 1.5em;
    text-align: center;
    background-size: cover;
    color: #fff;
    font-size: 1.125em;
    text-shadow: 1px 1px 0 rgba(0,0,0,.6);
  }

  .story a .title {
    z-index: 2;
    position: relative;
  }

  .story a .dark {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: #1c85a8;
    opacity: .4;
    z-index: 0;
    transition: opacity linear .3s;
  }

  .story a:hover .dark {
    opacity: .7;
  }

  @media screen and (max-width: 812px) {
    .stories {
      width: 640px;
      max-width: 100%;
    }

    .story {
      width: 12em;
      height: 12em;
      margin-bottom: 0em;
      border: .2em solid #219ac2;
    }

    .story a .title {
      font-size: .93875em;
    }
  }

  @media screen and (max-width: 640px) {
    .story {
      width: 11em;
      height: 11em;
    }

    .story a {
      padding: 1em;
    }

    .story a .title {
      font-size: .875em;
    }
  }

  @media screen and (max-width: 560px) {
    .story {
      width: 10em;
      height: 10em;
    }
  }

  @media screen and (max-width: 480px) {
    .story {
      width: 9em;
      height: 9em;
    }

    .story a .title {
      font-size: .75em;
    }
  }

  @media screen and (max-width: 430px) {
    .story {
      width: 7em;
      height: 7em;
    }

    .story a .title {
      font-size: .6125em;
    }
  }

  @media screen and (max-width: 359px) {
    .story {
      width: 6em;
      height: 6em;
    }

    .story a .title {
      font-size: .6125em;
    }
  }
</style>
