import { expect } from 'chai';
import 'mocha';

import {heroinesWithReference$} from './observable';

describe('test for observable.ts', () => {
    it('should add imanu to the end of each Heroine name', () => {
        const expected = ['Sarah Imanu', 'Rivka Imanu', 'Rachel Imanu', 'Leah Imanu'];
        heroinesWithReference$.subscribe(heroine => { expect(heroine).to.equal(expected);
    });
    });
});
