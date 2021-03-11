/*
    Classes are special functions, which used upon prototype
*/

//1. Declarations

class Car {
    constructor (model, year) {
        this.model = model;
        this.year = year;
    }
}

//Unlike function, class declaration is not hoisted
//more about this concept in hoist file

//2. Class expression
/*this is another way to define class */

let Car = class {
    constructor (model, year) {
        this.model = model;
        this.year = year
    }
}

let Bird = class Bird2 {
    constructor (type) {
        this.type = type
    }
}

//Constructor is a special method, this word is reserved and be used to create 
// from that class
//class also has getter

class Computer {
    constructor (name, type, year) {
        this.name = name;
        this.type = type;
        this.year = year
    }
    //Getter
    get old() {
        return this.calAge()
    }
    //Method
    calAge() {
        return new Date().getFullYear() - this.year
    }
}

const thinkpad = new Computer('Lenovo', 'laptop', 2005)
console.log(thinkpad.old());

//Class also support generator methods same as generator function
//see generator-function.js for more info

//3.Static methods and properties
/* 
    Static methods and properties are called by the class
    not its instant (object) 
    static methods are mainly used in utilities function, which obviously
    the function of a class
    e.g: Math.round() , Promise.resolve() 
    static properties are similar, which are used in cache, fixed-config..
*/

class Rectangle {
    constructor(x, y) {
        this.x = x;
        this.y = y
    }

    static displayName = 'Rectangle';
    static area() {
        return this.x * this.y
    }
}

let rec1 = new Rectangle(5, 10);
rec1.displayName // undefined
Rectangle.area() // 50

//4.Using this with class

class Book {
    static read() {
        return this
    }

    page() {
        return this
    }
}

Book.read() // class Book
let book1 = new Book();
let reading = book1.read;
reading() //undefined

//5. Fields and instance properties 

class Flower {
    color = 'Red'; // => public field, can be accessed through class
    type = 'rose';
    #fruit = 'rose fruit'; // => private field, can only be used within class
    season; // field can exist without a value

    constructor (season) {
        this.season = season // => instance properties
    }
}

//5. Subclass with extends
/*
    Subclass MUST call the super() inside its constructor
    to call the constructor of the super class
*/

class Animal { // => super class
    constructor (name) {
        this.name = name;
        this.age = 5;
    }

    speak() {
        console.log(`${this.name} is speaking`);
    }
}

class Dog extends Animal { // => sub class
    constructor (name) {
        super(name) // => it's a MUST unless the subclass does not have a constructor
        this.name = name
    }

    bark() {
        console.log(`${this.name} is barking`);
    }

    speak() {
        super().speak() // => this.name is speaking
    }

    age() {
        return this.age
    }
}
