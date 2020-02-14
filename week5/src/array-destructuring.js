"use strict";
exports.__esModule = true;
// #1 Variable swapping
exports.fruits = ['apple', 'banana'];
// Currently, I would get the following returns:
// console.log(a); // 'apple'
// console.log(b); // 'banana'
// deconstruct here
var a = exports.fruits[0], b = exports.fruits[1];
console.log(a);
console.log(b);
// Assign variables using ES6 so that we get (note, you cannot just make a completely new array):
// console.log(a); // 'banana';
// console.log(b); // 'apple';
var b = exports.fruits[0], a = exports.fruits[1];
console.log(a);
console.log(b);
// #2 Variables and Rest
exports.food = ['apple', 'banana', 'chocolate', 'pears', 'oats', 'pizza'];
// deconstruct here
var a = exports.food[0], b = exports.food[1], others = exports.food.slice(2);
console.log(a); // 'apple'
console.log(b); // 'banana'
console.log(others); // ['chocolate, 'pears', 'oats', 'pizza']
// #3 Array: Contruct a statement
var words = ['hello', 'taylor'];
console.log("'" + words.join(", ") + "!'"); // 'hello, taylor!'
