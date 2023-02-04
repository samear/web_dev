// Immediately Invoked Function ExpressionsIIFEs

(function(window) { // expose samGreeter to window
    var esterGreeter = {};
    esterGreeter.name = "sam";
    esterGreeter.sayHi = function() {
        console.log("Hi " + esterGreeter.name);
    }
        window.esterGreeter = esterGreeter; // expose samGreeter to window
    })(window);