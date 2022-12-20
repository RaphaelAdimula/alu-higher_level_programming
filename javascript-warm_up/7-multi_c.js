#!/usr/bin/node
// print C is fun number of times of passed script number
const num = process.argv[2];

if (!isNaN(parseInt(process.argv[2]))) {
  for (let i = 0; i < num; i++) {
    console.log('C is fun');
  }
} else {
  console.log('Missing number of occurrences');
}
