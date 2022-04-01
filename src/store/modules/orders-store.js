import { orderService } from '@/services/order-service.js'

export default {
  state: {
    orders: [],
    filterBy: ''//{ title: '', price: 0, labels: [], sortBy: '', category: ''},    
  },
  getters: {
    orders({ orders }) {
      return orders
    },
    ordersToShow({ orders, filterBy }) {
      const copyOrders = JSON.parse(JSON.stringify(orders))
      return copyOrders
    },    
  },
  mutations: {
    setOrders(state, { orders }) {
      state.orders = orders
      console.log('orders are set in store');
    },
    saveOrder(state, { order }) {
      const idx = state.orders.findIndex((o) => o._id === order._id)
      if (idx !== -1) state.orders.splice(idx, 1, order)
      else state.orders.push(order)
      console.log('I saved');
    },
    removeGig(state, { orderId }) {
      const idx = state.orders.findIndex((o) => o._id === orderId)
      state.orders.splice(idx, 1)
    },
    setFilter(state, { filterBy }) {
      state.filterBy = filterBy
    },
    setSort(state, { sortBy }) {
      state.sortBy = sortBy
    },
  },
  actions: {
    async loadOrders({ commit, state }) {
      try{
      const orders = await orderService.query(state.filterBy)
      commit({ type: 'setOrders', orders })
      console.log('store commit orders'); 
      }
      catch(err){
        console.error('Cannot load orders', err);
      }
    },
    async saveOrder({ commit }, { order }) {
      try{
      console.log('hi i am in the save actions: ', order);
      const savedOrder = await orderService.save(order)
      commit({ type: 'saveOrder', order: savedOrder })
      return savedOrder
      }
      catch(err){
        console.error('Cannot save order', err);
      }
    },
    async removeOrder({ commit }, { orderId }) {
      try{
      await orderService.remove(orderId)
        commit({ type: 'removeOrder', orderId })
      }
      catch(err){
        console.error('Cannot remove order', err);
      }
    },
    setOrderFilter({ dispatch, commit }, { filterBy }) {
      commit({ type: 'setFilter', filterBy })
      dispatch({ type: 'loadOrders' })
    },
  },
}
