export const isArray = Array.isArray

/**
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
 *
 * @param {string} str
 * @param {RegExp} regexp
 * @return {boolean}
 */
export function match(str, regexp) {
  return regexp.test(str)
}

