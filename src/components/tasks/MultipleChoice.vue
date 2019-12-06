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
            <p class="last">Nope, that doesn't seem to be correct. Try again, you can try as often as you like.</p>
          </div>
        </div>
      </div>
      <h1 v-if="task.title">{{ task.title }}</h1>
      <div v-if="task.description" v-html="task.description"></div>
      <div class="multiple-choice">
        <div class="item" v-for="(item, questionIndex) in task.items" :key="'question-' + questionIndex">
          <h2 v-if="item.question">{{ questionIndex + 1 }}. {{ item.question }}</h2>
          <label class="answer" v-for="(answer, answerIndex) in item.answers" :key="'answer-' + answerIndex"> {{ answer.text }}
            <input v-bind:value="answer.correct ? 1 : 0" v-on:click="onChange(item, questionIndex, answerIndex)" type="checkbox">
            <span class="checkmark"></span>
          </label>
        </div>
        <div class="clearfix"></div>
      </div>
    </div>
    <a class="check-task" slot="footer" v-on:click="checkTask">Check order</a>
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
      correctAnswers: [],
      checkedAnswers: [],
      isComplete: this.$store.state.tasksComplete.includes(this.task.id),
      checked: false,
      showTaskMessage: false
    }
  },
  created () {
    this.task.items.forEach((question, questionIndex) => {
      question.answers.forEach((answer, answerIndex) => {
        if (answer.correct) {
          this.correctAnswers.push([questionIndex, answerIndex])
        }
      })
    })
  },
  methods: {
    checkTask () {
      if (this.checkedAnswers.length !== this.correctAnswers.length) {
        alert('not quite...')
      } else {
        alert('well done!')
      }
    },
    onChange (item, questionIndex, answerIndex) {
      if (!this.checkedAnswersIncludes(questionIndex, answerIndex)) {
        this.checkedAnswers.push([questionIndex, answerIndex])
      }
    },
    checkedAnswersIncludes (questionIndex, answerIndex) {
      if (this.checkedAnswers.length === 0) {
        return false
      }

      let checkedAnswersIncludes = false

      this.checkedAnswers.forEach((answer, index) => {
        if (answer[0] === questionIndex && answer[1] === answerIndex) {
          checkedAnswersIncludes = true
          this.checkedAnswers.splice(index, 1)
        }
      })

      return checkedAnswersIncludes
    },
    hideTaskMessage () {
      this.showTaskMessage = false
    }
  }
}
</script>

<style scoped>
  .item {
    position: relative;
    padding-bottom: 1em;
  }

  .item h2 {
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

  .check-task:::before {
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
    z-index: 7;
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
</style>
