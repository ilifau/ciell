<template>
  <div class="audio-group">
    <div class="audio-buttons">
      <a class="play" @click="togglePlayback">{{ playing ? '&#10073;&#10073; Pause' : '&#9658; Play' }}</a>
      <a class="stop" @click="stop">&#9724; Stop</a>
    </div>
  </div>
</template>

<script>
import VueHowler from 'vue-howler'

export default {
  mixins: [VueHowler]
}
</script>

<style scoped>
.audio-buttons {
  display: inline-block;
  margin-right: .25em;
}

.audio-buttons a {
  font-size: .75em;
  color: #fff;
  text-decoration: none;
  background: #219ac2;
  padding: .6125em .75em;
  border-radius: .25em;
  display: inline-block;
  border: 0;
  transition: all .4s ease 0s;
  margin-top: .5em;
  cursor: pointer;
}

.audio-buttons a.play {
  background: #08723d;
}
</style>
