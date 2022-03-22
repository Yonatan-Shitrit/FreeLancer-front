import { userService } from '../../services/user-service'
import { utilService } from '../../services/util-service'

export default {
  state: {
    loggedinUser: utilService.loadFromSessionStorage('user') || null,
  },
  getters: {
    user(state) {
      return state.loggedinUser
    },
  },
  mutations: {
    setUser(state, { user }) {
      state.loggedinUser = user
    },
  },
  actions: {
    async login({ commit }, { cred }) {
      try {
        const user = await userService.login(cred)
        commit({ type: 'setUser', user })
        utilService.saveToSessionStorage('user', user)
      } catch (err) {
        console.log(err)
      }
    },
    async signup({ commit }, { cred }) {
      try {
        const user = await userService.signup(cred)
        commit({ type: 'setUser', user })
        utilService.saveToSessionStorage('user', user)
      } catch (err) {
        console.log(err)
      }
    },
    async logout({ commit }) {
      try {
        await userService.logout()
        commit({ type: 'setUser', user: null })
        sessionStorage.removeItem('user')
      } catch (err) {
        console.log(err)
      }
    },
  },
}
