"use strict"

function hexToBin(number) {
  if (number <= 1) {
    return '' + number;
  }
  return ('' + hexToBin((number / 2)| 0) + (number & 1));
}


var str = hexToBin(16);
console.log(str);