import axios from 'axios'

let token = sessionStorage.getItem('token')

const Api = axios.create({
  baseURL: 'http://localhost:5000/api',
  headers: {'Authorization': `Bearer ${token}`}
})

export default Api