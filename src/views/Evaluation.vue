<template>
  <div class="container about">
    <h1>Evalution</h1>
    <p>Please take a minute to provide some feedback for our app. Simply choose a number of stars for each category click the "Submit" button.</p>
    <div class="ratings">
      <label v-for="(rating, index) in ratings()" :key="index">
        <div class="rating-wrapper">
          <h2>{{ index }} ({{ rating }}/5)</h2>
          <img v-on:click="rate(index, i)" v-for="i in rating" :key="'checked' + i" class="star" src="@/assets/img/star-rating.png" alt=""><img v-on:click="rate(index, i + rating)" v-for="i in (5 - rating)" :key="'unchecked' + i" class="star" src="@/assets/img/star-rating-unchecked.png" alt="">
        </div>
      </label>
    </div>
    <p><a class="btn" v-on:click="submitRating()">Submit your ratings</a></p>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'

export default {
  name: 'home',
  components: {
    Header
  },
  props: ['stories', 'showHeaderBackground'],
  methods: {
    openStory (id) {
      this.$emit('openStory', id)
    },
    ratings () {
      return this.$store.state.ratings
    },
    rate (index, rating) {
      this.$store.commit('setRating', {prop: index, rating: rating})
    },
    submitRating () {
      // this.$store.commit('setRating', {prop: 'Design', rating: 3})
    }
  }
}
</script>

<style scoped>
.ratings,
.rating-wrapper {
  display: block;
  overflow: hidden;
  padding-bottom: 1em;
}
label {
  display: block;
  overflow: hidden;
  clear: left;
  width: 100%;
}
.star {
  display: inline-block;
  margin-right: .5em;
  width: 64px;
  max-width: 16.67%;
}

h2 {
  line-height: 1;
  margin-bottom: .5em;
}
</style>
