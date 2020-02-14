import { expect } from 'chai';
import 'mocha';

import {ExpertWitness, ExpertCredentials} from'./app';

describe('Test for app.ts', () => {
    
    it('should export Tom\s credentials ', () => {
        let TomCredentials1:ExpertCredentials = {
            education: {
                institutionName: "University Of Colorado",
                degreeEarned: "BA"},
            experience: {
                jobTitle: "Software Developer",
                lengthOfPosition: 3,
            }
        }
        let Tom = new ExpertWitness("Thomas Blanchet", "Mathematics",[TomCredentials1])
    expect(Tom.getExpertCredentials()).to.eql({
        education: {
            institutionName: "University Of Colorado",
            degreeEarned: "BA"},
        experience: {
            jobTitle: "Software Developer",
            lengthOfPosition: 3,
        }})
    });
    
    // it('should tell me whether Tom can testify is true or false', () => {
    // expect(Tom.canTestify()).to.be.false;
    // })
});