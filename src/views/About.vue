<template>
  <div class="container about">
    <h1>About CIELL</h1>
    <p>The <a href="https://ciell.eu" target="_blank">CIELL</a> app has been developed as part of the Comics for Inclusive English Language (CIELL) project.  Through this app, the CIELL project aims to: (a) promote the use of comic art and other visual representations of knowledge in the teaching of English as a second/foreign language; (b) support the needs of learners with dyslexia in an inclusive manner, i.e. without the need to make special adjustments or accommodations to the learning material.  The project has been co-funded by the ERASMUS+ Programme of the European Union under grant number <a href="https://ec.europa.eu/programmes/erasmus-plus/projects/eplus-project-details/#project/2018-1-UK01-KA203-048195" target="_blank">2018-1-UK01-KA203-48214</a>.</p>
    <h2>Learning Design</h2>
    <ul>
      <li>
        <a href="https://www.lancaster.ac.uk/educational-research/people/julie-ann-sime" target="_blank">Dr. Julie-Ann Sime</a>, Lancaster University, UK
      </li>
    </ul>
    <h2>Writing Samples</h2>
    <ul>
      <li>
        <a href="https://www.lancaster.ac.uk/educational-research/people/chryssa-themelis" target="_blank">Dr. Chryssa Themelis</a>, Helena Stakounis, (Lancaster University)
      </li>
      <li>
        Metzidaki (University of Cyprus)
      </li>
    </ul>
    <h2>Artwork</h2>
    <ul>
      <li><a href="https://www.behance.net/elenitsampra" target="_blank">Eleni Tsampra</a>, AKTO, Greece</li>
    </ul>
    <h2>Development</h2>
    <ul>
      <li><a href="https://www.ili.fau.de/team/sebastian-honert/" target="_blank">Dr. Sebastian Honert</a>, FAU, Germany</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'home',
  props: ['stories', 'showHeaderBackground'],
  methods: {
    openStory (id) {
      this.$emit('openStory', id)
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
