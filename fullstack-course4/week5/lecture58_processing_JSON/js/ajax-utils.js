// https://www.coursera.org/learn/html-css-javascript-for-web-developers/lecture/vzFlv/lecture-58-processing-json
(function(global){

    // Set up a namespace for our utility
    var ajaxUtils = {};

    // Returns an HTTP request object
    function getRequestObject() {
        if(window.XMLHttpRequest) {
            console.log("XMLHttpRequest = " + window.XMLHttpRequest);
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
    // Makes an Ajax GET request to 'requestUrl'
    ajaxUtils.sendGetRequest =
        function(requestUrl, responseHandler, isJsonResponse) {
            var request = getRequestObject();
            console.log("request = " + request);
            request.onreadystatechange = 
            function() {
                handleResponse(request, responseHandler, isJsonResponse);
            }
            console.log("request.onreadystatechange = " + request.onreadystatechange);
            request.open("GET", requestUrl, true); // true = Asynchronus
            request.send(null); // for POST only
        };

    // Only calls user provided 'responseHandler'
    // function if response is ready and not an error
    function handleResponse(request, responseHandler, isJsonResponse) {
        if((request.readyState == 4) && (request.status == 200)) {
            // Default to isJsonResponse = true
            if(isJsonResponse == undefined) {
                isJsonResponse = true;
            }
            if(isJsonResponse) {
                responseHandler(JSON.parse(request.responseText))
            }
            else {
                responseHandler(request.responseText);
            }
        }
    }

    // Expose utility to the global object
    global.$ajaxUtils = ajaxUtils;
})(window);