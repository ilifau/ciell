<template>
  <div>
    <div class="task" v-bind:class="{ puzzle: this.task.type === 'puzzle', completed: this.$store.state.tasksComplete.includes(this.task.id)}">
      <h1 v-if="task.title">{{ task.title }}</h1>
      <div v-if="task.description" v-html="task.description"></div>
      <draggable drag-class="drag" v-model="task.items" group="tasks" @start="drag=true" @change="onChange" @end="drag=false">
        <div class="task-item" v-bind:class="item.class" v-for="item in task.items" :key="item.id">
          <h4 v-if="item.title">{{ item.title }}</h4>
          <img v-if="item.image" :src="require('@/stories/ciell/assets/img/' + item.image)" alt="" rel="preload" />
        </div>
        <div class="clearfix"></div>
      </draggable>
    </div>
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
    this.shuffle()
  },
  watch: {
    task: function () {
      this.shuffle()
    }
  },
  methods: {
    checkTask () {
      let message = {
        title: '',
        text: ''
      }

      if (this.isComplete) {
        this.$store.commit('setTaskComplete', this.task.id)
        this.checked = true
      } else {
        this.$store.commit('removeTaskComplete', this.task.id)
        this.checked = false
      }

      if (this.$store.state.tasksComplete.includes(this.task.id)) {
        message = {
          title: 'Hooray! 😊',
          text: 'You completed this task successfully. Your progress will be saved. Have you earned any medals yet?',
          effect: 'fireworks'
        }
      } else {
        message = {
          title: 'D\'oh! 😖',
          text: 'Hm, not quite. Try again, you can try as often as you like.'
        }
      }

      this.$emit('showMessage', message)
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
    },
    shuffle () {
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
    }
  }
}
</script>

<style scoped>
  .puzzle {
    position: relative;
  }

  .task-item {
    display: block;
    position: relative;
    padding: 1em;
    margin: 0 0 1em;
    background: #eedfdd;
    color: #7e170e;
    overflow: hidden;
    height: auto;
    cursor: grab;
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

  .sortable-chosen img {
    /* background: #219ac2; */
    border: 6px solid #219ac2;
    border-radius: 2px;
  }

  .sortable-chosen {
    border-radius: 2px;
  }

  .sortable-ghost img {
    box-shadow: 0 0;
    border: 6px dashed #219ac2;
  }

  .completed .task-item {
    background: #d1e6db;
    color: #08723d;
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

  /* Puzzle */
  .puzzle .task-item {
    background: #fff;
    position: relative;
    width: calc(33.333% - .6125em);
    float: left;
    margin: 0 .6125em .6125em 0;
    height: 0;
    padding: 0 0 calc(33.333% - .6125em);
  }

  .puzzle .task-item:nth-child(3n+3){
    margin-right: 0;
  }

  @media screen and (max-width: 1023px) {
    .puzzle .task-item {
      width: calc(50% - .4em);
      margin: 0 .75em .25em 0;
      padding: 0 0 calc(50% - .4em);
    }

    .puzzle .task-item:nth-child(3n+3) {
      margin-right: .75em;
    }

    .puzzle .task-item:nth-child(2n+2) {
      margin-right: 0;
    }
  }

  @media screen and (max-width: 580px) {
    .puzzle .task-item {
      width: 100%;
      margin: 0 0 .5em 0;
      padding: 0 0 100%;
    }

    .puzzle .task-item:nth-child(3n+3) {
      margin-right: 0;
    }

    .puzzle .task-item:nth-child(2n+2) {
      margin-right: 0;
    }
  }
</style>
