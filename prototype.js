/* 
    To provide inheritance, object can have a 
    prototype object, which is a template
    that inherits methods and properties from its upper inheritance chain
    This is referred to as the '__proto__'
*/

function Dog(name, color) {
    this.name = name; //properties of a dog
    this.color = color
}

//prototype of function constructor
Dog.prototype.bark = function () { 
    console.log(`${this.name} barks!!!!`);
}

let dog1 = new Dog("ruby", "red");

console.log(dog1.toString()); //this function is not defined in Dog constructor but
//is available in Object.prototype, which Dog inherites from

//Note, the methods and properties are not copied but be accessed by 'walking up' the
// prototype chains: dog1.prototype => Dog.prototype => Object.prototype
//this also means if that method can be overwritten in function constructor

//before ES6
console.log(dog1.__proto__); // => { bark: [Function (anonymous)], toString: [Function (anonymous)] }
console.log(dog1.__proto__.__proto__); //[Object: null prototype] {}

//after ES6
console.log(Object.getPrototypeOf(alex)); // => { bark: [Function (anonymous)], toString: [Function (anonymous)] }
console.log(Object.getPrototypeOf(Object.getPrototypeOf(alex))); //[Object: null prototype] {}

//the 2 above are the same

console.log(Dog.prototype); // => { bark: [Function (anonymous)], toString: [Function (anonymous)] }
console.log(Object.getPrototypeOf(Dog)); // => {}

//as we can see, the function constructor prototype is the same
// as its object instance


/*
    all the Object has many properties and methods, only the one starts 
    with 'Object.prototype' are passed down the chain
    In other words, 'prototype' property's value is an object, where we stored
    the methods and properties that we want the objects down the chain to inherit
    e.g: Object.prototype.toString()
    Object.keys() are not ...
    
    NOTE: THE FOLLOWING IS VERY CRUCIAL IN ORDER TO UNDERSTAND PROTOTYPE IN JAVASCRIPT
*/

function Book(name) {
    this.name = name;
}
Book.prototype.read = function () {
    return 'Reading......'
}

const book1 = new Book('Harry Porter')

console.log(Book.prototype); // { read: [Function (anonymous)] }
console.log(book1.__proto__); // { read: [Function (anonymous)] }
console.log(Object.getPrototypeOf(book1)); // { read: [Function (anonymous)] }

/*
    First, in Javascript, everything is Object, Function is no exception
    From the example above, we can see the inheritance chain is:

    Object => function Book() {} => book1

    And we can see that the 'higher chain' .prototype = 'lower chain' .__proto__ = 'lower chain' Object.getPrototypeOf()
*/

/*
the 'constructor' property will return the constructor that creates the object
*/
console.log(book1.constructor.toString()); // => function Book(name) { this.name = name;}

/*
    When update or delete the prototype, it will affect all the instances that created by it
        e.g: Book.prototype.read =... or book1.__proto__.read =...
        will affect all the instances of Book
    */


