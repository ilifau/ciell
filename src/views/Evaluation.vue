<template>
  <div class="container about">
    <h1>Rate this App</h1>
    <div class="ratings">
      <label v-for="(rating, index) in ratings()" :key="index">
        <div class="rating-wrapper">
          <h2>{{ index }} ({{ rating }}/5)</h2>
          <a tabindex="0" v-on:click="rate(index, i)" @keyup.enter="rate(index, i)" v-for="i in rating" :key="'checked' + i"><img class="star" src="@/assets/img/star-rating.png" alt=""></a><a tabindex="0" v-on:click="rate(index, i + rating)" @keyup.enter="rate(index, i + rating)" v-for="i in (5 - rating)" :key="'unchecked' + i"><img class="star" src="@/assets/img/star-rating-unchecked.png" alt=""></a>
        </div>
      </label>
    </div>
    <p>
      <span class="error" v-if="this.submitError"><strong>Ooops!</strong> {{ this.submitError }}</span>
      <a tabindex="0" v-if="canSubmit() || this.submitting" class="btn" v-on:click="submitRating()" @keyup.enter="submitRating()"><v-icon v-if="this.submitting" name="spinner" spin /> Submit</a>
      <a tabindex="0" v-if="!canSubmit() && !this.submitting" class="btn btn--wait" v-on:click="submitRating()" @keyup.enter="submitRating()">Thank you!</a>
    </p>
  </div>
</template>

<script>
export default {
  name: 'home',
  props: ['stories'],
  data () {
    return {
      timerDuration: 60000,
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
      this.$emit('openStory', {
        id
      })
    },
    ratings () {
      return this.$store.state.ratings
    },
    rate (index, rating) {
      this.$store.commit('setRating', { prop: index, rating: rating })
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
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
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
  padding-bottom: 1em;
}

.ratings a {
  margin-right: .25em;
  position: relative;
  left: 2px;
}

label {
  display: block;
  overflow: hidden;
  clear: left;
  width: 100%;
}

.star {
  display: inline-block;
  width: 64px;
  max-width: 16.67%;
}

h2 {
  line-height: 1;
  margin-bottom: .5em;
}

.btn {
  transition: background-color .2s linear, outline .2s linear;
}

/* .btn:focus {
  outline: none;
  box-shadow: 0 0 .5em #219ac2;
} */

.btn--wait {
  background: #08723d !important;
}

.error {
  display: block;
  color: rgb(122, 10, 10);
  background: rgb(255, 233, 233);
  padding: .5em;
}

@media screen and (max-width: 380px) {
  .star {
    width: 48px;
  }
}

@media screen and (max-width: 359px) {
  .star {
    width: 42px;
  }
}
</style>
