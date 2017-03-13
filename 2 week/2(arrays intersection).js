"use strict"

function intersection(arr1, arr2) {
  var resArr = [];
  for (var i of arr1) {
    if (i in arr2) {
      resArr.push(i);
    }
  }
  return resArr;
}

var resArr = intersection([1, 3, 5, 7, 9], [1, 2, 3, 4]);
var str = "";
for (var i of resArr) {
  str += i + ' ';
}
console.log(str);