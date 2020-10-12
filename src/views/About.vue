<template>
  <div class="container about">
    <div class="container-logo">
      <img src="@/assets/img/ciell-logo-bubble.png" class="logo-bubble" alt="" rel="preload">
    </div>
    <h1>About CIELL</h1>
    <p>
      This CIELL App uses comic art and other visual representations to support dyslexic learners in an inclusive manner that reduces the need for special accommodations. The App was developed by the <a href="https://ciell.eu" target="_blank">Comics for Inclusive English Language Learning</a> project and co-funded by the ERASMUS+ Programme of the European Union, <a href="https://ec.europa.eu/programmes/erasmus-plus/projects/eplus-project-details/#project/2018-1-UK01-KA203-048195" target="_blank">2018-1-UK01-KA203-48214</a>.
    </p>
    <p>
      <img src="@/assets/img/logo-erasmus.png" class="erasmus" alt="" rel="preload">
    </p>
    <p>
      <em>The contents of this app are the sole responsibility of the authors and can in no way be taken to reflect the views of the National Agency and/or the European Commission.</em>
    </p>
    <h2>Learning Design</h2>
    <ul>
      <li>
        <a href="https://www.lancaster.ac.uk/educational-research/people/julie-ann-sime" target="_blank">Dr. Julie-Ann Sime</a>, Lancaster University, UK
      </li>
    </ul>
    <h2>Writing Samples</h2>
    <ul>
      <li>
        <a href="https://www.lancaster.ac.uk/educational-research/people/chryssa-themelis" target="_blank">Dr. Chryssa Themelis</a>, Lancaster University, UK
      </li>
      <li>
        Damaskini Metzidaki, University of Cyprus, Cyprus
      </li>
      <li>
        <a href="https://www.lancaster.ac.uk/arts-and-social-sciences/about-us/people/helena-stakounis" target="_blank">Helena Stakounis</a>, Lancaster University, UK
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
  props: ['stories'],
  methods: {
    openStory (id) {
      this.$emit('openStory', {
        id
      })
    }
  }
}
</script>

<style scoped>
.container.about {
  background: #04accc;
  color: #2d383a;
  padding: 1.5em 2em 1em;
  border-top-left-radius: 3em;;
  border-top-right-radius: 3em;;
  margin-top: 6em;
  position: relative;
  margin-bottom: -2em;
}

.container-logo {
  position: absolute;
  right: 1em;
  top: -3em;
  width: 5em;
  height: 5em;
}

.erasmus {
  max-width: 100%;
  width: 16em;
  margin: 1em 0 0 0;
  padding: .5em;
  background: #fff;
  border-radius: .5em;
}

.container.about a {
  color: #2d383a !important;
  text-decoration: underline;
  font-weight: 600;
}

h1 {
  color: #fff;
  font-size: 1.25em;
  font-weight: 600;
}

h2 {
  line-height: 1;
  margin-bottom: .75em;
  color: #fff;
  font-size: 1em;
  font-weight: 600;
  letter-spacing: 1px;
  margin-top: 2em;
}

.story-title {
  margin-bottom: .25em;
}

.author {
  font-style: italic;
  margin-bottom: .75em;
}

ul {
  list-style-type: none;
}

@media screen and (max-width: 800px) {
  .container.about {
    left: -1em;
    width: calc(100% + 2em);
    max-width: calc(100% + 2em);
  }
}
</style>
