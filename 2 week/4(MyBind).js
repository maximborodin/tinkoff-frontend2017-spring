"use strict"

function myBind(func, context) {
  return function() {
    return func.apply(context, arguments);
  };
}

function f() {
  console.log(this);
}

var g = myBind(f, 10, 12);
g();