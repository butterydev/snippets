'use strict'

const isObjectEmpty = (object) => {
	if (object.constructor === Object && Object.keys(object).length === 0) {
		return true
	}

	return false
}
