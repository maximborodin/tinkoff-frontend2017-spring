"use strict"

function func(arr) {
  return arr.reduce(function(a, b) {
    return a.concat(b);
  });
}

console.log(func([[1, 2], [3, 4, 5], [6]]));