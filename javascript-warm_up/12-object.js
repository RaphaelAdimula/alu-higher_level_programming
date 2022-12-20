#!/usr/bin/node
// objectname.valuetobechanged allow us to change the object value
const myObject = {
  type: 'object',
  value: 12
};
console.log(myObject);

myObject.value = 89;

console.log(myObject);
