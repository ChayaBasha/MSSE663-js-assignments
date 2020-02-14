import { expect } from 'chai';
import 'mocha';

import {originalNumbers2, numbers} from'./spread';

describe('test for #1', () => {
    it('should copy the numbers array', () => {
        expect(originalNumbers2).to.eql(numbers)
    });
}); 

import {originalContenders2} from './spread';

describe('test for #2', () => {
    it('should add the arrays together', () => {
        expect(originalContenders2).to.eql(["first", "second", "third", "fourth", "fifth"]);
    }

    )
}
); 

import{originalPersons2} from './spread';

describe('test for #3', () => {
    it('should combine the objects', () => {
        expect(originalPersons2).to.eql({man: 'Bob', boy: 'Kyle'})
    }

    )
}

)

import{originalUpdates2} from './spread';

describe('test for #4', () => {
    it('should change the second task', () => {
        expect(originalUpdates2[1]).to.eql({id: 1, task: 'Do the other thing... again'})
    }

    )
}

)