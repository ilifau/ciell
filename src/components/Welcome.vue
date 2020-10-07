<template>
  <div class="welcome">
    <div class="header" :style="{ backgroundColor: '#f7f7f7', backgroundImage: 'url(' + randomBanner() + ')' }"></div>
    <div class="body">
      <div class="ciell-logo">
        <img src="@/assets/img/ciell-logo-bubble.png" class="logo-bubble" alt="" rel="preload">
        <img src="@/assets/img/ciell-logo-text.png" class="logo-text" alt="CIELL" rel="preload">
      </div>
      <h2 class="subtitle">Comics for Inclusive<br>English Language Learning</h2>
      <router-link class="enter" to="/home" v-on:click.native="closeNav()">
        <!-- <p>WELCOME</p> -->
        <img class="arrow" :src="require('@/stories/ciell/assets/img/arrow-right.png')" alt="" />
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    randomBanner: function () {
      let image
      const number = Math.floor((Math.random() * 2) + 1)

      if (number === 1) {
        image = require('@/assets/img/welcome-agatha.jpg')
      } else {
        image = require('@/assets/img/welcome-ray.jpg')
      }

      return image
    }
  }
}
</script>

<style scoped>
  .welcome {
    padding: 0 0 !important;
  }

  .welcome .header {
    position: relative;
    top: -1em;
    left: 0;
    right: 0;
    width: 100%;
    margin: 0 auto;
    height: 54vh;
    min-height: 10em;
    background-size: cover;
    background-position: left center;
    clip-path: inset(-500% -40% 0 -40% round 100%);
  }

  @media screen and (max-width: 1024px) {
    .welcome .header {
      left: -1em;
      width: calc(100% + 2em);
      max-width: none;
    }
  }

  @media screen and (max-width: 768px) {
    .welcome .header {
      height: 63vh;
    }
  }

  @media screen and (max-width: 359px) {
    .welcome .header {
      height: 54vh;
    }
  }

  .welcome .body {
    position: relative;
    margin: .5em auto 1.25em;
  }

  .ciell-logo {
    display: block;
    text-align: center;
    width: 3.5em;
    margin: 0 auto .5em;
    position: relative;
  }

  .welcome .subtitle {
    font-family: 'aka-acidgr-diarygirlmedium';
    text-align: center;
    font-size: .875em;
    line-height: 1.3;
    max-width: 90%;
    margin: 0 auto;
    font-weight: 400;
    letter-spacing: .75px;
    color: #04accc;
  }

  .welcome .enter {
    font-family: 'aka-acidgr-diarygirlmedium';
    color: #2d383a;
    font-weight: 700;
    display: block;
    text-align: center;
    letter-spacing: 2px;
    font-size: .75em;
    margin-top: 1.25em;
  }

  .welcome .arrow {
    margin-top: -.25em;
    position: relative;
    width: 2em;
    animation: pulse 2s infinite;
  }

  @keyframes pulse {
    0%, 100% {
      transform: scale(1);
    }

    44%, 64% {
      transform: scale(1.1);
    }
  }
</style>
