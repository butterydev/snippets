// ES5
function es5_deepCopyObject(object) {
  return JSON.parse(JSON.stringify(object));
};

// ES6
const es6_deepCopyObject = (object) => {
  return(JSON.parse(JSON.stringify(object)));
};
