import { gigService } from '@/services/gig-service.js'

export default {
  state: {
    gigs: [],
    filterBy: { title: '', price: 0, labels: [], sortBy: '', category: ''},
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
      console.log('gigs are set in store');
    },
    saveGig(state, { gig }) {
      const idx = state.gigs.findIndex((g) => g._id === gig._id)
      if (idx !== -1) state.gigs.splice(idx, 1, gig)
      else state.gigs.push(gig)
      console.log('I saved');
    },
    removeGig(state, { gigId }) {
      const idx = state.gigs.findIndex((g) => g._id === gigId)
      state.gigs.splice(idx, 1)
    },
    setFilter(state, { filterBy }) {
      // console.log('I am in the store', filterBy);      
      state.filterBy = filterBy
    },
    setSort(state, { sortBy }) {
      state.sortBy = sortBy
    },
  },
  actions: {
    async loadGigs({ commit, state }) {
      const gigs = await gigService.query(state.filterBy)
      commit({ type: 'setGigs', gigs })
      console.log('store commit gigs');      
    
    },
    async saveGig({ commit }, { gig }) {
      const savedGig = await gigService.save(gig)
      commit({ type: 'saveGig', gig: savedGig })
      return savedGig
    },
    async removeGig({ commit }, { gigId }) {
      await gigService.remove(gigId)
        commit({ type: 'removeGig', gigId })
      
    },
    setFilter({ dispatch, commit }, { filterBy }) {
      // console.log('I am in the store', filterBy);
      commit({ type: 'setFilter', filterBy })
      dispatch({ type: 'loadGigs' })
    },
  },
}
