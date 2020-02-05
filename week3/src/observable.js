"use strict";
exports.__esModule = true;
// Source code here
var rxjs_1 = require("rxjs");
var operators_1 = require("rxjs/operators");
var heroine$ = rxjs_1.of("Sarah", "Rivkah", "Rachel", "Leah");
var heroinesWithReference$ = heroine$.pipe(operators_1.map(function (heroine, index) { return heroine + " " + "Imanu"; }));
heroinesWithReference$.subscribe(console.log);
