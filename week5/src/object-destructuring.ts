// #1 Object Destructuring
export const object = { name: 'elvis', title: 'hip swinger' };

// deconstruct here

var {name: person, title:job}= object;
console.log(person); // 'elvis'
console.log(job); // 'hip swinger'

export {person, job};

// #2 Object Matching: Nested destructuring
export const nestedObject = {
  user: 'elvis',
  address: {
    city: 'denver',
    state: 'colorado'
  },
  id: 1
};

// deconstruct here
var {user, address, id} = nestedObject;
console.log(user); // 'elvis'
console.log(address); // { city: 'denver', state: 'colorado' }
console.log(id); // 1

export {user, address, id};

// #4 Create a new object given the destrutured values above

// reconstruct here
export var newObject = {person, job, city:address.city};

// #3 Object with key value pairs: construct a statement
const object3 = { greeting: 'hello', name: 'taylor' }; //I changed this becuase VSCode was angry about it
var {greeting, name} = object3
export const taylorGreeting = greeting + ", " + name + "!";// 'hello, taylor!'
