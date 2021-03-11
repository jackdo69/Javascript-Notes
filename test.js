function Person () {
    this.name = 'alex'
}

Person.prototype.color = 'red';

const person1 = new Person();
console.log(Person.constructor.toString());

