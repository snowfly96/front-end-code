import axios from 'axios'
import { baseUrl } from '../configs/urls'

const instance = axios.create({
    baseURL: baseUrl,
    timeout: 5000
})

instance.interceptors.request.use((req) => {
    const token = localStorage.getItem('key')
    if (token) {
        req.headers.token = token
    }
})

instance.interceptors.response.use((res) => {
    try {
        return res.data
    } catch (error) {
        console.error('response error: ', error)
    }
})

export default instance