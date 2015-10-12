'use strict';

var someModule = require('./some-module');

// How to get IntelliSense for constructor function and x?
// Without (!) adding /** @type {Foo} */ here!
var x = new someModule.Foo('Hello!');

console.log(x.someProp);
console.log(x.fooBar());
console.log(x.bar());