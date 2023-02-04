// Closures - https://www.coursera.org/learn/html-css-javascript-for-web-developers/lecture/5jhf0/lecture-51-closures
function makeMultiplier(multiplier) {
    // var multiplier = 2;
    console.log(multiplier);
    return ( // first return
        function(x) {
            return multiplier * x;
        }
    );
}

var doubleAll = makeMultiplier(2); //doubleAll contains function(x) because it receives the first return
console.log(doubleAll(10));  // doubleAll(1) is the same as calling function(10)