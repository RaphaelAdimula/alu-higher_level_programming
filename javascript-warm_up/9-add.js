#!/usr/bin/node
// function add to passed integers
function add (a, b) {
  console.log(parseInt(a) + parseInt(b));
}
add(process.argv[2], process.argv[3]);
