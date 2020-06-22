<template>
  <div v-bind:class="{ completed: this.$store.state.tasksComplete.includes(this.task.id)}">
    <div class="task">
      <h1 v-if="task.title">{{ task.title }}</h1>
      <div v-if="task.description" v-html="task.description"></div>
      <div class="image-choice">
        <div class="task-item" v-for="(item, questionIndex) in task.items" :key="'question-' + questionIndex">
          <h2 class="question-title" v-if="item.question">{{ questionIndex + 1 }}. {{ item.question }}</h2>
          <div v-if="item.images" class="task-images">
            <div v-for="(image, imageIndex) in item.images" :key="'image-' + imageIndex">
              <img class="task-image" :src="require('@/stories/ciell/assets/img/' + image)" alt="" />
            </div>
          </div>
          <h2 class="answer-title" v-if="item.answerTitle">{{ item.answerTitle }}</h2>
          <label class="answer" v-for="(answer, answerIndex) in item.answers" :key="'answer-' + answerIndex">
            <input v-if="item.singleChoice" v-on:click="onChange(questionIndex)" v-model="selectedAnswers[questionIndex][answerIndex]" v-bind:value="answer.correct === true ? true : answerIndex" type="radio" :name="'radio-' + (questionIndex)">
            <input v-else v-on:click="onChange()" v-model="selectedAnswers[questionIndex][answerIndex]" v-bind:value="answer.correct" type="checkbox">
            <div>
              <img :src="require('@/stories/ciell/assets/img/' + answer.image)" alt="answer.text" class="answer-image" rel="preload" />
              <!-- <p>{{ answer.text }}</p> -->
            </div>
          </label>
        </div>
        <div class="clearfix"></div>
      </div>
    </div>
    <a class="check-task" slot="footer" v-on:click="checkTask">Check your answer<span v-if="task.items.length > 1">s</span></a>
  </div>
</template>

<script>
export default {
  props: [
    'story',
    'task'
  ],
  watch: {
    task: {
      handler: function (newTask, oldTask) {
        this.selectedAnswers = []
        this.isComplete = this.$store.state.tasksComplete.includes(newTask.id)
        this.createAnswers(newTask)
        this.checkTask(newTask, false, false)
      }
    }
  },
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
    this.createAnswers(this.task)
  },
  methods: {
    createAnswers (task) {
      if (!task) {
        task = this.task
      }

      let that = this
      task.items.forEach(function (question, index) {
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
    checkTask (task, commit = true, feedback = true) {
      if (!task) {
        task = this.task
      }

      let that = this
      let correct = 0
      let incorrect = 0
      let message = {
        title: '',
        text: ''
      }

      this.selectedAnswers.forEach(function (question, questionIndex) {
        question.forEach(function (answer, answerIndex) {
          if (answer) { // checked items
            if (task.items[questionIndex].answers[answerIndex].correct) {
              correct++
            } else {
              incorrect++
            }
          } else { // unchecked items
            if (typeof task.items[questionIndex].answers[answerIndex].correct === 'undefined') {
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
        if (commit) {
          this.$store.commit('setTaskComplete', task.id)
        }

        this.checked = true
      } else {
        if (commit) {
          this.$store.commit('removeTaskComplete', task.id)
        }

        this.checked = false
      }

      if (feedback) {
        if (this.$store.state.tasksComplete.includes(task.id)) {
          message = {
            title: 'Hooray! ⭐',
            text: 'You completed this task successfully and earned yourself a star. Your progress will be saved.',
            effect: 'fireworks'
          }
          this.playSound('success')
        } else {
          message = {
            title: 'D\'oh! 😖',
            text: 'Hm, that doesn\'t seem to be quite right yet. Try again, you can try as often as you like.'
          }
          this.playSound('fail')
        }

        this.$emit('showMessage', message)
      }
    }
  }
}
</script>

<style scoped>
  .task-item {
    position: relative;
  }

  .task-item::after {
    content: '';
    clear: both;
    display: block;
  }

  .task-item h2 {
    margin-bottom: 1em;
  }

  .task-images {
    display: block;
    margin-bottom: 1em;
    padding-bottom: 1em;
  }

  .task-image {
    width: 11.25em;
    margin: 0 0 0 .5em;
    max-width: calc(50% - 1.75em);
  }

  label > div {
    line-height: 0;
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
    transition: box-shadow .2s linear;
    box-shadow: none;
  }

  .answer:hover {
    box-shadow: 1px 2px 1em rgba(0,0,0,.2);
  }

  .question-title,
  .answer-title {
    clear: both;
    font-size: 1.25em;
  }

  h2.answer-title {
    font-size: 1.125em;
    margin-bottom: .75em;
  }

  /* On mouse-over, add a grey background color */
  .answer img {
    transition: all .1s linear;
    border: 0 solid #fff;
    background-color: #fff;
  }

  /* When the checkbox is checked, add a blue background */
  .answer input:checked + div img {
    border: 8px solid #219ac2;
    background-color: #219ac2;
    border-radius: 4px;
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
    border: 0 solid #fff;
  }

  .check-task {
    color: #fff !important;
    text-decoration: none;
    text-align: center;
    background: #219ac2;
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

  .check-task:hover {
    background: #1d8aaf;
    -webkit-box-shadow: 0 .375em 2.125em -.875em rgba(0,0,0,0.57);
    -moz-box-shadow: 0 .375em 2.125em -.875em rgba(0,0,0,0.57);
    box-shadow: .375em 2.125em -.875em rgba(0,0,0,0.57);
    transition: all .4s ease 0s;
  }

  .completed .check-task {
    background: #08723d;
  }

  .completed .check-task:hover {
    background: #185d3a;
  }

  .completed .check-task::before {
    content: '✓';
    margin-right: .25em;
  }

  .completed input:checked + div img {
    border: 8px solid #08723d;
    background: #08723d;
  }

  @media screen and (max-width: 767px) {
    .answer {
      width: calc(50% - 1em);
    }
  }
</style>
