import {
  isArray, isObject,
} from './validate'

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
 * @description 判断是否为新的数组
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
 * @description 防抖
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


  return function (...innerArgs) {
    args = innerArgs
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

/**
 * 
 * @param {string} originColor 
 */
export function switchColor(originColor) {
  let color = []

  for (let i of originColor) {
    if (/[A-Z]/.test(i)) {
      i = i.toLocaleLowerCase()
    }
    switch (i) {
    case 'f':
      color.push('0')
      break
    case 'e':
      color.push('1')
      break
    case 'd':
      color.push('2')
      break
    case 'c':
      color.push('3')
      break
    case 'b':
      color.push('4')
      break
    case 'a':
      color.push('5')
      break
    case '0':
      color.push('f')
      break  
    case '1':
      color.push('e')
      break 
    case '2':
      color.push('d')
      break 
    case '3':
      color.push('c')
      break 
    case '4':
      color.push('b')
      break 
    case '5':
      color.push('a')
      break 
    case '6':
      color.push('9')
      break 
    case '7':
      color.push('8')
      break 
    case '8':
      color.push('7')
      break 
    case '9':
      color.push('6')
      break 
    default:
      break
    }
  }
  return color.join('')
}