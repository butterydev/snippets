'use strict'

const isObject = (entity) => {
	if (entity.constructor === Object) {
		return true
	}

	return false
}