function run1() {
    console.log(foo); // undefined is a value in JS
    var foo = "Fooooo"; 
    console.log(foo);   // Fooooo
}

function run2() {
    console.log(bar);   // error because bar is defined with let
    let bar = "Barrrr";
    console.log(bar);
}
run1();
run2();