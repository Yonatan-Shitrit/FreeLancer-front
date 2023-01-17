import Axios from 'axios'

const BASE_URL = process.env.NODE_ENV === 'production' ? `${process.env.RENDER_URL}/api/` : '//localhost:3030/api/'

var axios = Axios.create({
  withCredentials: true,
})

export const httpService = {
  get(endpoint, data) {
    console.log('http service end point',endpoint, 'data:',data );
    return ajax(endpoint, 'GET', data)
  },
  post(endpoint, data) {
    return ajax(endpoint, 'POST', data)
  },
  put(endpoint, data) {
    return ajax(endpoint, 'PUT', data)
  },
  delete(endpoint, data) {
    return ajax(endpoint, 'DELETE', data)
  },
}

async function ajax(endpoint, method = 'GET', data = null) {
  try {
    const res = await axios({
      url: `${BASE_URL}${endpoint}`,
      method,
      data,
      params: method === 'GET' ? data : null,
    })
    console.log('data: ', res.data)
    return res.data
  } catch (err) {
    console.log(
      `Had Issues ${method}ing to the backend, base url + endpoint: ${BASE_URL}${endpoint}, with data: ${data}`
    )
    console.dir(err)
    if (err.response && err.response.status === 401) {
      window.location.assign('/login')
    }
    throw err
  }
}
