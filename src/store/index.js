import { createStore } from 'vuex'
import gigStore from './modules/gig-store'
import userStore from './modules/user-store'
import ordersStore from './modules/orders-store'
const store = createStore({
  strict: true,
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    gigStore,
    userStore,
    ordersStore,
  },
})

export default store
