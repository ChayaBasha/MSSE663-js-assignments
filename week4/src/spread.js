"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
exports.__esModule = true;
// #1 Array copying
exports.numbers = [1, 2, 3, 4, 5];
exports.originalNumbers = exports.numbers.map(function (number) { return number; });
console.log(exports.originalNumbers);
// refactor here
exports.originalNumbers2 = __spreadArrays(exports.numbers); //using spread operator to copy the array 
console.log(exports.originalNumbers2);
// #2 Combining arrays
exports.winners = ['first'];
exports.runnerUps = ['second', 'third', 'fourth', 'fifth'];
exports.originalContenders = exports.winners.concat(exports.runnerUps); //fixed code to make it output expected out put
console.log(exports.originalContenders);
//refactor here
exports.originalContenders2 = __spreadArrays([exports.winners[0]], exports.runnerUps); //using spread paramter to add to the array 
console.log(exports.originalContenders2);
// #3 Combining objects
exports.bob = {
    man: 'Bob'
};
exports.kyle = {
    boy: 'Kyle'
};
exports.originalPersons = Object.assign(exports.bob, exports.kyle); //couldn't get it to compile "Property 'assign' does not exist on type 'ObjectConstructor'"
console.log(exports.originalPersons);
// refactor here
exports.originalPersons2 = __assign(__assign({}, exports.bob), exports.kyle);
console.log(exports.originalPersons2);
// #4 Modifying values in arrays of objects
exports.data = [
    {
        id: 0,
        task: 'Do the thing'
    },
    {
        id: 1,
        task: 'Do the other thing'
    },
    {
        id: 2,
        task: 'Do the last thing'
    }
];
exports.update = {
    id: 1,
    task: 'Do the other thing... again'
};
exports.originalUpdates = exports.data.map(function (task) {
    if (task.id === exports.update.id) {
        return Object.assign(task, exports.update);
    }
    return task;
});
console.log(exports.originalUpdates); //I added this to check what outputs in the original version
// refactor here
exports.originalUpdates2 = exports.data.map(function (a) { return __assign({}, a); });
exports.originalUpdates2.find(function (a) { return a.id == exports.update.id; }).task = 'Do the other thing...again';
console.log(exports.originalUpdates2);
