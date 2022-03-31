import { httpService } from './http-service.js'
import { storageService } from './async-storage-service'
import { utilService } from './util-service.js'
const ENDPOINT = 'auth'

export const userService = {
  login,
  signup,
  logout,
  getGuestUser,  
  query
}
async function query() {
  return await httpService.get('user' + '/')
  // return axios.get(BASE_URL, { params: { filterBy } }).then((res) => res.data)  
  // return await storageService.query(KEY, filterBy)
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



