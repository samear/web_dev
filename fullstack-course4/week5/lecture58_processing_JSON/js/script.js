// https://www.coursera.org/learn/html-css-javascript-for-web-developers/lecture/25hv4/lesson-57-part-3-ajax-basics
// Event handling
document.addEventListener("DOMContentLoaded",
    function(event) {
        // Unobstrusive event binding
        document.querySelector("button").addEventListener("click", function() {
            //var self = this;
            //var name = "";

            // Call server to get the name
            $ajaxUtils.sendGetRequest("/data/name.json",
            function(res) {
                var message = res.firstName + " " + res.lastName
                if(res.likesChineseFood) {
                    message += " likes Chinese food";
                }
                else {
                    message += " doesn't like Chinese food";
                }
                message += " and uses ";
                message += res.numberOfDisplays + 1;
                message += " displays for coding.";
                document.querySelector("#content").innerHTML = "<h2>" + message + "</h2";
            });
        });
    }
);
