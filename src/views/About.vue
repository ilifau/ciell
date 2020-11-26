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
    <h2>Project Partners</h2>
    <div class="partner-logos">
      <a href="https://www.lancaster.ac.uk/" target="_blank" rel="noopener noreferrer"><img src="@/assets/img/partners/lu.jpg" alt="" rel="preload"></a>
      <a href="https://akto.gr/" target="_blank" rel="noopener noreferrer"><img src="@/assets/img/partners/akto.jpg" alt="" rel="preload"></a>
      <a href="https://ili.fau.de/" target="_blank" rel="noopener noreferrer"><img src="@/assets/img/partners/ili.jpg" alt="" rel="preload"></a>
      <a href="https://www.ucy.ac.cy/en/" target="_blank" rel="noopener noreferrer"><img src="@/assets/img/partners/ucy.jpg" alt="" rel="preload"></a>
    </div>
    <h2>Credits / Acknowledgements</h2>
    <p><strong><a href="https://www.behance.net/elenitsampra">Eleni Tsampra</a></strong> (Art)<br>
    <strong><a href="https://sebastianhonert.com/">Sebastian Honert</a></strong> (Development)</p>
    <p>This App could not have been completed without contributions from <strong><a href="https://www.lancaster.ac.uk/educational-research/people/julie-ann-sime">Julie-Ann Sime</a></strong> (LU, project manager), <strong>Chryssa Themelis</strong> (LU), <strong>Shaunna Joannidou (UCY)</strong>, <strong>Eleni Nikiforou</strong> (UCY), <strong>Iris Wunder</strong> (FAU), <strong>Alexandros Despotopoulos</strong> (AKTO).With particular thanks to: <strong><a href="http://wp.lancs.ac.uk/learning-languages-with-splds/">Prof. Judit Kormos</a></strong> (LU) for her advice on teaching languages to students with specific learning differences; the sample essay writers (<strong><a href="https://www.lancaster.ac.uk/educational-research/people/chryssa-themelis">Chryssa Themelis</a></strong>, <strong>Helena Stakounis</strong>, <strong>Damaskini Metzidaki</strong>); the voice actors who read the comics; the App testers; and the many learners and teachers who helped evaluate early versions of the App.</p>
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
  border-top-left-radius: 3em;
  border-top-right-radius: 3em;
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

.partner-logos img {
  width: 40%;
  max-width: 13em;
  height: auto;
  padding: 16px;
  background: #fff;
  border-radius: 8px;
  margin: 1em 1em 0 0;
}

@media screen and (max-width: 800px) {
  .container.about {
    left: -1em;
    width: calc(100% + 2em);
    padding: 12px;
    max-width: calc(100% + 2em);
  }
}

@media screen and (max-width: 480px) {
  .partner-logos img {
    width: 100%;
    max-width: 480px;
    margin: 1em 0 0;
  }
}
</style>
