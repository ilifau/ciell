<template>
  <div class="task" v-bind:class="{ isDone: taskIsDone(task.id) }">
    <h1 v-if="task.title">{{ task.title }}</h1>
    <p v-if="task.description">{{ task.description }}</p>
    <draggable v-model="task.items" group="tasks" @start="drag=true" @change="onChange" @end="drag=false">
      <div class="task-item" v-for="item in task.items" :key="item.id">
        {{ item.title }}
        <img v-if="item.image" :src="require('@/stories/ciell/assets/img/' + item.image)" alt="" />
      </div>
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
  created () {
    // Shuffle sortable items
    if (this.$store.isDone) {
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
      if (this.taskIsDone()) {
        alert('Superb!')
      } else {
        alert('Not quite...')
      }
    },
    taskIsDone () {
      return this.$store.state.tasksDone.includes(this.task.id)
    },
    onChange () {
      let items = this.task.items
      for (let i = 0; i < items.length - 1; i++) {
        let current = items[i]
        let next = items[i + 1]
        if (current.order < next.order) {
          this.$store.commit('setTaskDone', this.task.id)
        } else {
          this.$store.commit('removeTaskDone', this.task.id)
          break
        }
      }
    }
  }
}
</script>

<style scoped>
  .task-item {
    display: block;
    background: #ddd;
    padding: .5em 1em .5em .5em;
    margin: 0 0 .25em;
    background: #eedfdd;
    color: #7e170e;
  }

  .isDone .task-item {
    background: #d1e6db;
    color: #08723d;
  }

  .task-item::before {
    content: "\2b0d";
    display: inline-block;
    margin-right: .5em;
  }

  .task-item img {
    margin-top: .25em;
  }

  .check-task {
    color: #fff !important;
    text-decoration: none;
    background: #08723d;
    padding: .6125em .75em;
    border-radius: .25em;
    display: inline-block;
    border: 0;
    transition: all .4s ease 0s;
    font-size: 1em;
    margin-top: .5em;
    cursor: pointer;
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
</style>
