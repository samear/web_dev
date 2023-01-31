// string concatination
/* var string = "Hello";
//string += " World";
string = string + " world";
console.log(string + "!"); */

//** regular math operators: +, -, *, / */
/* console.log((5+4)/3)
console.log(undefined / 5);

function test1(a) {
    console.log(a / 5);
}
test1(); */

// Equality
/* var x = 4, y = 4;
if(x == y) {
    console.log("x='4' is equal to y = 4");
} */

/* x = "4";
if(x == y) { //js automatically converts string x to number
    console.log(x);
    console.log("x='4' is equal to y = 4");
} */

// Strict equality
/* if(x === y) {
    console.log("Strict: x='4' is equal to y = 4");
}
else {
    console.log("Strict: x='4' is NOT equal to y=4");
} */

// part 2
// if statement (all false)
/* console.log('- "" is ' + Boolean(""));
console.log("- null is" + Boolean(null));
console.log("- 0 is " + Boolean(0));
console.log("- false is " + Boolean(false));
console.log("- NaN is " + Boolean(NaN));
console.log("- Undefined is " + Boolean(undefined));

if(false || null || undefined || "" || 0 || NaN) {
    console.log("This line won't ever execute");
}
else {
    console.log("All false");
}

// if statement (all true)
if(true && "hello" && 1 && -1 && "false") {
    console.log("All true");
} */

// part 3 - Best practice for  {} style
// Curly brace on the same or next line... Is it just a style?
function a() 
{
    return // this will return undefine becasue js engine is expecting something after return keyword.
    {       // hence, behind the scene it adds a semi-column after the return statement.
        name: "sam"
    };
}

function b() {
    return {
        name: "ear"
    };
}
console.log(a());
console.log(b());

// for loop
var sum = 0;
for(var i = 0; i < 10; i++) {
    console.log(i);
    sum = sum + i;
}
console.log("sum of 0 through 9 is: " + sum);
