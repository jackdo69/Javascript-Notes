function* generator(num) {
    yield num;
    yield num += 5;
}

let fiveIncrement = generator(0);

console.log(fiveIncrement.next().value); // 0
console.log(fiveIncrement.next().value); // 5
console.log(fiveIncrement.next().value); // undefined

/*
this function generator create a Generator object
each time next().value is called, it will yield the value
in this case is 'num', yield is written 2 times so the third
next().value yield undefined
*/