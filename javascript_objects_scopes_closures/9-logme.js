#!/usr/bin/node
// number arguments and its respective value
let count = 0;

exports.logMe = function (item) {
  console.log(count + ': ' + item);
  count++;
};
