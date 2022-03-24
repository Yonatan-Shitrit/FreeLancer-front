// import { httpService } from './http-service.js'
import { storageService } from './async-storage-service'
const ENDPOINT = 'auth'

export const userService = {
  login,
  signup,
  logout,
  getGuestUser,
}

async function login(cred) {
  // return await httpService.post(ENDPOINT + '/login', cred)
  return await storageService.post(ENDPOINT, cred)
}

async function signup(cred) {
  console.log('signup',cred);
  // return await httpService.post(ENDPOINT + '/signup', cred)
  return await storageService.post(ENDPOINT, cred)
}

async function logout() {
  // return await httpService.post(ENDPOINT + '/logout')
  return await storageService.post(ENDPOINT)
}

function getGuestUser() {
  return {
    fullname: 'Guest User',
    username: 'guest',
    password: 'guest',
    isAdmin: false,
  }
}
