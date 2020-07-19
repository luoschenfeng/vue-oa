export const isArray = Array.isArray

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
 * @param {object} obj
 * @param {boolean} NUMBERZERO
 */
function emptyObject(obj, NUMBERZERO) {
  let isEmpty = true

  for (let value of Object.values(obj)) {
    if (isObject(value) || isArray(value)) {
      isEmpty = emptyObject(value)
    } else if (Boolean(value) || (Boolean(NUMBERZERO === true) && value === 0)) {
      isEmpty = false
      break
    }
  }

  return isEmpty
}

/**
 *
 * @param {object} obj
 * @param {boolean} NUMBERZERO
 */
export function isEmptyObject(obj, NUMBERZERO = true) {

  if (isObject(obj)) {
    return emptyObject(obj, NUMBERZERO)
  } else {
    throw new Error('not a object')
  }
}

/**
 * @param {Function} func
 * @param {number} wait
 * @param {boolean} immediate
 * @return {*}
 */
export function debounce(func, wait, immediate) {
  let timeout, args, context, initTimestamp, currentTimestamp, result

  const later = function () {
    timeout = null

    // 如果设定为immediate===true，因为开始边界已经调用过了此处无需调用
    if (!immediate) {
      result = func.apply(context, args)
      if (!timeout) { context = args = null }
    }
  }


  return function (...innerargs) {
    args = innerargs
    context = this
    currentTimestamp = +new Date()
    const callNow = immediate && !timeout

    if (callNow) {
      result = func.apply(context, args)
      context = args = null
    }

    // 如果延时不存在，重新设定延时
    if (!timeout) {
      initTimestamp = +new Date()
      timeout = setTimeout(later, wait)
    } else {
      clearTimeout(timeout)
      timeout = setTimeout(later, wait - (currentTimestamp - initTimestamp))
    }

    return result
  }
}
