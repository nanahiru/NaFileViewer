import request from "@/utils/request.js"

export function getFiles(path) {
    return request({
        url: '/files/list',
        method: 'get',
        params:{path}
    })
}