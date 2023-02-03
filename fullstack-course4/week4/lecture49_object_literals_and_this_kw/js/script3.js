// Object literals and "this" keyword
// this works exactly like function constructor
// this code is to set self = this to get around the issue of this
// that is pointing to local
var literalCircle = { // new Object()
    radius: 10,

    getArea: function() {
        var self = this; // get around
        console.log(":::" + this.radius);

        var increaseRadius = function() {
            self.radius = 20; // get around
        }
        
        increaseRadius();
        console.log(">>>" + this.radius);
        return Math.PI * Math.pow(this.radius, 2);
    }
};

console.log(literalCircle.getArea());
console.log("windows.radius = " + window.radius); // display global object
console.log(literalCircle);
// line 9 - let self = this force "this" keyword to be local.
// now inner function now points to "this"