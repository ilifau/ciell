import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    currentStoryId: 0,
    currentChapterId: 0,
    userScore: 0,
    tasksComplete: [],
    ratings: {
      Design: 1,
      Content: 3,
      Usability: 5
    }
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
    setTaskComplete (state, id) {
      if (!state.tasksComplete.includes(id)) {
        state.tasksComplete.push(id)
      }
    },
    removeTaskComplete (state, id) {
      let index = state.tasksComplete.indexOf(id)
      if (index > -1) {
        state.tasksComplete.splice(index, 1)
      }
    },
    setRating (state, payload) {
      state.ratings[payload.prop] = payload.rating
      console.log(payload)
    }
  }
})
