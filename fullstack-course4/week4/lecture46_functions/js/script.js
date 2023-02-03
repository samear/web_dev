//Function are First-Class Data Types
// Functions ARE objects

function multiply(x, y) {
    return x * y;
}
multiply.version = "v.1.0.0";
console.log("display the actual code: " + multiply); // this return the actual code
console.log("display the proverty version: " + multiply.version);

// Function factory
console.log("Function Factory");
function makeMultiplier(multiplier) {
    console.log("multiplier = " + multiplier);
    let myFunc = function(x) { // same as function myFunc(x)
        console.log("x = " + x);
        return multiplier * x;
    };
    return myFunc;
}
let multiplyBy3 = makeMultiplier(3);
console.log(multiplyBy3(10));
let doubleAll = makeMultiplier(2);
console.log(doubleAll(100));

// Passing functions as arguments
function doOperationOn(x, operation) {
    console.log(operation);
    return operation(x);
}
let result = doOperationOn(5, multiplyBy3);
console.log(result);

result = doOperationOn(100, doubleAll);
console.log(result);