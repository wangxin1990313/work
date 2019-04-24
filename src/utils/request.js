import axios from 'axios'

axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
// create an axios instance
const service = axios.create({
   baseURL: '/admin', // api 的 base_url
   //baseURL: location.hostname == 'localhost' ? '/rest' : 'http://47.93.228.120:8085', // api 的 base_url
  // timeout: 10000 // request timeout
})

// request interceptor
service.interceptors.request.use(
  config => {
    // Do something before request is sent
    // if (store.getters.token) {
      // 让每个请求携带token-- ['X-Token']为自定义key 请根据实际情况自行修改
    //   config.headers['X-Token'] = getToken()
    // }
    if(config.params && !config.params.hideLoadig) {

    }
    return config
  },
  error => {
    // Do something with request error
    console.log(error) // for debug
    // Toast({
    //   message: '服务器异常',
    //   position: 'bottom'
    // });
    Promise.reject(error)
  }
)

// response interceptor
service.interceptors.response.use(
  response => {

    return response.data;
  },
  error => {

    return Promise.reject(error)
  }
)

const request = {
  base: (config) => {
    return service.request(config)
  },
  get: (url, params) => {
    return service.get(url, {params: params});
  },
  post: (url, params) => {
    return service.post(url, params);
  }
}

export default request;
