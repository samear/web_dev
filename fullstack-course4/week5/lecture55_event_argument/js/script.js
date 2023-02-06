// to demonstrate the event argument.
// this script displays x & y coordidate of the mouse when the shift-key pressed.
document.addEventListener("DOMContentLoaded",
    function(event) {
        
        document.querySelector("body").addEventListener("mousemove",
            function(event) {
                if(event.shiftKey === true) {
                    console.log("x: " + event.clientX);
                    console.log("y: " + event.clientY);
                }
            }
        );
    }
);
