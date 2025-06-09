// 将路径字符串转为数组（处理空字符串）
export function pathToArray(path) {
    if (!path || path === '/') return []; // 处理空字符串或纯斜杠的情况
    return path.replace(/^\/+|\/+$/g, '').split('/');
}

// 将数组转为路径字符串
export function arrayToPath(arr) {
    if (!arr || arr.length === 0) return '/'; // 处理空数组的情况
    return '/' + arr.join('/');
}