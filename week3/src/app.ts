//This app determines whether a person can testify as an expert witness


//I created a type called ExpertCredentials that requires two objects for the expert's education and experience
export type ExpertCredentials = {
    education: {
        institutionName: string,
        degreeEarned: string,
    },
    experience: {
        jobTitle: string,
        lengthOfPosition: number,
    }  

}
//I create an interface called Expert with 3 properties and 2 methods as specified
export interface Expert{
    name: string;
    expertise: string;
    credentials: Array<ExpertCredentials>;

    getExpertCredentials: () => Array<ExpertCredentials>;
    canTestify: () => boolean;

}
//I created a class called ExpertWitness that uses the interface Expert
export class ExpertWitness implements Expert {
    constructor(
        public name: string,
        public expertise: string,
        public credentials: Array<ExpertCredentials>,
    
    ) {
        
    }

    getExpertCredentials(): Array<ExpertCredentials> {
        return this.credentials; 
    }
    canTestify(): boolean {
        return this.credentials.length >= 2
     
    }
}
//I created a variable for Tom's Credentials to make the inputted data a little easier to read 
export let TomCredentials1:ExpertCredentials = {
    education: {
        institutionName: "University Of Colorado",
        degreeEarned: "BA"},
    experience: {
        jobTitle: "Software Developer",
        lengthOfPosition: 3,
    }
}
//I created a new instance of ExpertWitness called Tom
let Tom = new ExpertWitness("Thomas Blanchet", "Mathematics",[TomCredentials1])
console.log(Tom.getExpertCredentials());
//Tom cannot testify becuase he only has one set of Credentnials
console.log(Tom.canTestify());