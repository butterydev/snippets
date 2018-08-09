'use strict'

const getQueryStringValue = (queryName) => {
  const query = window.location.search.substring(1)
  const vars = query.split('&')

  for (let i = 0; i < vars.length; i++) {
    let pair = vars[i].split('=')

    if (pair[0] == queryName) {
      return(pair[1])
    }
  }

  return(false)
}
