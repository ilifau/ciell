<template>
  <div>
    <div class="task" v-bind:class="{ completed: this.$store.state.tasksComplete.includes(this.task.id)}">
      <div class="task-message-wrapper" v-if="showTaskMessage" v-on:click="hideTaskMessage()">
        <div v-if="showTaskMessage" class="task-message">
          <div class="close-task-message"><v-icon name="home" /></div>
          <div v-if="this.$store.state.tasksComplete.includes(this.task.id)">
            <h3 class="first">Superb, you did it!</h3>
            <p class="last">You completed this task successfully. Your progress will be saved. Congratulations!</p>
          </div>
          <div v-if="!this.$store.state.tasksComplete.includes(this.task.id)">
            <h3 class="first">Not quite&hellip;</h3>
            <p class="last">Hm, not quite (<strong>{{ this.correct }} correct</strong>, <strong>{{ this.incorrect }} incorrect</strong>). Try again, you can try as often as you like.</p>
          </div>
        </div>
      </div>
      <h1 v-if="task.title">{{ task.title }}</h1>
      <div v-if="task.description" v-html="task.description"></div>
      <div class="image-choice">
        <div class="task-item" v-for="(item, questionIndex) in task.items" :key="'question-' + questionIndex">
          <h2 class="answer-title" v-if="item.question">{{ questionIndex + 1 }}. {{ item.question }}</h2>
          <label class="answer" v-for="(answer, answerIndex) in item.answers" :key="'answer-' + answerIndex">
            <input v-if="item.singleChoice" v-on:click="onChange(questionIndex)" v-model="selectedAnswers[questionIndex][answerIndex]" v-bind:value="answer.correct === true ? true : answerIndex" type="radio" :name="'radio-' + (questionIndex)">
            <input v-else v-on:click="onChange()" v-model="selectedAnswers[questionIndex][answerIndex]" v-bind:value="answer.correct" type="checkbox">
            <div>
              <img :src="require('@/stories/ciell/assets/img/' + answer.image)" alt="answer.text" class="answer-image" />
              <p>{{ answer.text }}</p>
            </div>
          </label>
        </div>
        <div class="clearfix"></div>
      </div>
    </div>
    <a class="check-task" slot="footer" v-on:click="checkTask">Check results </a>
  </div>
</template>

<script>
export default {
  props: [
    'story',
    'task'
  ],
  data () {
    return {
      selectedAnswers: [],
      isComplete: this.$store.state.tasksComplete.includes(this.task.id),
      checked: false,
      showTaskMessage: false,
      correct: 0,
      incorrect: 0
    }
  },
  created () {
    let that = this
    this.task.items.forEach(function (question, index) {
      that.selectedAnswers.push([])
      question.answers.forEach(function (answer) {
        if (!that.isComplete) {
          that.selectedAnswers[index].push(false)
        } else {
          that.selectedAnswers[index].push(answer.correct)
        }
      })
    })
  },
  methods: {
    onChange (questionIndex = null) {
      this.checked = false
      this.isComplete = this.incorrect === 0
      this.$store.commit('removeTaskComplete', this.task.id)

      if (questionIndex !== null) { // Single choice
        this.selectedAnswers[questionIndex] = this.selectedAnswers[questionIndex].map(function (answer, index) {
          return false
        })
      }
    },
    checkTask () {
      let that = this
      let correct = 0
      let incorrect = 0

      this.selectedAnswers.forEach(function (question, questionIndex) {
        // if (typeof that.task.items[questionIndex].singleChoice !== 'undefined') { // Single choice
        //   if ()
        // }

        question.forEach(function (answer, answerIndex) {
          if (answer) { // checked items
            if (that.task.items[questionIndex].answers[answerIndex].correct) {
              correct++
            } else {
              incorrect++
            }
          } else { // unchecked items
            if (typeof that.task.items[questionIndex].answers[answerIndex].correct === 'undefined') {
              correct++
            } else {
              incorrect++
            }
          }
        })
      })

      this.correct = correct
      this.incorrect = incorrect

      if (this.incorrect === 0) {
        this.$store.commit('setTaskComplete', this.task.id)
        this.checked = true
      } else {
        this.$store.commit('removeTaskComplete', this.task.id)
        this.checked = false
      }

      this.showTaskMessage = true
    },
    hideTaskMessage () {
      this.showTaskMessage = false
    }
  }
}
</script>

<style scoped>
  .task-item {
    position: relative;
    padding-bottom: 1em;
  }

  .task-item h2 {
    margin-bottom: .5em;
  }

  label div p {
    display: flex;
    justify-content: center;
    font-size: .875em;
    width: 100%;
    max-width: 96%;
    padding: 0;
    margin-bottom: 1em;
    font-weight: 600;
  }

  .answer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    padding-left: 0;
    margin: 0 1em 1em 0;
    cursor: pointer;
    font-size: .875em;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    width: calc(33% - 1em);
    float: left;
    z-index: 1;
    border-radius: 4px;
  }

  .answer-title {
    clear: both;
  }

  /* On mouse-over, add a grey background color */
  .answer img {
    transition: all .3s linear;
    border: 6px solid #fff;
    background-color: #fff;
  }

  /* When the checkbox is checked, add a blue background */
  .answer input:checked + div img {
    border: 6px solid #219ac2;
    background-color: #219ac2;
    border-radius: 6px;
  }

  /* Hide the browser's default checkbox */
  .container input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
  }

  .answer-image {
    width: 100%;
    border: 6px solid #fff;
  }

  .check-task {
    color: #fff !important;
    text-decoration: none;
    text-align: center;
    background: #08723d;
    padding: .75em;
    border-radius: 3px;
    display: block;
    border: 0;
    transition: all .4s ease 0s;
    font-size: 1em;
    margin-top: 1em;
    cursor: pointer;
    line-height: 1;
  }

  .check-task::before {
    content: '✓';
    margin-right: .25em;
  }

  .check-task:hover {
    background: #185d3a;
    -webkit-box-shadow: 0 .375em 2.125em -.875em rgba(0,0,0,0.57);
    -moz-box-shadow: 0 .375em 2.125em -.875em rgba(0,0,0,0.57);
    box-shadow: .375em 2.125em -.875em rgba(0,0,0,0.57);
    transition: all .4s ease 0s;
  }

  .task-message-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    z-index: 10;
    left: 0;
    top: -0;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,.5);
  }

  .task-message {
    padding: 1.25em;
    background: #fff;
    box-shadow: 1px 2px 2em rgba(0,0,0,.5);
    width: 480px;
    max-width: 92%;
  }

  .close-task-message {
    position: absolute;
    right: .5em;
    top: .5em;
    color: red;
  }

  /* When the checkbox is checked, style the answer image */
  .completed input:checked + div img {
    border: 6px solid #08723d;
    background: #08723d;
  }

  @media screen and (max-width: 767px) {
    .answer {
      width: calc(50% - 1em);
    }
  }

  @media screen and (max-width: 480px) {
    .answer {
      width: 100%;
    }
  }
</style>
