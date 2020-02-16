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

export var array1 = [a,b] = [b,a];

// #2 Variables and Rest
export const food = ['apple', 'banana', 'chocolate', 'pears', 'oats', 'pizza'];

// deconstruct here
var [a,b, ...others] = food;
export var food2 = [a,b,others];

console.log(a); // 'apple'
console.log(b); // 'banana'
console.log(others); // ['chocolate, 'pears', 'oats', 'pizza']

// #3 Array: Contruct a statement
const words = ['hello', 'taylor'];
export const statement = "'" +words.join(", ")+"!'";// 'hello, taylor!'
