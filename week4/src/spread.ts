// #1 Array copying
export const numbers = [1, 2, 3, 4, 5];

export const originalNumbers = numbers.map(number => number);
console.log(originalNumbers);

// refactor here

export const originalNumbers2 = [...numbers];
console.log(originalNumbers2);

//#2 Combining arrays
export const winners = ['first'];
export const runnerUps = ['second', 'third', 'fourth', 'fifth'];

export const originalContenders = winners.concat(runnerUps); //I changed this to make it log the expected results 
console.log(originalContenders);

// refactor here
export const originalContenders2 = [...winners, ...runnerUps];

// #3 Combining objects
export const bob = {
   man: 'Bob'
};

export const kyle = {
  boy: 'Kyle'
};

export const originalPersons = Object.assign(bob, kyle);

// refactor here

export const originalPersons2 = {...bob, ...kyle};

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
    return Object.assign(task, update);
  }
  return task;
});

// refactor here
 export const originalUpdates2 = data.map(a => {return {...a}});
 originalUpdates2.find(a => a.id === update.id).task = 'Do the other thing... again';
 console.log(originalUpdates2);
