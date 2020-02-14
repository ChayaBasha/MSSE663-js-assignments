import { expect } from 'chai';
import 'mocha';

import {heroinesWithReference$} from './observable';

describe('test for observable.ts', () => {
    it('should add imanu to the end of each Heroine name', () => {
        expect(heroinesWithReference$.subscribe(console.log)).to.eql(["Sarah Imanu","Rivkah Imanu","Rachel Imanu","Leah Imanu" ]);
    });
});

