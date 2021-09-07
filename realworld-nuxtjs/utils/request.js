// 基于axios封装的请求模块
import axios from 'axios'
const request = axios.create({
    // baseURL: 'https://conduit.productionready.io'
    baseURL: 'http://realworld.api.fed.lagounews.com/'
})

export default request