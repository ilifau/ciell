<template>
  <div>
    <div class="task" v-bind:class="{ completed: this.$store.state.tasksComplete.includes(this.task.id)}">
      <h1 v-if="task.title">{{ task.title }}</h1>
      <div v-if="task.description" v-html="task.description"></div>
      <div class="multiple-choice">
        <div class="task-item" v-for="(item, questionIndex) in task.items" :key="'question-' + questionIndex">
          <h2 v-if="item.question">{{ questionIndex + 1 }}. {{ item.question }}</h2>
          <label class="answer" v-bind:class="{ radio: item.singleChoice }" v-for="(answer, answerIndex) in item.answers" :key="'answer-' + answerIndex">
            <input v-if="item.singleChoice" v-on:click="onChange(questionIndex)" v-model="selectedAnswers[questionIndex][answerIndex]" v-bind:value="answer.correct === true ? true : answerIndex" type="radio" :name="'radio-' + (questionIndex)">
            <input v-else v-on:click="onChange()" v-model="selectedAnswers[questionIndex][answerIndex]" v-bind:value="answer.correct" type="checkbox">
            <span class="checkmark"></span>
            {{ answer.text }}
          </label>
        </div>
        <div class="clearfix"></div>
      </div>
    </div>
    <a class="check-task" slot="footer" v-on:click="checkTask">Check answers </a>
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
      let message = {
        title: '',
        text: ''
      }

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

      if (this.$store.state.tasksComplete.includes(this.task.id)) {
        message = {
          title: 'Hooray! ⭐',
          text: 'You completed this task successfully and earned yourself a star. Your progress will be saved.',
          effect: 'fireworks'
        }
      } else {
        message = {
          title: 'D\'oh! 😖',
          text: 'Hm, not quite (<strong>' + this.correct + ' correct</strong>, <strong>' + this.incorrect + ' incorrect</strong>). Try again, you can try as often as you like.'
        }
      }

      this.$emit('showMessage', message)
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

  .answer {
    display: block;
    position: relative;
    padding-left: 35px;
    margin-bottom: 12px;
    cursor: pointer;
    font-size: 22px;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }

  /* Hide the browser's default checkbox */
  .container input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
  }

  /* Create a custom checkbox */
  .checkmark {
    position: absolute;
    top: 4px;
    left: 0;
    height: 25px;
    width: 25px;
    transition: background-color .2s linear;
    background-color: #eee;
  }

  /* On mouse-over, add a grey background color */
  .answer:hover input ~ .checkmark {
    background-color: #ccc;
  }

  /* When the checkbox is checked, add a blue background */
  .answer input:checked ~ .checkmark {
    background-color: #219ac2;
  }

  /* Create the checkmark/indicator (hidden when not checked) */
  .checkmark::after {
    content: "";
    position: absolute;
    display: none;
  }

  /* Show the checkmark when checked */
  .answer input:checked ~ .checkmark::after {
    display: block;
  }

  /* Style the checkmark/indicator */
  .answer:not(.radio) .checkmark::after {
    left: 9px;
    top: 5px;
    width: 5px;
    height: 10px;
    border: solid white;
    border-width: 0 3px 3px 0;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
  }

  .answer.radio .checkmark {
    border-radius: 50%;
  }

   .answer.radio input:checked ~ .checkmark::after {
    width: 9px;
    height: 9px;
    border: 0 0;
    border-width: 0;
    position: absolute;
    left: 8px;
    top: 8px;
    background: #fff;
    z-index: 1;
    border-radius: 50%;
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

  /* When the checkbox is checked, add a blue background */
  .completed .answer input[value="true"]:checked ~ .checkmark {
    background-color: #08723d;
  }
</style>
