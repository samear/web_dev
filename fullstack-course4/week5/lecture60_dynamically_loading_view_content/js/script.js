// https://www.coursera.org/learn/html-css-javascript-for-web-developers/lecture/n14Z3/lecture-60-dynamically-loading-home-view-content
// The purpose of this script is to make main content load as SPA
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

(function(global) {
    var dc = {};
    var homeHtml = "snippets/home_snippet.html";

    // convinience function for inserting innerHTML for 'select'
    var insertHtml = function(selector, html) {
        var targetElem = document.querySelector(selector);
        targetElem.innerHTML = html;
    };

    // Show loading icon inside element identified by 'selector'
    var showLoading = function(selector) {
        var html = "<div class='text-center'>";
        html += "<img src='images/ajax-loader.gif'></div>"; //www.ajaxload.info
        insertHtml(selector, html);
    };

    // On page load (before images or CSS)
    document.addEventListener("DOMContentLoaded", function(event) {
        // On first load, show home view
        showLoading("#main-content");
        $ajaxUtils.sendGetRequest(
            homeHtml,
            function(responseText) {
                document.querySelector("#main-content").innerHTML = responseText;
            },
            false); // false = no json
    });
    global.$dc = dc;
})(window);