import { expect } from 'chai';
import 'mocha';
import { curryMe, curriedFunction, doMath, doMoreMath, allBlackBelts, addStatus2, ninjas1, statusTypes, ninjas2, gamerStatusTypes } from './currying';

describe('Currying tests', () => {
  it('#1 should output the same result as the original function', () => {
    expect(curryMe('bing','bang','bam')).to.equal(curriedFunction('bing')('bang')('bam'))
  });

  it('#2 should output the same result as the original function', () => {
    expect(doMath(3)(256)(7)).to.equal(doMoreMath(3)(256)(7))
  });

  it('#3 should return an array containing the ninjas who have a black belt', () => {
    const expected = [{ name: 'Raphael', belt: 'black' },
    { name: 'Leonardo', belt: 'black' },
    { name: 'Mr. Miyagi', belt: 'black' },
    { name: 'Rocky', belt: 'black' },
    { name: 'The Bride', belt: 'black' },
    { name: 'Cammy', belt: 'black' },
    { name: 'Raphael', belt: 'black' },
    { name: 'Jim', belt: 'black' },
    { name: 'The Rat', belt: 'black' }]
    expect(allBlackBelts).to.eql(expected);
  });

  it('#4 should return a new array of ninja objects with "status" added to each object', () => {
    const expected1 = [ { name: 'Michelangelo', belt: 'white', status: 'grasshopper' },
    { name: 'Donatello', belt: 'green', status: 'warrior' },
    { name: 'Raphael', belt: 'black', status: 'sensei' },
    { name: 'Leonardo', belt: 'black', status: 'sensei' },
    { name: 'Mr. Miyagi', belt: 'black', status: 'sensei' },
    { name: 'Rocky', belt: 'black', status: 'sensei' },
    { name: 'Colt', belt: 'green', status: 'warrior' },
    { name: 'Tum Tum', belt: 'white', status: 'grasshopper' },
    { name: 'Haru', belt: 'white', status: 'grasshopper' },
    { name: 'The Bride', belt: 'black', status: 'sensei' },
    { name: 'Cammy', belt: 'black', status: 'sensei' },
    { name: 'Wong Fei-hung', belt: 'green', status: 'warrior' }]
  expect(addStatus2(ninjas1)(statusTypes)).to.eql(expected1);
});
const expected2 = [ { name: 'Michelangelo', belt: 'white', status: 'Noob' },
{ name: 'Donatello', belt: 'green', status: 'Choob' },
{ name: 'Raphael', belt: 'black', status: 'Legend' },
{ name: 'Jim', belt: 'black', status: 'Legend' },
{ name: 'The Rat', belt: 'black', status: 'Legend' }]
expect(addStatus2(ninjas2)(gamerStatusTypes)).to.eql(expected2);
});
