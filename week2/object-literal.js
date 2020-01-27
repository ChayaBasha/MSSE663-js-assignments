/**
 * #1 Create an object literal named `monkey`
 * #2 Give it 3 unique properties
 * #3 Give it at least 2 behaviours/methods of your choice
 * #4 Calls the object's method(s) and output a result of your choice to the console.
 * #5 Convert the object literal to an Class
 * #6 Then call its method and output to the console.
 */
let monkey = {
    kind: "Dusky Leaf Monkey",
    name: "Patches",
    gender: "male",
    noise: "Ooo ooo ah ah",
    food: "leaves",

    Howl: function () {
        return console.log(monkey.noise);
    },

    monkeyEats: function () {
        return monkey.name +" "+ "munches" + " "+ monkey.food;
    }

}

monkey.Howl();
console.log(monkey.monkeyEats());

class monkies {
    constructor(kind, name, gender, noise,food){
        this.monkeyinstant = {kind, name, gender, noise, food}
    }

    Speak() {
        return console.log(this.monkeyinstant.noise);
    }

    Eat() {
        return this.monkeyinstant.name + " " + "munches" + " " + this.monkeyinstant.food;
    }
        
    }

mymonkies = new monkies ("Emperor Tamarin","Whilhelm","male","eeh ah ah","fruits");

mymonkies.Speak();
console.log(mymonkies.Eat());

