'use strict'

const previousSiblings = (selector, limit) => {
	const $_element = document.querySelector(selector)
  const siblings = []

	let $_previousSibling = $_element.previousElementSibling
  let counter = 0

  let condition = '$_previousSibling'

  if (limit) {
  	condition = '$_previousSibling && counter < limit'
  }

  while (eval(condition)) {
  	siblings.push($_previousSibling)

    $_previousSibling = $_previousSibling.previousElementSibling
    counter = counter + 1
  }

  return siblings
}

const nextSiblings = (selector, limit) => {
	const $_element = document.querySelector(selector)
  const siblings = []

	let $_nextSibling = $_element.nextElementSibling
  let counter = 0

  let condition = '$_nextSibling'

  if (limit) {
  	condition = '$_nextSibling && counter < limit'
  }

  while (eval(condition)) {
  	siblings.push($_nextSibling)

    $_nextSibling = $_nextSibling.nextElementSibling
    counter = counter + 1
  }

  return siblings
}