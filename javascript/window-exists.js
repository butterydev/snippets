'use strict'

const windowExists = (callback) => {
  if (typeof window !== 'undefined') {
    if (typeof callback === 'function') {
      callback()
    } else {
      return true
    }
  }

  return false
}
