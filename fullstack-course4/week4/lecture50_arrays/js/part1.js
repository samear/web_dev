// Arrays
/* var array = new Array();
array[0] = "sam";
array[1] = 2;
array[2] = function(name) {
    console.log("hello, " + name);
};
array[3] = {course: " HTML, CSS, JS"}; //object literal

console.log(array);
array[2]("ester");  // calling function
array[2](array[0]); // calling function
console.log(array[3].course); */

// Alternative way... Short hand array creation
var names = ['sam', 'ester', 'karen'];
for(var i = 0; i < names.length; i++) {
    console.log("Hello " + names[i]);
}
console.log("GAP");
names[10] = "Jim";
for(var i = 0; i < names.length; i++) {
    console.log("hello " + names[i]);
}

console.log("Array with literal object")
var firstNames = [
    {name: "sam"},
    {name: "ester"},
    "karen"];
console.log(firstNames);
