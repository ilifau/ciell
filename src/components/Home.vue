<template>
  <div class="background">
    <div class="container home">
      <!-- <div class="ciell-logo"><img src="@/assets/img/ciell-logo-text-only.png" alt=""></div> -->
      <h1 class="home-title">CIELL</h1>
      <h2 class="ciell-subtitle">Visually enhanced learning of writing organization for people with dyslexia.</h2>
      <!-- <p style="padding-bottom:1em">This is the <strong><span class="highlight">Welcome Screen</span></strong> of the app. It will contain links to the contents of the app. Please keep in mind that all elements of the app are preliminary and will be redesigned. The app will be responsive and cross-plattform. Try it by changig the size of your browser window. Click on the first tile below to open the demo story.</p> -->
      <div class="stories">
        <div v-for="(story, id) in this.$props.stories" :key="id">
          <a v-on:click="openStory(id)" :style="{ backgroundImage: 'url(' + require('@/stories/ciell/assets/img/' + story.preview) + ')' }">
            <span class="title">{{ story.title }}</span>
            <div class="dark" :style="{ backgroundColor: story.color ? story.color : ''}"></div>
          </a>
        </div>
      </div>
      <v-dialog :width="computeModalWidth" />
    </div>
  </div>
</template>

<script>
export default {
  props: ['stories'],
  methods: {
    openStory (id) {
      if (typeof this.$props.stories[id].placeholder !== 'undefined') {
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
  }

  .ciell-subtitle {
    text-align: center;
    font-size: .93875em;
    width: 480px;
    max-width: 90%;
    margin: 0 auto 2.5em;
    color: #2a99bf;
    padding-top: .5em;
    margin-top: .25em;
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

  .stories div {
    position: relative;
    width: 14em;
    height: 14em;
    border-radius: 50%;
    overflow: hidden;
    margin-bottom: .5em;
    transition: box-shadow .3s linear;
  }

  .stories div:hover {
    box-shadow: 1px 3px 8px rgba(0,0,0,.5);
  }

  .stories div a {
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
    /* font-family: 'Patrick Hand'; */
    text-shadow: 1px 1px 1px rgba(0,0,0,.6);
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
    background: #2a99bf;
    opacity: .4;
    z-index: 0;
    transition: opacity linear .3s;
  }

  .stories div a:hover .dark {
    opacity: .7;
  }

  @media screen and (max-width: 800px) {
    .stories {
      width: 640px;
      max-width: 100%;
    }

    .stories div {
      width: 12em;
      height: 12em;
    }

    .stories div a .title {
      font-size: .93875em;
    }
  }

  @media screen and (max-width: 640px) {
    .stories div {
      width: 11em;
      height: 11em;
    }

    .stories div a {
      padding: 1em;
    }

    .stories div a .title {
      font-size: .875em;
    }
  }

  @media screen and (max-width: 560px) {
    .stories div {
      width: 10em;
      height: 10em;
    }
  }

  @media screen and (max-width: 480px) {
    .stories div {
      width: 9em;
      height: 9em;
    }

    .stories div a .title {
      font-size: .75em;
    }
  }

  @media screen and (max-width: 430px) {
    .stories div {
      width: 7em;
      height: 7em;
    }

    .stories div a .title {
      font-size: .6125em;
    }
  }

  @media screen and (max-width: 359px) {
    .stories div {
      width: 6em;
      height: 6em;
    }

    .stories div a .title {
      font-size: .6125em;
    }
  }
</style>
