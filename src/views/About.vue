<template>
  <div class="container about">
    <Header v-bind:stories="this.$props.stories" />
    <h1>About CIELL</h1>
    <p>The <strong>Comics for Inclusive English Language Learning (CIELL)</strong> project aims to develop the competences of second language teachers by promoting the use of comic art, and other visual representations of knowledge. Another goal of the project to enhance the quality of language teaching materials used for teaching writing as a  second language and support the needs of dyslexic learners in a socially inclusive manner.</p>
    <h2>Steering Committee</h2>
    <ul>
      <li>Prof. Julie-Ann Sime, Lancaster University</li>
      <li>Shaunna Joannidou, University of Cyprus</li>
      <li>Alexandros Despotopoulos, AKTO Greece</li>
      <li>Shaunna Joannidou, University of Cyprus</li>
      <li>Dr. Iris Wunder, FAU Germany</li>
    </ul>
    <h2>Team Members</h2>
    <ul>
      <li>Argiri Argyro, AKTO Greece</li>
      <li>Dr. Sebastian Honert, FAU Germany</li>
      <li>Prof. Judit Kormos, Lancaster University</li>
      <li>Dr. Natasa Lackovic, Lancaster University</li>
      <li>Eleni Nikiforou, University of Cyprus</li>
      <li>Evelyn Schlenk, FAU Germany</li>
      <li>Dr. Chryssa Themelis, Lancaster University</li>
      <li>Eleni Tsampra, AKTO</li>
    </ul>
    <h2>Artwork</h2>
    <ul>
      <li>Eleni Tsampra, AKTO</li>
    </ul>
    <h2>Coding</h2>
    <ul>
      <li>Dr. Sebastian Honert, FAU</li>
    </ul>
    <p><br /><a v-on:click="back">← Back to the Stories</a></p>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'

export default {
  name: 'home',
  components: {
    Header
  },
  props: ['stories'],
  methods: {
    back () {
      this.$router.push('/')
    }
  }
}
</script>

<style scoped>
.story-title {
  margin-bottom: .25em;
}

.author {
  font-style: italic;
  margin-bottom: .75em;
}
</style>
