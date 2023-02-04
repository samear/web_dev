// when calling script1.js and script2.js, the output will be:
// Hello ester  instead of Hello sam
// Hi ester
/* var name = "ester";

function sayHi() {
    console.log("Hi " + name);
} */

// namespace will fix the above issue
var samGreeter = {};
samGreeter.name = "sam";
samGreeter.sayHello = function() {
    console.log("Hello " + samGreeter.name);
}