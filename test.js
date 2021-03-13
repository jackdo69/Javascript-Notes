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