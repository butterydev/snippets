'use strict'

const decodeHtml = (html) => {
  const text = document.createElement('textarea')
  text.innerHTML = html

  return text.value
}
