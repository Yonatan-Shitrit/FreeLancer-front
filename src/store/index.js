import { createStore } from 'vuex'
import gigStore from './modules/gig-store'
import userStore from './modules/user-store'
import reviewStore from './modules/review-store'

const store = createStore({
  strict: true,
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    gigStore,
    userStore,
    reviewStore,
  },
})

export default store
