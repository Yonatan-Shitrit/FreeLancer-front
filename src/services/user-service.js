import { httpService } from './http-service.js'
import { storageService } from './async-storage-service'
import { utilService } from './util-service.js'
const ENDPOINT = 'auth'

export const userService = {
  login,
  signup,
  logout,
  getGuestUser,
  getEmptyOrder,
  saveOrder
}

async function login(cred) {
  return await httpService.post(ENDPOINT + '/login', cred)
  // return await storageService.post(ENDPOINT, cred)
}

async function signup(cred) {
  console.log('"Hi userI am in the user service signup',cred);
  return await httpService.post(ENDPOINT + '/signup', cred)
  // return await storageService.post(ENDPOINT, cred)
}

async function logout() {
  return await httpService.post(ENDPOINT + '/logout')
  // return await storageService.post(ENDPOINT)
}

function getGuestUser() {
  return {
    fullname: 'Guest User',
    username: 'guest',
    password: 'guest',
    imgUrl: '',
    gigs:[],
    orders:[],
    sales:[],
    isAdmin: false,
  }
}

function saveOrder(order){

}

function getEmptyOrder(){
  const order = {
    _id: utilService.makeId(15),
    gigId: '',
    status: 'pending',
    createdAt: Date.now(),
    updatedAt: '',
    sellerId: '',
    buyerId: ''
  }
  return order
}