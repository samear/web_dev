// https://www.coursera.org/learn/html-css-javascript-for-web-developers/lecture/uGlgn/lecture-59-fixing-mobile-nav-menu-automatic-collapse
// The purpose of this script is to make the Mobile Navigation to collapse when user clicks
// anywhere outside of the menu

$(function() { // Same as document.addEventListener("DOMContentLoad"...
    
    // Same as document.querySelector("#navbarToggle").addEventListener("b."
    $("#navbarToggle").blur(function(event) {
        var screenWidth = window.innerWidth;
        if(screenWidth < 768) {
            $("#collapsable-nav").collapse('hide');
        }
    });
});