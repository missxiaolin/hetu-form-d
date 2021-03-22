/**
 * @desc 深拷贝，支持常见类型
 * @param {Any} item
 */
export function deepClone(item) {
    let copy
    if (item === null || typeof item !== 'object') {
        return item
    }
    // array
    if (item instanceof Array) {
        copy = []
        let len = item.length
        for (let i = 0; i < len; i++) {
            // 循环深克隆
            copy[i] = deepClone(item[i])
        }
        return copy
    }
    // object
    if (item instanceof Object) {
        copy = {}
        for (let val in item) {
            if (item.hasOwnProperty(val)) {
                copy[val] = deepClone(item[val])
            }
        }
        return copy
    }
    // date
    if (item instanceof Date) {
        copy = new Date()
        copy.setTime(item.getTime())
        return copy
    }

    throw new Error("Unable to copy item! Its type isn't supported.")
}

/**
 * 获取随机id
 */
export function guid() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        let r = Math.random() * 16 | 0
        let v = c === 'x' ? r : (r & 0x3 | 0x8)
        return v.toString(16)
    })
}
/**
 * 构建hash
 */
export function createHash(hashLength) {
    if (!hashLength || typeof (Number(hashLength)) !== 'number') {
        hashLength = 18
    }
    var ar = '1,2,3,4,5,6,7,8,9,0,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z'.split(',')
    var hs = []
    var hl = Number(hashLength)
    var al = ar.length
    for (var i = 0; i < hl; i++) {
        hs.push(ar[Math.floor(Math.random() * al)])
    }
    return hs.join('')
}
