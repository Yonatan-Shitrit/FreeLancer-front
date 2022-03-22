import { gigService } from '@/services/gig-service.js'

export default {
  state: {
    gigs: [],
    filterBy: { name: '', inStock: '', labels: [], sortBy: '' },
    // labels: gigService.getlabels(),
  },
  getters: {
    gigs({ gigs }) {
      return gigs
    },
    gigsToShow({ gigs, filterBy }) {
      const copyGigs = JSON.parse(JSON.stringify(gigs))
      return copyGigs
    },
    labels({ labels }) {
      return labels
    },
  },
  mutations: {
    setGigs(state, { gigs }) {
      state.gigs = gigs
    },
    saveGig(state, { gig }) {
      const idx = state.gigs.findIndex((t) => t._id === gig._id)
      if (idx !== -1) state.gigs.splice(idx, 1, gig)
      else state.gigs.push(gig)
    },
    removeGig(state, { gigId }) {
      const idx = state.gigs.findIndex((t) => t._id === gigId)
      state.gigs.splice(idx, 1)
    },
    setFilter(state, { filterBy }) {
      state.filterBy = filterBy
    },
    setSort(state, { sortBy }) {
      state.sortBy = sortBy
    },
  },
  actions: {
    loadGigs({ commit, state }) {
      gigService.query(state.filterBy).then((gigs) => {
        commit({ type: 'setGigs', gigs })
      })
    },
    saveGig({ commit }, { gig }) {
      gigService.save(gig).then((savedGig) => {
        commit({ type: 'saveGig', gig: savedGig })
      })
    },
    removeGig({ commit }, { gigId }) {
      gigService.remove(gigId).then(() => {
        commit({ type: 'removeGig', gigId })
      })
    },
    setFilter({ dispatch, commit }, { filterBy }) {
      commit({ type: 'setFilter', filterBy })
      dispatch({ type: 'loadGigs' })
    },
  },
}
