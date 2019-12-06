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
      <div class="multiple-choice">
        <div class="task-item" v-for="(item, questionIndex) in task.items" :key="'question-' + questionIndex">
          <h2 v-if="item.question">{{ questionIndex + 1 }}. {{ item.question }}</h2>
          <label class="answer" v-for="(answer, answerIndex) in item.answers" :key="'answer-' + answerIndex"> {{ answer.text }}
            <input v-on:click="onChange()" v-model="selectedAnswers[questionIndex][answerIndex]" v-bind:value="answer.correct" type="checkbox" :checked="answer.correct" />
            <span class="checkmark"></span>
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
    onChange () {
      this.checked = false
      this.isComplete = false
      this.$store.commit('removeTaskComplete', this.task.id)

      this.isComplete = this.incorrect === 0
    },
    checkTask () {
      // TODO: Compare selected answers to correct answers
      let that = this
      let correct = 0
      let incorrect = 0

      this.selectedAnswers.forEach(function (question, questionIndex) {
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
  .answer .checkmark::after {
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
    left: 0%;
    top: 0%;
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

  /* When the checkbox is checked, add a blue background */
  .completed .answer input[value="true"]:checked ~ .checkmark {
    background-color: #08723d;
  }
</style>
