import request from "@/utils/request.js"

export function getVideos(path) {
    return request({
        url: '/videos/getVideos',
        method: 'get',
        params:{path}
    })
}


