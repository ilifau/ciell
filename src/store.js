import Vue from 'vue'
import Vuex from 'vuex'
import { version } from '../package.json'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    version: '1.0.0',
    currentStoryId: 0,
    currentChapterId: 0,
    userScore: 0,
    tasksComplete: [],
    baseFont: true,
    ratings: {
      Useful: 0,
      Fun: 0,
      Usability: 0
    }
  },
  mutations: {
    initialiseStore (state) {
      if (localStorage.getItem('ciell')) {
        const store = JSON.parse(localStorage.getItem('ciell'))

        if (store.version === version) {
          this.replaceState(Object.assign(state, store))
        } else {
          state.version = version
        }
      }
    },
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
      const index = state.tasksComplete.indexOf(id)
      if (index > -1) {
        state.tasksComplete.splice(index, 1)
      }
    },
    setRating (state, payload) {
      state.ratings[payload.prop] = payload.rating
    },
    toggleBaseFont (state, baseFont) {
      state.baseFont = baseFont
    }
  }
})

store.subscribe((mutation, state) => {
  const store = {
    version: state.version,
    currentStoryId: state.currentStoryId, // 0
    currentChapterId: state.currentChapterId, // 0
    userScore: state.userScore,
    tasksComplete: state.tasksComplete,
    ratings: state.ratings,
    baseFont: state.baseFont
  }

  localStorage.setItem('ciell', JSON.stringify(store))
})
