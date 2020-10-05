<template>
  <div class="audio-group">
    <div class="audio-buttons">
      <a tabindex="0" class="play" @click="togglePlayback" @keyup.enter="togglePlayback">
        <span v-if="playing"><v-icon name="pause" scale=".75" /></span>
        <span v-if="!playing"><v-icon name="play" scale=".75" /></span>
        {{ playing ? this.$props.label : this.$props.label }}
      </a>
      <a tabindex="0" class="stop" @click="stop" @keyup.enter="stop"><v-icon name="stop" scale=".75" /> Stop</a>
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
  background: #04accc;
  padding: .6125em .75em;
  border-radius: 3px;
  display: inline-block;
  border: 0;
  transition: background-color .4s ease;
  cursor: pointer;
}

.audio-buttons a:hover {
  background: #069bb9;
}

.audio-buttons a.play {
  background: #0a8669;
}

.audio-buttons a.play:hover {
  background: #097259;
}

.audio-buttons a:focus {
  outline: none;
}

.audio-buttons a.play:focus {
  box-shadow: 0 0 .5em #0a8669;
}

.audio-buttons a.stop:focus {
  box-shadow: 0 0 .5em #069bb9;
}
</style>
