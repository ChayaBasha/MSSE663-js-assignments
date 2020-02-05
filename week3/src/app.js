//This app determines whether a person can testify as an expert witness
//I created a class called ExpertWitness that uses the interface Expert
var ExpertWitness = /** @class */ (function () {
    function ExpertWitness(name, expertise, credentials) {
        this.name = name;
        this.expertise = expertise;
        this.credentials = credentials;
        this.name = name;
        this.expertise = expertise;
        this.credentials = credentials;
    }
    ExpertWitness.prototype.getExpertCredentials = function () {
        return this.credentials;
    };
    ExpertWitness.prototype.canTestify = function () {
        return (this.credentials.length >= 2);
    };
    return ExpertWitness;
}());
//I created a variable for Tom's Credentials to make the inputted data a little easier to read 
var TomCredentials1 = {
    education: {
        institutionName: "University Of Colorado",
        degreeEarned: "BA"
    },
    experience: {
        jobTitle: "Software Developer",
        lengthOfPosition: 3
    }
};
//I created a new instance of ExpertWitness called Tom
var Tom = new ExpertWitness("Thomas Blanchet", "Mathematics", [TomCredentials1]);
console.log(Tom.getExpertCredentials());
//Tom cannot testify becuase he only has one set of Credentnials
console.log(Tom.canTestify());
