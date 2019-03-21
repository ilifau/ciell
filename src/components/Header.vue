<template>
  <div class="header">
    <router-link class="story-title" to="/">{{ storyTitle }}</router-link>
    <span class="heart"><img src="@/stories/ciell/assets/img/heart.png" alt=""></span>
    <span class="user-score">{{ this.$store.state.userScore }}</span>
    <router-link to="/about">About</router-link>
  </div>
</template>

<script>
export default {
  props: ['stories'],
  computed: {
    storyTitle: function () {
      if (this.$route.name !== 'story') {
        return 'CIELL'
      } else {
        return '← ' + this.$props.stories[this.$store.state.currentStoryId].title
      }
    }
  }
}
</script>

<style scoped>
.header {
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  padding: .5em;
  background: #0056a2;
  color: #fff;
  box-shadow: 0 2px 5px rgba(0,0,0,.25);
  z-index: 9;
  line-height: 1;
}

.header a {
  flex-grow: 1;
  color: #fff !important;
  font-weight: 700;
}

.header a.story-title {
  white-space: nowrap;
  width: 100%;
  overflow: hidden;
  -o-text-overflow: ellipsis;
  text-overflow: ellipsis;
  padding-right: 2em;
}

.header a:last-of-type {
  text-align: right;
}

.user-score {
  display: inline-block;
  margin-right: 1em;
  font-weight: 700;
}

.heart {
  display: inline-block;
  width: 1em;
  margin-right: .2em;
  position: relative;
  top: 1px;
}
</style>
