let a = {
    type: 'red',
    getType: function() {
        return this.type
    }
}

let b = a.getType;

let c = b.bind(a)
console.log(b());
console.log(c());

/*
    the 'bind' keyword return a new function that wraps around the original function
    the parameter inside the bind is the value of 'this' that we want to bound to the
    original function
*/