// Object literals and "this"
// this works exactly like function constructor
let literalCircle = { // new Object()
    radius: 10,

    getArea: function() {
        console.log("this is this keyword: " + this);
        return Math.PI * Math.pow(this.radius, 2);
    }
};

console.log(literalCircle.getArea());