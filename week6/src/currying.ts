// #1 Convert this javascript function to a curried function
export function curryMe(string1:string, string2:string, string3:string): string {
  return string1 + ' ' + string2 + ' ' + string3;
}

// source code here

export function curriedFunction(string1:string) {
  return (string2:string) => {
    return (string3:string) => {
      return string1+ ' ' + string2 + ' ' + string3;
    }
  }
}
// #2 Hoist and convert nested functions to curried functions  
export function doMath(a:number) {
  return function add(b:number) {
    return function subtract(c:number) {
      return a + b - c;
    };
  };
}

// source code here

export const doMoreMath = (a:number) => (b:number) => (c:number) => add(a)(subtract(b)(c));

function add(a:number) {
  return (b:number) => {
    return a + b;
  }
}

function subtract(b:number) {
  return (c:number) => {
    return b - c;
  }
}

// #3 Write a curried function that returns an array containing the ninjas who have a black belt
const ninjasOne:ninja[] = [
  { name: 'Michelangelo', belt: 'white' },
  { name: 'Donatello', belt: 'green' },
  { name: 'Raphael', belt: 'black' },
  { name: 'Leonardo', belt: 'black' },
  { name: 'Mr. Miyagi', belt: 'black' },
  { name: 'Rocky', belt: 'black' },
  { name: 'Colt', belt: 'green' },
  { name: 'Tum Tum', belt: 'white' },
  { name: 'Haru', belt: 'white' },
  { name: 'The Bride', belt: 'black' },
  { name: 'Cammy', belt: 'black' },
  { name: 'Wong Fei-hung', belt: 'green' }
];

const ninjasTwo: ninja[] = [
  { name: 'Michelangelo', belt: 'white' },
  { name: 'Donatello', belt: 'green' },
  { name: 'Raphael', belt: 'black' },
  { name: 'Jim', belt: 'black' },
  { name: 'The Rat', belt: 'black' }
];

// source code here

//first my attempt to just make it do the thing

const allNinjas = ninjasOne.concat(ninjasTwo);

const blackBeltNinjas =allNinjas.filter(function(value) {
  return value.belt == 'black';
});


//my attempt to turn this into a curreied function 

function findBeltColor (beltColor:string) {
  return (...ninjas:ninja[]) => {
    return ninjas.filter(value=>value.belt==beltColor);
  }
}
const findBlackBelts = findBeltColor('black');

export const allBlackBelts = findBlackBelts(...ninjasOne, ...ninjasTwo);

/**
 * #4 Write a curried function that returns a new array of ninja objects with "status" added to each object.
 * The status should be the value of whatever key in the status object matches the ninja's belt.
 *
 * @example { name: 'Colt', belt: 'green', status: 'warrior' }
 */

export const statusTypes: status = {
  white: 'grasshopper',
  green: 'warrior',
  black: 'sensei'
};

export const gamerStatusTypes: status = {
  white: 'Noob',
  green: 'Choob',
  black: 'Legend'
};

// source code here
//my attempt to do the thing 

export const ninjas1: ninja[] = [
  { name: 'Michelangelo', belt: 'white' },
  { name: 'Donatello', belt: 'green' },
  { name: 'Raphael', belt: 'black' },
  { name: 'Leonardo', belt: 'black' },
  { name: 'Mr. Miyagi', belt: 'black' },
  { name: 'Rocky', belt: 'black' },
  { name: 'Colt', belt: 'green' },
  { name: 'Tum Tum', belt: 'white' },
  { name: 'Haru', belt: 'white' },
  { name: 'The Bride', belt: 'black' },
  { name: 'Cammy', belt: 'black' },
  { name: 'Wong Fei-hung', belt: 'green' }
];

export const ninjas2: ninja [] = [
  { name: 'Michelangelo', belt: 'white' },
  { name: 'Donatello', belt: 'green' },
  { name: 'Raphael', belt: 'black' },
  { name: 'Jim', belt: 'black' },
  { name: 'The Rat', belt: 'black' }
];

interface ninja {
  name: string,
  belt: string,
  status?: string
}

type status = {
  [color:string]:string
}

//this is me trying to do the thing without currying the first time

// const addStatus = ninjas1.map(ninja => {
//   if (ninja.belt=='black') {
//     ninja['status']= 'sensei';
//   } else if (ninja.belt=='green') {
//     ninja['status'] = 'warrior';
//   } else {
//     ninja['status'] = 'grasshopper';
//   }
//   return ninja;
// });

//this is me trying to make the function cleaner
const addStatus1 = ninjas1.map(function(ninja) {
  var copyNinja = {...ninja}
  copyNinja.status = statusTypes[copyNinja.belt];
  return copyNinja
}
  
);

//curried here and works for both tasks see tests

export const addStatus2 = (array: ninja[]) => (mapKeyWords: status) => {
  return array.map(function(ninja) {
    var copyNinja = {...ninja}
    copyNinja.status = mapKeyWords[copyNinja.belt];
    return copyNinja
}
  );
};
