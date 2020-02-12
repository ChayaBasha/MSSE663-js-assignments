// #1 Array copying
export const numbers = [1, 2, 3, 4, 5];

export const originalNumbers = numbers.map(number => number);
console.log(originalNumbers);

// refactor here

export const originalNumbers2 =[...numbers];  //using spread operator to copy the array 
console.log(originalNumbers2); 


// #2 Combining arrays
export const winners = ['first'];
export const runnerUps = ['second', 'third', 'fourth', 'fifth'];

export const originalContenders = winners.concat(runnerUps); //fixed code to make it output expected out put
console.log(originalContenders);

//refactor here
export const originalContenders2 = [winners[0], ...runnerUps]; //using spread paramter to add to the array 
console.log(originalContenders2);

// #3 Combining objects
export const bob = {
  man: 'Bob'
};

export const kyle = {
  boy: 'Kyle'
};

export const originalPersons = (<any>Object).assign(bob, kyle); //couldn't get it to compile "Property 'assign' does not exist on type 'ObjectConstructor'"

console.log(originalPersons);

// refactor here
export const originalPersons2 = {...bob,...kyle};
console.log(originalPersons2); 


// #4 Modifying values in arrays of objects
export const data = [
  {
    id: 0,
    task: 'Do the thing'
  },
  {
    id: 1,
    task: 'Do the other thing'
  },
  {
    id: 2,
    task: 'Do the last thing'
  }
];

export const update = {
  id: 1,
  task: 'Do the other thing... again'
};

export const originalUpdates = data.map(task => {
  if (task.id === update.id) {
    return (<any>Object).assign(task, update);
  }
  return task;
});
console.log(originalUpdates);   //I added this to check what outputs in the original version

// refactor here
export const originalUpdates2 = data.map(a => {return {...a}})

originalUpdates2.find(a => a.id == update.id).task = 'Do the other thing...again';

console.log(originalUpdates2);