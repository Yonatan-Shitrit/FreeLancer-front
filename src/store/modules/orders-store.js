import { orderService } from '@/services/order-service.js'
import { socketService } from '../../services/socket.service'

export default {
  state: {
    orders: [],
    filterBy: '',//{ title: '', price: 0, labels: [], sortBy: '', category: ''},
    newOrders : []  
  },
  getters: {
    orders({ orders }) {
      return orders
    },
    newOrders({newOrders}){      
      return newOrders
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
      else state.orders.unshift(order)
    },
    saveNewOrder(state, { order }){      
      console.log('save new order ', order);
      const idx = state.newOrders.findIndex((o) => o._id === order._id)
      if (idx !== -1) state.newOrders.splice(idx, 1, order)
      else state.newOrders.push(order)
      console.log('I saved new order');
    },
    clearNotifications(state){
      state.newOrders=[]
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
    async loadOrders({ commit, dispatch, state }) {
      try{
      const orders = await orderService.query(state.filterBy)
      commit({ type: 'setOrders', orders })
      socketService.off('order update')
      console.log('socket off');
      socketService.on('order update', (order) => {
        console.log('order update from socket', order);
        commit({ type: 'saveNewOrder', order})
        dispatch({ type: 'loadOrders'})
      })
      console.log('store commit orders'); 
      }
      catch(err){
        console.error('Cannot load orders', err);
      }
    },
    async saveOrder({ commit }, { order, notification }) {
      try{
      const savedOrder = await orderService.save(order)
      socketService.emit('order change', order)
      new Notification( 'FreeLancer Messages', {body: notification})
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
