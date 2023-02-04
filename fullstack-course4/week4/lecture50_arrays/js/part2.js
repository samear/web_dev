var names = ["sam", "ester", "karen"];

console.log("*** first for loop ***");
for(var i = 0; i < names.length; i++) {
    console.log("Hello " + names[i]);
}

console.log("*** New kind of for loop ***");
for(var n in names) {
    console.log("Hello " + names[n]);
}

// object literal
var myObj = {
    sam: "sam",
    course: "HTML/CSS/JS",
    platform: "coursera"
}
console.log("*** Print Object literal with for loop ***");
for(var prop in myObj) {
    console.log(prop + ": " + myObj[prop]);
}