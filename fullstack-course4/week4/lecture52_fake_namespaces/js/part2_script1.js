// Immediately Invoked Function ExpressionsIIFEs
(function(window) { // expose samGreeter to window
var samGreeter = {};
samGreeter.name = "sam";
samGreeter.sayHello = function() {
    console.log("Hello " + samGreeter.name);
}
    window.samGreeter = samGreeter; // expose samGreeter to window
})(window);