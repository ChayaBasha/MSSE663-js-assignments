// #1 Variable swapping
export const fruits = ['apple', 'banana'];

// Currently, I would get the following returns:
// console.log(a); // 'apple'
// console.log(b); // 'banana'

// deconstruct here

export var [b, a] = fruits;


// Assign variables using ES6 so that we get (note, you cannot just make a completely new array):
// console.log(a); // 'banana';
// console.log(b); // 'apple';

// #2 Variables and Rest
export const food = ['apple', 'banana', 'chocolate', 'pears', 'oats', 'pizza'];

// deconstruct here
var [c,d, ...others] = food;
export var food2 = [c,d,others];

console.log(c); // 'apple'
console.log(d); // 'banana'
console.log(others); // ['chocolate, 'pears', 'oats', 'pizza']

// #3 Array: Contruct a statement
const words = ['hello', 'taylor'];
export const [salutation, person] = words;
export const statement = "'" + salutation +',' + ' ' + person + '!' + "'";
