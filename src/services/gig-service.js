// import axios from 'axios'
import { utilService } from './util-service'
//import { httpService } from './http-service'
import { storageService } from './async-storage-service'

const KEY = 'gigs_db'
const labels = ['On wheels', 'Box game', 'Art', 'Baby', 'Doll', 'Puzzle', 'Outdoor']
const ENDPOINT = 'gig'
// const BASE_URL =
//   process.env.NODE_ENV !== 'development' ? '/api/gig' : '//localhost:3030/api/gig/'

export const gigService = {
  query,
  getById,
  remove,
  save,
  getEmptyGig,
  // getCatigories,
}

// const gGigs = _createGigs()

async function query(filterBy = {}) {
  // return await httpService.get(ENDPOINT, filterBy)
  // return axios.get(BASE_URL, { params: { filterBy } }).then((res) => res.data)
  return storageService.query(KEY)
}

async function getById(id) {
  // return await httpService.get(`${ENDPOINT}/${id}`)
  // return axios.get(BASE_URL + id).then((res) => res.data)
  return storageService.getById(KEY, id)
}

async function remove(id) {
  // return await httpService.delete(`${ENDPOINT}/${id}`)
  // return axios.delete(BASE_URL + id).then((res) => res.data)
  return storageService.remove(KEY, id)
}

async function save(gig) {
  // return gig._id
    // ? await httpService.put(`${ENDPOINT}/${gig._id}`, gig)
    // : await httpService.post(ENDPOINT, gig)
  return gig._id ? storageService.put(KEY, gig) : storageService.post(KEY, gig)
}

function getEmptyGig() { //TODO
  return Promise.resolve({
    title: '',
    image: [],
    details: '',
    price: 0,
    daysToMake: 0,
    revision: 1,
    description: '',
    miniUser: {
      _id: '',
      fullName: '',
      imgUrl: '',
    },
    reviews: [],
    category:'',
    tags: [],
  })
}

// function getCatigories() { //TODO
//   return labels
// }

// function _createGigs() {
//   let gigs = utilService.loadFromStorage(KEY)
//   if (!gigs || !gigs.length) {
//     gigs = [
//       _createGig('Doll', 150, ['On wheels', 'Doll']),
//       _createGig('Truck', 80, ['Outdoor', 'Baby']),
//       _createGig('Cards', 150, ['Puzzle', 'Art']),
//     ]
//     utilService.saveToStorage(KEY, gigs)
//     // 'On wheels', 'Box game', 'Art', 'Baby', 'Doll', 'Puzzle', 'Outdoor'
//   }
//   return gigs
// }

// function _createGig(name, price, labels, reviews) {
//   return {
//     _id: utilService.makeId(),
//     name,
//     price,
//     labels,
//     inStock: true,
//     createdAt: new Date(),
//     reviews: [
//       { _id: utilService.makeId(), txt: utilService.getLoremIpsum(5), createdAt: new Date() },
//       { _id: utilService.makeId(), txt: utilService.getLoremIpsum(5), createdAt: new Date() },
//       { _id: utilService.makeId(), txt: utilService.getLoremIpsum(5), createdAt: new Date() },
//     ],
//   }
// }
