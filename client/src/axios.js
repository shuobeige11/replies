import axios from 'axios'
const instance = axios.create({
  baseURL: '/',
  timeout: 60 * 60 * 1000,
  headers: {},
  withCredentials: true, // default
  needLoading: false,  // 是否需要加载效果
})

instance.interceptors.request.use(config => {
  return config
}, err => {
  Promise.reject(err)
})

instance.interceptors.response.use(async res => {
  if (res.data.code === 0) {
    Promise.reject(res.data.result)
  } else {
    return res.data
  }
}, err => {
   Promise.reject(err)
})

export default instance