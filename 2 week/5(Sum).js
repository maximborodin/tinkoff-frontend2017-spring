"use strict"

function sum(a) {
  var accumSum = 0;

  function func(b) {
    if (b === undefined) {
      b = 0;
    }
    accumSum += b;
    return func;
  }

  func.toString = function() {
    return accumSum;
  };
  func.valueOf = function() {
    return accumSum;
  };

  return func(a);
}

//var test = sum(1)();
//console.log(test.valueOf());
var result = sum()()(227)()()()(3)()(-2)(10)(62)()()()()();
console.log(result.valueOf());