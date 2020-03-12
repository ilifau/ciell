<template>
  <div class="container about">
    <h1>Evalution</h1>
    <p>Please take a few seconds to provide some feedback for our app. Simply choose a number of stars for each feedback category and then click the "Submit your rating" button.</p>
    <div class="ratings">
      <label v-for="(rating, index) in ratings()" :key="index">
        <div class="rating-wrapper">
          <h2>{{ index }} ({{ rating }}/5)</h2>
          <img v-on:click="rate(index, i)" v-for="i in rating" :key="'checked' + i" class="star" src="@/assets/img/star-rating.png" alt=""><img v-on:click="rate(index, i + rating)" v-for="i in (5 - rating)" :key="'unchecked' + i" class="star" src="@/assets/img/star-rating-unchecked.png" alt="">
        </div>
      </label>
    </div>
    <p>
      <span class="error" v-if="this.submitError"><strong>Ooops!</strong> {{ this.submitError }}</span>
      <a v-if="canSubmit() || this.submitting" class="btn" v-on:click="submitRating()"><v-icon v-if="this.submitting" name="spinner" spin /> Submit your ratings</a>
      <a v-if="!canSubmit() && !this.submitting" class="btn btn--wait" v-on:click="submitRating()">Thank you for your feedback!</a>
    </p>
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
  data () {
    return {
      timerDuration: 15000,
      submitTimer: 0,
      refreshTimer: '',
      submitError: '',
      submitting: false
    }
  },
  created () {
    this.refreshTimer = setInterval(this.updateTimer, this.timerDuration)
  },
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
    canSubmit () {
      let d = Date.now()
      return (this.submitTimer === 0 || d > this.submitTimer)
    },
    updateTimer () {
      this.submitTimer = 0
    },
    cancelRefreshTimer () {
      clearInterval(this.refreshTimer)
    },
    showSubmitError () {
      this.submitTimer = 0
      this.submitError = 'Something went wrong submitting your ratings. Is your device connected to the internet?'
    },
    submitRating () {
      if (!this.canSubmit()) {
        return
      }

      let d = Date.now()
      this.submitTimer = d + this.timerDuration
      this.submitting = true
      this.submitError = ''
      let that = this

      this.axios.post('https://sebastianhonert.com/ciell/ciell-mysql.php', {
        ratings: JSON.stringify(this.$store.state.ratings)
      }, {
        headers: {'Content-Type': 'application/x-www-form-urlencoded'}
      }).then(function (response) {
        if (response.data === 'New record created successfully') {
          that.submitError = ''
          let d = Date.now()
          that.submitTimer = d + that.timerDuration
          that.cancelRefreshTimer()
          that.refreshTimer = setInterval(that.updateTimer, that.timerDuration)
        } else {
          that.showSubmitError()
        }
        that.submitting = false
      }).catch(function (error) {
        if (error) {
          console.log(error)
          that.showSubmitError()
        }
        that.submitting = false
      })
    }
  },
  beforeDestroy () {
    this.cancelRefreshTimer()
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

.btn--wait {
  background: #08723d !important;
}

.error {
  display: block;
  color: rgb(122, 10, 10);
  background: rgb(245, 192, 192);
  padding: .5em;
}
</style>
