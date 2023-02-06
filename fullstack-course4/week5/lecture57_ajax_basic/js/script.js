// https://www.coursera.org/learn/html-css-javascript-for-web-developers/lecture/25hv4/lesson-57-part-3-ajax-basics
// Event handling
document.addEventListener("DOMContentLoaded",
    function(event) {
        // Unobstrusive event binding
        document.querySelector("button").addEventListener("click", function() {
            //var self = this;
            //var name = "";

            // Call server to get the name
            $ajaxUtils.sendGetRequest("/data/name.txt",
            function(request) {
                var name = request.responseText;
                //self.name = request.responseText;
                document.querySelector("#content").innerHTML = "<h2>Hello " + name + "!";;
            });
            //document.querySelector("#content").innerHTML = "<h2>hello " + self.name + "!";
        });
    }
);
