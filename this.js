//1. Function context

/*
    Inside a function value of 'this' depends on how the function
    is called, this is not applied in strict mode
*/

function f1() {
    return this;
}

// In a browser:
f1() === window; // true

// In Node:
f1() === globalThis; // true

//2. Class context
/* 
  Inside class context, using 'this' keyword
*/

class Example {
    constructor() {
        const proto = Object.getPrototypeOf(this);
        console.log(Object.getOwnPropertyNames(proto));
    }
    first() { }
    second() { }
    static third() { }
}

new Example(); // ['constructor', 'first', 'second']

//3. Using in object method
/*
    If a function is defined within an object, when calling
    that function, 'this' will referred to the object itself
*/
