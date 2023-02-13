// https://www.coursera.org/learn/html-css-javascript-for-web-developers/lecture/ewvvr/lesson-57-part-2-ajax-basics
(function(global){

    // Set up a namespace for our utility
    var ajaxUtils = {};

    // Returns an HTTP request object
    function getRequestObject() {
        if(window.XMLHttpRequest) {
            console.log(window.XMLHttpRequest);
            return (new XMLHttpRequest());
        }
        else if (window.ActiveXObject) {
            // For Very old IE browsers (optional)
            return (new ActiveXObject("Microsoft.XMLHTTP"));
        }
        else {
            global.alert("Ajax is not supported!");
            return(null);
        }
    }
    // Makes an Ajax GET request to 'requestUrl' - Send a request to the server
    ajaxUtils.sendGetRequest =
        function(requestUrl, responseHandler) {
            var request = getRequestObject();
            request.onreadystatechange = 
            function() {
                handleResponse(request, responseHandler);
            }
            request.open("GET", requestUrl, true); // true = Asynchronus
            request.send(null); // for POST only
        };

    // Only calls user provided 'responseHandler'
    // function if response is ready and not an error
    function handleResponse(request, responseHandler) {
        if((request.readyState == 4) && (request.status == 200)) {
            console.log(request);
            responseHandler(request);

        }
        else {
            //console.log("status = " + request.readyState);
            //console.log("status = " + request.status);
        }
    }

    // Expose utility to the global object
    global.$ajaxUtils = ajaxUtils;
})(window);