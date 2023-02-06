
function sayHello(event) {
    this.textContent = "Said it!"; // change the label of the button
    var name1 = document.getElementById("name").value;
    var message = "<h2>Hello " + name1 + "!<h2>";
    
    //document.getElementById("content").textContent = message;

    // disply the message on the page
    //innerHTMl tells the browser message as HTML so that <h2> get affected. 
    document.getElementById("content").innerHTML = message;

    if(name1 === "student") {
        // get the title from the page and set it to variable title
        //var title = document.getElementById("title").textContent; same
        var title = document.querySelector("#title").textContent;
        title += " & Lovin' it!";
        console.log(title);
      
        // display the title on the page
        //ocument.getElementById("title").textContent = title;
        document.querySelector("h1").textContent = title;
    }
}

// Unobstrusive event binding
document.querySelector("button").addEventListener("click", sayHello);

//document.querySelector("button").onclick = sayHello;