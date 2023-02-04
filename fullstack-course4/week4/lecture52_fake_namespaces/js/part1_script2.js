// when calling script1.js and script2.js, the output will be:
// Hello ester  instead of Hello sam
// Hi ester
/* var name = "ester";

function sayHi() {
    console.log("Hi " + name);
} */

// namespace will fix the above issue
var esterGreeter = {};
esterGreeter.name = "ester";
esterGreeter.sayHi = function() {
    console.log("Hi " + esterGreeter.name);
}