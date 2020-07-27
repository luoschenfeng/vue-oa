export const isArray = Array.isArray

/**
 * @description 验证是否是个对象
 * @param {object} obj
 * @return {boolean}
 */
export function isObject(obj) {
  const type = typeof obj

  if (obj !== null && type === 'object') {
    return true
  } else {
    return false
  }
}

/**
 * @description 验证是否正则匹配
 * @param {string} str
 * @param {RegExp} regexp
 * @return {boolean}
 */
export function match(str, regexp) {
  return regexp.test(str)
}

