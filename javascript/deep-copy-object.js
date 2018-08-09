'use strict'

const deepCopyObject = (object) => {
  return(JSON.parse(JSON.stringify(object)))
}
