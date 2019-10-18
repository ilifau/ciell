<template>
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
    <p v-if="task.description">{{ task.description }}</p>
    <draggable v-model="task.items" group="tasks" @start="drag=true" @change="onChange" @end="drag=false">
      <div class="task-item" v-bind:class="item.class" v-for="item in task.items" :key="item.id">
        <h4>{{ item.title }}</h4>
        <img v-if="item.image" :src="require('@/stories/ciell/assets/img/' + item.image)" alt="" />
      </div>
      <div class="clearfix"></div>
    </draggable>
    <a class="check-task" slot="footer" @click="checkTask">Check order</a>
  </div>
</template>

<script>
import draggable from 'vuedraggable'

export default {
  components: {
    draggable
  },
  props: [
    'story',
    'task'
  ],
  data () {
    return {
      isComplete: this.$store.state.tasksComplete.includes(this.task.id),
      checked: false,
      showTaskMessage: false
    }
  },
  created () {
    // Shuffle task items if task has not been completed
    if (this.isComplete) {
      return
    }

    let items = this.task.items
    for (var i = items.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1))
      var temp = items[i]
      items[i] = items[j]
      items[j] = temp
    }

    this.task.items = items
  },
  methods: {
    checkTask () {
      if (this.isComplete) {
        this.$store.commit('setTaskComplete', this.task.id)
        this.checked = true
      } else {
        this.$store.commit('removeTaskComplete', this.task.id)
        this.checked = false
      }
      this.showTaskMessage = true
    },
    onChange () {
      this.checked = false
      this.isComplete = false
      this.$store.commit('removeTaskComplete', this.task.id)

      let items = this.task.items
      for (let i = 0; i < items.length - 1; i++) {
        let current = items[i]
        let next = items[i + 1]
        if (current.order < next.order) {
          this.isComplete = true
        } else {
          this.isComplete = false
          this.checked = false
          break
        }
      }
    },
    hideTaskMessage () {
      this.showTaskMessage = false
    }
  }
}
</script>

<style scoped>
  .task-item {
    display: block;
    position: relative;
    overflow: hidden;
    background: #ddd;
    height: 0;
    padding: .6125em .75em 6em;
    margin: 0 0 1em;
    background: #eedfdd;
    color: #7e170e;
  }

  .task-item.introduction {
    background: #c2f4f1;
    color: #212627;
  }

  .task-item.paragraph {
    background: #fff898;
    color: #21211c;
  }

  .task-item.conclusion {
    background: #d5f1a4;
    color: #131511;
  }

  .task-item h4 {
    margin-top: 0;
  }

  .completed .task-item {
    background: #d1e6db;
    color: #08723d;
  }

  .task-item img {
    margin-top: .25em;
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
    margin-top: .5em;
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
    z-index: 7;
    left: -20%;
    top: -20%;
    width: 140%;
    height: 140%;
    background: rgba(0,0,0,.5);
  }

  .task-message {
    padding: 1.25em;
    background: #fff;
    box-shadow: 1px 2px 2em rgba(0,0,0,.5);
    width: 480px;
    max-width: 96%;
  }

  .close-task-message {
    position: absolute;
    right: .5em;
    top: .5em;
    color: red;
  }
</style>
