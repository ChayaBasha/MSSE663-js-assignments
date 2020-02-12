import { expect } from 'chai';
import 'mocha';

import {originalNumbers2} from './spread';

describe ('Test for #1', () => {
    it('should copy the array from numbers', ()=> {
        expect(console.log(originalNumbers2)).to.equal([1,2,3,4,5])
    }) 
});

import {}
