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
    var allCategoriesUrl = "https://coursera-jhu-default-rtdb.firebaseio.com/categories.json";
    var categoriesTitleHtml = "snippets/categories_title_snippet.html";
    var categoryHtml = "snippets/category_snippet.html";

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

    // Return substitute of '{{propName}}
    // With propValue in given 'string'
    var insertProperty = function(string, propName, propValue) {
        var propToReplace = "{{" + propName + "}}";
        string = string.replace(new RegExp(propToReplace, "g"), propValue);
        return string;
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
            false // false = no json
        ); 
    });

    // Load the menu categories view
    dc.loadMenuCategories = function() {
        showLoading("#main-content");
        $ajaxUtils.sendGetRequest(allCategoriesUrl, buildAndShowCategoriesHTML);
    };

    // Builds HTML for the categories page based on the data from the server
    function buildAndShowCategoriesHTML(categories) {
        // Load title snipped of categories page
        $ajaxUtils.sendGetRequest(categoriesTitleHtml,
            function(categoriesTitleHtml) {
                // Retrieve single category snippet
                $ajaxUtils.sendGetRequest(categoryHtml,
                    function(categoryHtml) {
                        var categoriesViewHtml = buildCategoriesViewHtml(categories, categoriesTitleHtml, categoryHtml);
                        insertHtml("#main-content", categoriesViewHtml);
                    },
                    false
                );    
            },
            false
        );
    }

    // Using categories data and snippets html
    // build categories view HTML to be inserted into page
    function buildCategoriesViewHtml(categories, categoriesTitleHtml, categoryHtml) {
        var finalHtml = categoriesTitleHtml;
        finalHtml += "<section class='row'>";
        
        // Loop over categories
        for(var i = 0; i < categories.length; i++) {
            // Insert category values
            var html = categoryHtml;
            var name = "" + categories[i].name;
            var short_name = categories[i].short_name;
            html = insertProperty(html, "name", name);
            html = insertProperty(html, "short_name", short_name);
            finalHtml += html;
        }
        finalHtml += "</section>";
        return finalHtml;
    }
    global.$dc = dc;
})(window);