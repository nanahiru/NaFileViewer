


const VIDEO_SUFFIX = [ "mp4", "wmv", "flv", "rm", "mp4", "3gp", "avi",  "mpg", "rmvb",  "mov", "m4v", "m3u8", "mkv", "asf", "mts" ]

const IMAGE_SUFFIX = ["jpg", "png", "jpeg", "tiff", "gif", "eps", "svg", "bmp", "webp"]

const PACKAGE_SUFFIX = ['zip', '7z', 'rar', 'tar']

const fileSuffixUtil = {
    VIDEO_SUFFIX,
    IMAGE_SUFFIX,
    PACKAGE_SUFFIX,
    isVideo(suffix) {
        if (suffix === undefined || suffix === null || suffix === '') return false
        return VIDEO_SUFFIX.indexOf(suffix.toLowerCase()) !== -1
    },
    isImage(suffix) {
        if (suffix === undefined || suffix === null || suffix === '') return false
        return IMAGE_SUFFIX.indexOf(suffix.toLowerCase()) !== -1
    },
    isPackage(suffix) {
        if (suffix === undefined || suffix === null || suffix === '') return false
        return PACKAGE_SUFFIX.indexOf(suffix.toLowerCase()) !== -1
    }

}


export {VIDEO_SUFFIX, IMAGE_SUFFIX, PACKAGE_SUFFIX, fileSuffixUtil}