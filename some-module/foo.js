'use strict';

function Foo(someVar) {
    this.bar = function () {
        return someVar;
    };
}

Foo.prototype.fooBar = function () {
    return 'FooBar';
};


Object.defineProperty(Foo.prototype, 'someProp', { value: 'Hello World!' });

module.exports = Foo;