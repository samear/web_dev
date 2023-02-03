// Object literals and "this" keyword
// this works exactly like function constructor
let literalCircle = { // new Object()
    radius: 10,

    getArea: function() {
        console.log("this is this keyword: " + this.radius);

        let increaseRadius = function() {
            this.radius = 20; // no effect because this.radius is global object instead of literal object
        }
        increaseRadius();
        console.log("radius did not get increased to 20 :::" + this.radius);
        return Math.PI * Math.pow(this.radius, 2);
    }
};

console.log(literalCircle.getArea());
console.log("windows.radius = " + window.radius); // display global object

// radius did not get increased to 20 because when you have
// an inner function within another function, "this" keyword (line 10) 
// inside the inner fuction is pointing to global object
// which is 20. But "this" keyword (line 14) outside of increaseRadius is 
// pointing to local object.

// see script3.js to get around this issue.