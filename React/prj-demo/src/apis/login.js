import axios from "../utils/request"
import md5 from 'md5'

export const checkLogin = async (params) => {
    params.password = md5(md5(params.password).split('').reverse().join())
    const res = await axios.get('/login', params)
    return res
}