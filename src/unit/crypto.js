
import {
  getHash,
} from '@/api/common'

import AES from 'crypto-js/aes'

/**
 * @description 获取key
 * @return {string}
 */
function createHash() {
  return new Promise((resolve, reject) => {
    getHash()
      .then(data => {
        const {
          hash,
        } = data

        resolve(hash)
      })
      .catch(err => reject(err))
  })
}


/**
 * @description createHash 得到hash加密
 * @param {string} message
 */
export function encrypto(message) {
  return new Promise((resolve, reject) => {
    createHash()
      .then(hash => {
        const ciphertext = AES.encrypt(message, hash).toString()

        resolve(ciphertext)
      })
      .catch(err=> reject(err))
  })
}
