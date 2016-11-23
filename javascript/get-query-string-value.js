// ES5
function es5_getQueryString(queryName) {

  var query = window.location.search.substring(1);
  var vars = query.split('&');

  for (var i = 0; i < vars.length; i++) {

    var pair = vars[i].split('=');

    if (pair[0] == queryName) {

      return(pair[1]);

    }
  }

  return(false);

}

// ES6
const es6_getQueryString = (queryName) => {

  const query = window.location.search.substring(1);
  const vars = query.split('&');

  for (let i = 0; i < vars.length; i++) {

    let pair = vars[i].split('=');

    if (pair[0] == queryName) {

      return(pair[1]);

    }
  }

  return(false);

}
