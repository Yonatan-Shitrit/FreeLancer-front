import { utilService } from './util-service'
import { httpService } from './http-service'

const KEY = 'orders_db'
const labels = ['On wheels', 'Box game', 'Art', 'Baby', 'Doll', 'Puzzle', 'Outdoor']
const ENDPOINT = 'order'
// const BASE_URL =
//   process.env.NODE_ENV !== 'development' ? '/api/gig' : '//localhost:3030/api/gig/'

export const orderService = {
  query,
  getById,
  remove,
  save,
  getEmptyOrder,
}

async function query(filterBy) {
  return await httpService.get(ENDPOINT, filterBy)  
}

async function getById(id) {
  return await httpService.get(`${ENDPOINT}/${id}`)  
}

async function remove(id) {
  return await httpService.delete(`${ENDPOINT}/${id}`)  
}

async function save(order) {
  return order._id
  ? await httpService.put(`${ENDPOINT}/${order._id}`, order)
  : await httpService.post(ENDPOINT, order)
}



function getEmptyOrder(){
  const order = {
    gigId: '',
    status: 'pending',
    createdAt: Date.now(),
    updatedAt: '',
    sellerId: '',
    buyerId: ''
  }
  return order
}