"use strict";
exports.__esModule = true;
var chai_1 = require("chai");
require("mocha");
var spread_1 = require("./spread");
describe('Test for #1', function () {
    it('should copy the array from numbers', function () {
        chai_1.expect(console.log(spread_1.originalNumbers2)).to.equal([1, 2, 3, 4, 5]);
    });
});
