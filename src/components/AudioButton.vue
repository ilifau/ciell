<template>
  <div class="audio-group">
    <div class="audio-buttons">
      <a class="play" @click="togglePlayback">
        <span v-if="playing"><v-icon name="pause" scale=".75" /></span>
        <span v-if="!playing"><v-icon name="play" scale=".75" /></span>
        {{ playing ? this.$props.label : this.$props.label }}
      </a>
      <a class="stop" @click="stop"><v-icon name="stop" scale=".75" /> Stop</a>
    </div>
  </div>
</template>

<script>
import VueHowler from 'vue-howler'

export default {
  mixins: [VueHowler],
  props: ['label']
}
</script>

<style scoped>
.audio-buttons {
  display: inline-block;
  margin-right: .25em;
  font-size: .75em;
}

.audio-buttons a {
  color: #fff;
  text-decoration: none;
  background: #219ac2;
  padding: .6125em .75em;
  border-radius: .25em;
  display: inline-block;
  border: 0;
  transition: all .4s ease;
  cursor: pointer;
}

.audio-buttons a.play {
  background: #08723d;
}

.audio-buttons a.play:hover {
  background: #185d3a;
}
</style>
