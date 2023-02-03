// Copy by Reference vs by Value

// pass by value
/* console.log("passing by value");
let a = 7;
let b = a;
console.log("a: " + a);
console.log("b: " + b);

b = 5;
console.log("after b update:");
console.log("a: " + a);
console.log("b: " + b);

// pass by reference
console.log("passing by reference")
let c = {x: 7};
let d = c;
console.log(c);
console.log(d);

d.x = 5;
console.log("after d.x update");
console.log(c);
console.log(d); */

// Pass by reference vs by value
console.log("changePrimitive func");
function changePrimitive(primValue) {
    console.log("in changePrimitive...");
    console.log("before");
    console.log(primValue);

    primValue = 5;
    console.log("after:");
    console.log(primValue);
}

let value = 7;
changePrimitive(value); // primValue = value
console.log("after changePrimitive, orig value:");
console.log(value);

// pass object
console.log("pass object");
function changeobject(objValue) {
    console.log("in changeObject...");
    console.log("before:");
    console.log(objValue);

    objValue.x = 5;
    console.log("after");
    console.log(objValue);
}

value = {x: 7};
changeobject(value);  // objValue = value
console.log("after changeObject, orig value:");
console.log(value);