// variable created w/o a declaration keyword (var, let, or const) are always global.

var a = 4;
function myFunction1() {
    let b = 5;
    console.log(a * a, b * b);
}

myFunction1();