"use strict";
exports.__esModule = true;
// #1 Object Destructuring
exports.object = { name: 'elvis', title: 'hip swinger' };
// deconstruct here
var person = exports.object.name, job = exports.object.title;
console.log(person); // 'elvis'
console.log(job); // 'hip swinger'
// #2 Object Matching: Nested destructuring
exports.nestedObject = {
    user: 'elvis',
    address: {
        city: 'denver',
        state: 'colorado'
    },
    id: 1
};
// deconstruct here
var user = exports.nestedObject.user, address = exports.nestedObject.address, id = exports.nestedObject.id;
console.log(user); // 'elvis'
console.log(address); // { city: 'denver', state: 'colorado' }
console.log(id); // 1
// // #4 Create a new object given the destrutured values above
// // reconstruct here
// // #3 Object with key value pairs: construct a statement
// { greeting: 'hello', name: 'taylor' }
// // 'hello, taylor!'
