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
  try{
  return await httpService.get(ENDPOINT, filterBy)  
  }
  catch(err){
    console.error('Cannot query orders', err);
  }
}

async function getById(id) {
  try{
  return await httpService.get(`${ENDPOINT}/${id}`)  
  }
  catch(err){
    console.error('Cannot get order by id', err);
  }
}

async function remove(id) {
  try{
  return await httpService.delete(`${ENDPOINT}/${id}`)  
  }
  catch(err){
    console.error('Cannot remove gig', err);
  }
}

async function save(order) {
  try{
  return order._id
  ? await httpService.put(`${ENDPOINT}/${order._id}`, order)
  : await httpService.post(ENDPOINT, order)
  }
  catch(err){
    console.error('Cannot save order from the orderService', err);
  }
}



function getEmptyOrder(){
  const order = {
    gigId: '',
    status: 'pending',
    createdAt: Date.now(),
    updatedAt: '',
    sellerId: '',
    buyerId: '',
    buyerName:''
  }
  return order
}