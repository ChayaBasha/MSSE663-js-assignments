import { expect } from 'chai';
import 'mocha';

import {a,b, food2, statement} from './array-destructuring';

describe('Array destructuring tests', () => {
  it('#1 should have a variable for every element in the given array', () => {
    expect(b).to.eql('apple');
    expect(a).to.equal('banana');
  });
    
  it('#2 should have a variable for the first 2 elements then spread the rest', () => {
    expect(food2).to.eql(['apple','banana',['chocolate', 'pears', 'oats', 'pizza']])
  });

  it('#3 should construct a statement from the given objarrayect', () => {
    expect(statement).to.eql("'hello, taylor!'")
  });
});
