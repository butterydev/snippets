// ES5
es5_hasWindow(callback) {
  if (typeof window !== 'undefined') {
    if (typeof callback === 'function') {
      callback();
    } else {
      return true;
    }
  }
}

// ES6
const = es6_hasWindow => (callback) {
  if (typeof window !== 'undefined') {
    if (typeof callback === 'function') {
      callback();
    } else {
      return true;
    }
  }
}
