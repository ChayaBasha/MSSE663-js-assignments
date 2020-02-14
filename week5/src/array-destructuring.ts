// #1 Variable swapping
export const fruits = ['apple', 'banana'];

// Currently, I would get the following returns:
// console.log(a); // 'apple'
// console.log(b); // 'banana'

// deconstruct here

var [a,b] = fruits;
console.log(a);
console.log(b);

// Assign variables using ES6 so that we get (note, you cannot just make a completely new array):
// console.log(a); // 'banana';
// console.log(b); // 'apple';

var [b,a] = fruits;
console.log(a);
console.log(b);

// #2 Variables and Rest
export const food = ['apple', 'banana', 'chocolate', 'pears', 'oats', 'pizza'];

// deconstruct here
var [a,b, ...others] = food;

console.log(a); // 'apple'
console.log(b); // 'banana'
console.log(others); // ['chocolate, 'pears', 'oats', 'pizza']

// #3 Array: Contruct a statement
const words = ['hello', 'taylor'];
console.log("'" +words.join(", ")+"!'");// 'hello, taylor!'
