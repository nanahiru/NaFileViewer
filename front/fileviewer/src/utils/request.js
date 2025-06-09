import axios from 'axios'

const pendingRequests = new Map()
const instance = axios.create({
    baseURL: import.meta.env.VITE_BASE_URL,
    timeout: 1000 * 20,
});


instance.interceptors.request.use(function (config) {
    const requestKey = `${config.method}-${config.url}`
   /* if (pendingRequests.has(requestKey)) {
        const controller = pendingRequests.get(requestKey)
        controller.abort('取消重复请求')
        pendingRequests.delete(requestKey)
    }*/

    const controller = new AbortController()
    config.signal = controller.signal
    pendingRequests.set(requestKey, controller)

    // config.headers['X-Token'] = '3320022'
    return config;
}, function (error) {

    return Promise.reject(error);
});


instance.interceptors.response.use(function (response) {
    const requestKey = `${response.config.method}-${response.config.url}`
    pendingRequests.delete(requestKey)
    if (response.data.code !== 200) {
        return Promise.reject(response.data);
    }
    return Promise.resolve(response.data.data);
}, function (error) {
    if (error.name === 'AbortError') {
        console.log('请求已取消:', error.message)
        return Promise.reject(error)
    }
    console.log(error)
    return Promise.reject(error);
});



// 取消所有pending的请求
export function cancelAllRequests() {
    pendingRequests.forEach((controller, key) => {
        controller.abort('路由跳转取消请求')
        pendingRequests.delete(key)
    })
}

export default instance