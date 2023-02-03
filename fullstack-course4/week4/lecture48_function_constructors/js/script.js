// Function constructors
function Circle(radius) {   //Capital letter means this func is a constructor
    this.radius = radius;

    // Having this function inside of a constuctor waiste computing resource
    // because everytime a new Circle object is created it will creat a new getArea as well.
    // Hence it needs to move out as below. 
    /* this.getArea = function() {
        return Math.PI * Math.pow(this.radius, 2);
    } */
    // return {}; constructor CANNOT return anything
}
Circle.prototype.getArea = function() {
    return Math.PI * Math.pow(this.radius, 2);
}

let myCircle = new Circle(10); // the new keyword is used to create object constructor
console.log(myCircle);
console.log(myCircle.getArea());

let myCircle2 = new Circle(20);
console.log(myCircle2);
console.log(myCircle2.getArea());