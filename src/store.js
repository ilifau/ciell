import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    currentStoryId: 0,
    currentChapterId: 0,
    userScore: 0,
    tasksDone: []
  },
  mutations: {
    setCurrentStoryId (state, id) {
      state.currentStoryId = id
    },
    setCurrentChapterId (state, id) {
      state.currentChapterId = id
    },
    setUserScore (state, score) {
      state.userScore = score

      if (state.userScore > 1000) {
        state.userScore = 1000
      }
    },
    setTaskDone (state, id) {
      if (!state.tasksDone.includes(id)) {
        state.tasksDone.push(id)
      }
    },
    removeTaskDone (state, id) {
      let index = state.tasksDone.indexOf(id)
      if (index > -1) {
        state.tasksDone.splice(index, 1)
      }
    }
  },
  getters: {
    currentStoryId: state => state.currentStoryId,
    currentChapterId: state => state.currentChapterId,
    userScore: state => state.userScore,
    tasksDone: state => state.tasksDone
  }
})
