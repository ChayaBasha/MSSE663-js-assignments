import { expect } from 'chai';
import 'mocha';

import {ExpertWitness, ExpertCredentials, TomCredentials1} from'./app';

describe('Test for app.ts', () => {
    let Tom = new ExpertWitness ("Thomas Blanchet", "Mathematics",[TomCredentials1])
    it('should export Tom\s credentials ', () => {
    expect(Tom.getExpertCredentials()).to.equal({
        education: {
            institutionName: "University Of Colorado",
            degreeEarned: "BA"},
        experience: {
            jobTitle: "Software Developer",
            lengthOfPosition: 3,
        }})
    });
    
    it('should tell me whether Tom can testify is true or false', () => {
    expect(Tom.canTestify()).to.equal(false)
    })
});